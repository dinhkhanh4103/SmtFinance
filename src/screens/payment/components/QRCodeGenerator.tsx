import React, { useState, useEffect } from 'react';
import {
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  Text,
  Alert // Thêm Alert để thông báo lỗi (nếu cần)
} from 'react-native';
import QRCode from 'react-native-qrcode-svg';

const { width } = Dimensions.get('window');

const QRCodeGenerator = () => {
  // ----------------------------------------------------
  // ĐỊNH NGHĨA CÁC THÔNG TIN MẶC ĐỊNH Ở ĐÂY
  // ----------------------------------------------------
  const defaultBankCode = 'MB'; // Ví dụ: Vietcombank
  const defaultAccountNumber = '0904172582'; // Số tài khoản mặc định
  const defaultAccountName = 'DINH DUC KHANH'; // Tên chủ tài khoản mặc định (viết hoa, không dấu)
  const defaultAmount = '500000'; // Số tiền mặc định (để trống nếu không muốn có số tiền)
  const defaultDescription = 'Thanh toan dich vu XYZ'; // Nội dung chuyển khoản mặc định (để trống nếu không muốn)
  // ----------------------------------------------------

  const [qrValue, setQrValue] = useState(''); // Chuỗi dữ liệu sẽ được mã hóa vào QR

  // Sử dụng useEffect để tạo QR ngay khi component được tải
  useEffect(() => {
    generateQrCodeValue();
  }, []); // [] đảm bảo hàm này chỉ chạy một lần khi component mount

  const generateQrCodeValue = () => {
    // Kiểm tra thông tin cơ bản
    if (!defaultBankCode || !defaultAccountNumber || !defaultAccountName) {
      Alert.alert('Lỗi cấu hình', 'Thiếu thông tin tài khoản ngân hàng mặc định.');
      setQrValue('');
      return;
    }

    // Tạo chuỗi dữ liệu theo định dạng phổ biến (không phải chuẩn VietQR đầy đủ)
    let value = `STK:${defaultAccountNumber},NH:${defaultBankCode.toUpperCase()},CTK:${defaultAccountName.toUpperCase()}`;

    if (defaultAmount) {
      value += `,SOTIEN:${defaultAmount}`;
    }
    if (defaultDescription) {
      value += `,ND:${defaultDescription}`;
    }
    
    setQrValue(value);
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}> {/* Đổi ScrollView thành View nếu không cần cuộn */}
        <Text style={styles.title}>Mã QR Chuyển Khoản</Text>

        {qrValue ? (
          <View style={styles.qrCodeContainer}>
            <QRCode
              value={qrValue}
              size={width * 0.7}
              color="black"
              backgroundColor="white"
            />
            <Text style={styles.qrValueText}>
              Quét mã để chuyển khoản đến:
            </Text>
            <Text style={styles.qrInfoText}>
              Ngân hàng: {defaultBankCode.toUpperCase()}
            </Text>
            <Text style={styles.qrInfoText}>
              Số tài khoản: {defaultAccountNumber}
            </Text>
            <Text style={styles.qrInfoText}>
              Tên chủ TK: {defaultAccountName}
            </Text>
            {defaultAmount && (
                <Text style={styles.qrInfoText}>
                    Số tiền: {Number(defaultAmount).toLocaleString('vi-VN')} VNĐ
                </Text>
            )}
            {defaultDescription && (
                <Text style={styles.qrInfoText}>
                    Nội dung: {defaultDescription}
                </Text>
            )}
          </View>
        ) : (
          <Text style={styles.placeholderText}>Đang tạo mã QR...</Text>
        )}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  container: {
    flex: 1, // Đảm bảo container chiếm toàn bộ không gian
    alignItems: 'center',
    justifyContent: 'center', // Căn giữa nội dung
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#333',
  },
  qrCodeContainer: {
    width: width * 0.8,
    // height: width * 0.8, // Bỏ height cố định để nó tự co giãn theo nội dung
    backgroundColor: 'white',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20, // Tăng padding để có không gian cho text
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  qrValueText: {
    marginTop: 20,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'center',
  },
  qrInfoText: {
    fontSize: 14,
    color: '#666',
    marginTop: 5,
    textAlign: 'center',
  },
  placeholderText: {
    fontSize: 16,
    color: '#aaa',
  },
});

export default QRCodeGenerator;