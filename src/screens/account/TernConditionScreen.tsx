import { View, Text } from 'react-native'
import React from 'react'
import AppSafeAreaView from '../../components/view/AppSafeAreaView'
import AppBlock from '../../components/view/AppBlock'
import HeaderBack from '../../components/header/HeaderBack'
import { useTranslation } from 'react-i18next'
import { ScrollView } from 'react-native-gesture-handler'
import AppText from '../../components/text/AppText'

const TernConditionScreen = () => {
    const {t}= useTranslation();
  return (
    <AppSafeAreaView>
        <AppBlock flex style={{width:'95%'}}>
            <HeaderBack title={t('terms_conditions')}/>
            <ScrollView style={{flex:1}}>
                <AppText size={16} weight='600' semiBold>Điều khoản sử dụng dịch vụ của BankCS</AppText>
                <AppText mt={8} size={14} weight='400'>Phạm vi áp dụng của Chính sách là tất cả các đối tượng sử dụng (sau đây gọi tắt là “Người dùng”), ứng dụng BankCS - Tài Chính Thông Minh (sau đây gọi tắt là “Ứng dụng di động”), website https://bankcs.com.vn/ (sau đây gọi tắt là “Website”), không giới hạn ở các hình thức đăng ký sử dụng dịch vụ của BC, đăng ký thông tin và đăng ký tài khoản.Chính sách bảo mật được xây dựng nhằm cho bạn biết được BC sẽ/có thể thu thập, sử dụng, tiết lộ, bảo mật và/hoặc xử lý dữ liệu mà bạn đã cung cấp cho BC như thế nào, và chính sách này được xây dựng dựa trên quy định pháp luật Việt Nam liên quan đến bảo mật dữ liệu cá nhân.Bằng cách chọn xác nhận vào tiêu mục “Đồng ý điều khoản trong Chính Sách Bảo Mật” khi đăng ký sử dụng, đăng ký thông tin, đăng ký tài khoản trên Ứng dụng di động và/hoặc Website của BC, bạn thừa nhận rằng đồng ý toàn bộ các điều khoản và điều kiện quy định tại Chính Sách Bảo Mật này và cho phép BC thu thập, sử dụng, tiết lộ và/hoặc xử lý dữ liệu cá nhân của bạn như mô tả trong đây. Trong trường hợp từ chối Chính Sách Bảo Mật, bạn có thể không tải xuống, không đăng ký vào Ứng dụng di động, hoặc không sử dụng các dịch vụ được cung cấp qua Website của BC.Vui lòng đọc kỹ Chính Sách Bảo Mật này trước khi gửi/cung cấp bất kỳ thông tin nào cho BC hoặc khi được BC yêu cầu.</AppText>
                <AppText mt={12} size={16} weight='600' semiBold>1. THU THẬP DỮ LIỆU CÁ NHÂN</AppText>
                <AppText size={14} weight='400'>1.1. Dữ liệu cá nhân nghĩa là và tham chiếu đến thông tin cá nhân gắn với việc xác định danh tính của một người cụ thể (sau đây gọi tắt là “Dữ Liệu Cá Nhân”). Dữ liệu cá nhân mà BC sẽ/có thể thu thập bao gồm, nhưng không giới hạn:</AppText>
                <AppText mt={8} size={14} weight='400'>    -Họ và Tên; </AppText>
                <AppText size={14} weight='400'>    -Ngày tháng năm sinh; </AppText>
                <AppText size={14} weight='400'>    -Số CMND hoặc Hộ chiếu; </AppText>
                <AppText size={14} weight='400'>    -Địa chỉ liên hệ; </AppText>
                <AppText size={14} weight='400'>    -Địa chỉ thư điện tử; </AppText>
                <AppText size={14} weight='400'>    -Danh bạ điện thoại; </AppText>
                <AppText mt={8} size={14} weight='400'>Công ty Tài chính TNHH MTV Ngân Hàng Việt Nam Thịnh Vượng – Lầu 2, Ree Tower, Số 09 Đoàn Văn Bơ, P.12, Quận 4, Tp.HCM (028 39 333 888 (07:00 – 19:00 thứ Hai đến Chủ Nhật và các ngày lễ) | dichvukhachhang@fecredit.com.vn https://fecredit.com.vn/ Theo quy định tại Điều 406 Bộ Luật Dân sự 2015 về Điều kiện giao dịch chung trong giao kết hợp đồng thì “Điều kiện giao dịch chung là những điều khoản ổn định do một bên công bố để áp dụng chung cho bên được đề nghị giao kết hợp đồng; nếu bên được đề nghị chấp nhận giao kết hợp đồng thì coi như chấp nhận các điều khoản này”. Bản Điều khoản Điều kiện Cho vay được Công ty Tài chính Ngân hàng Việt Nam Thịnh Vượng (VPB FC) công bố công khai tại website https://fecredit.com.vn/ để áp dụng chung cho các Bên Đề nghị vay vốn theo các sản phẩm cho vay tiêu dùng của VPB FC từng thời kỳ (như Sản phẩm cho vay cá nhân tiêu dùng – PL, Cho vay mua xe hai bánh – TW, Cho vay mua hàng gia dụng – TW…). Bản Điều khoản Điều kiện này là một phần không tách rời Hợp đồng tín dụng (Hợp đồng) được ký giữa VPB FC và Bên vay. Bằng việc ký xác nhận tại Hợp đồng tín dụng, Bên vay đồng ý tuân theo các quy định tại Bản Điều khoản Điều kiện này. 1. Giải ngân khoản vay 1.1 Đối với khoản vay cá nhân tiêu dùng (Personal Loan/PL), tùy thuộc vào đề nghị của Khách hàng tại Hợp đồng tín dụng, Bên vay sẽ nhận tiền giải ngân qua tài khoản của Bên vay mở tại Ngân hàng hoặc các phương tiện thanh toán khác phù hợp với quy định pháp luật, hoặc nhận tiền tại các Đối tác chi hộ của VPB FC hoặc theo thông báo của VPB FC từng thời kỳ. Bên vay có nghĩa vụ giữ gìn mã bảo mật (nếu có) được cung cấp bởi VPB FC để nhận khoản giải ngân. VPB FC được miễn trừ trách nhiệm trong trường hợp Bên vay để lộ mã bảo mật cho bất kỳ bên thứ ba nào vì bất kỳ lý do gì dẫn đến Bên vay không rút được tiền vay và/hoặc khoản vay bị chiếm đoạt bởi bên thứ ba. Các Đối tác chi hộ của VPB FC bao gồm VIETNAMPOST, VPBANK, hoặc các Đối tác khác hoặc không được thanh toán đầy đủ và/hoặc Bên </AppText>
            </ScrollView>
        </AppBlock>
    </AppSafeAreaView>
  )
}

export default TernConditionScreen