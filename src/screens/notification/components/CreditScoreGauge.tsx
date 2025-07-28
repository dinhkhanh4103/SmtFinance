import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';
import Svg, { Circle, Defs, LinearGradient, Stop, Path } from 'react-native-svg';

const { width } = Dimensions.get('window');
const gaugeRadius = (width * 0.7) / 2; // Bán kính của đồng hồ (ví dụ: 70% chiều rộng màn hình)
const strokeWidth = 15; // Độ dày của đường arc
const circumference = Math.PI * gaugeRadius; // Chu vi (nửa hình tròn)
const startAngle = 180; // Bắt đầu từ 180 độ (phía trái)
const endAngle = 360; // Kết thúc ở 360 độ (phía phải)

// Hàm tính toán tọa độ điểm trên đường tròn
const polarToCartesian = (centerX, centerY, radius, angleInDegrees) => {
  const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
  return {
    x: centerX + (radius * Math.cos(angleInRadians)),
    y: centerY + (radius * Math.sin(angleInRadians))
  };
};

// Hàm tạo đường arc cho SVG Path
const describeArc = (x, y, radius, startAngle, endAngle) => {
  const start = polarToCartesian(x, y, radius, endAngle);
  const end = polarToCartesian(x, y, radius, startAngle);

  const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1";

  const d = [
    "M", start.x, start.y,
    "A", radius, radius, 0, largeArcFlag, 0, end.x, end.y
  ].join(" ");

  return d;
};


const CreditScoreGauge = ({ score = 429, status = "Good", maxScore = 800 }) => {
  // Tính toán phần trăm điểm
  const scorePercentage = Math.min(1, score / maxScore); // Đảm bảo không vượt quá 100%

  // Tính toán offset của đường màu (để hiển thị phần điểm đã đạt được)
  // Đường dasharray = [độ dài phần tô màu, độ dài phần còn lại của cung tròn]
  const filledPathLength = circumference * scorePercentage;
  const emptyPathLength = circumference - filledPathLength;

  // Tính toán góc cho kim chỉ
  // Đồng hồ đo từ 0 đến 180 độ (bán nguyệt)
  const pointerAngle = (scorePercentage * 180) + 0; // Thêm 0 để kim chỉ bắt đầu từ dưới cùng bên trái

  // Vị trí của kim chỉ
  const gaugeCenterX = gaugeRadius + strokeWidth / 2;
  const gaugeCenterY = gaugeRadius + strokeWidth / 2;

  const pointerX1 = gaugeCenterX;
  const pointerY1 = gaugeCenterY;
  


  // Màu sắc gradient cho đường arc
  const gradientColors = {
    start: '#FF6347', // Đỏ cam (low score)
    middle1: '#FFA500', // Cam (medium score)
    middle2: '#90EE90', // Xanh lá nhạt (good score)
    end: '#4682B4', // Xanh dương (high score)
  };

  return (
    <View style={styles.card}>
      <Text style={styles.title}>ĐIỂM TÍN DỤNG</Text>

      <View style={styles.gaugeContainer}>
        <Svg
          height={gaugeRadius + strokeWidth}
          width={gaugeRadius * 2 + strokeWidth + 4}
          viewBox={`0 0 ${gaugeRadius * 2 + strokeWidth} ${gaugeRadius + strokeWidth}`}
        >
          <Defs>
            {/* Gradient cho đường arc */}
            <LinearGradient id="gradientArc" x1="0%" y1="0%" x2="100%" y2="0%">
              <Stop offset="0%" stopColor={gradientColors.start} />
              <Stop offset="30%" stopColor={gradientColors.middle1} />
              <Stop offset="60%" stopColor={gradientColors.middle2} />
              <Stop offset="100%" stopColor={gradientColors.end} />
            </LinearGradient>
          </Defs>

          {/* Đường nền màu trắng cho đồng hồ đo */}
          <Circle
            cx={gaugeRadius + strokeWidth / 2}
            cy={gaugeRadius + strokeWidth / 2}
            r={gaugeRadius}
            stroke="white" // Màu trắng xám cho phần chưa đạt
            strokeWidth={strokeWidth + 4}
            fill="transparent"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={circumference} // Điều chỉnh để bán nguyệt hướng lên
            strokeLinecap="square"
          />

          {/* Đường arc thể hiện điểm số (có gradient) */}
          <Path
            d={describeArc(gaugeRadius + strokeWidth / 2, gaugeRadius + strokeWidth / 2, gaugeRadius, 180,360)}
            stroke="url(#gradientArc)" // Áp dụng gradient
            strokeWidth={strokeWidth}
            fill="transparent"
            strokeLinecap="round"
            strokeDasharray={`${circumference} ${circumference}`}
            strokeDashoffset={circumference - filledPathLength} // Điều chỉnh offset để vẽ phần màu
          />
          
          
        </Svg>
      </View>

      <View style={styles.scoreTextContainer}>
        <Text style={styles.scoreText}>{score} ĐIỂM</Text>
        <Text style={styles.statusText}>{status}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
     // Màu nền tổng thể của card (màu be/cam nhạt)
    borderRadius: 15,
    paddingVertical: 20,
    paddingHorizontal: 15,
    alignItems: 'center',
    width: '100%',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#D2691E', // Màu cam đất đậm
    marginBottom: 10,
  },
  gaugeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
   
  },
  scoreTextContainer: {
    position: 'absolute', // Để văn bản nằm trong đồng hồ đo
    top: '65%', // Điều chỉnh vị trí dọc
    alignItems: 'center',
  },
  scoreText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white', // Màu trắng
    marginBottom: 5,
  },
  statusText: {
    fontSize: 18,
    color: 'white', // Màu trắng
    fontWeight: '600',
  },
});

export default CreditScoreGauge;