import React, { useRef, useEffect, useState } from 'react';
import {
  View,
  FlatList,
  Image,
  StyleSheet,
  Dimensions,
  NativeScrollEvent,
  NativeSyntheticEvent,
} from 'react-native';
import light from '../../theme/light';

const { width } = Dimensions.get('window');
interface ImageSliderProps {
  images: (string | number)[];
  interval?: number;
  showDots?: boolean;
  imageWidth?: number
}

const ImageSlider: React.FC<ImageSliderProps> = ({
  images,
  interval = 3000,
  showDots = false,
  imageWidth = width
}) => {
  const flatListRef = useRef<FlatList>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  // Auto scroll
  useEffect(() => {
    const timer = setInterval(() => {
      const nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current?.scrollToIndex({
        index: nextIndex,
        animated: true,
      });
      setCurrentIndex(nextIndex);
    }, interval);

    return () => clearInterval(timer);
  }, [currentIndex, images.length, interval]);

  const onMomentumScrollEnd = (e: NativeSyntheticEvent<NativeScrollEvent>) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };
  return (
    <View style={styles.container}>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <Image
            source={typeof item === 'string' ? { uri: item } : item}
            style={[styles.image, { width: imageWidth }]}
            resizeMode="cover"
          />
        )}
        onMomentumScrollEnd={onMomentumScrollEnd}
      />

      {showDots && (
        <View style={styles.pagination}>
          {images.map((_, i) => (
            <View
              key={i}
              style={[
                styles.dot,
                currentIndex === i ? styles.activeDot : styles.inactiveDot,
              ]}
            />
          ))}
        </View>
      )}
    </View>
  );
};

export default ImageSlider;
const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%',
  },
  image: {
    // width: width,
    height: '100%',
    borderRadius: 12
  },
  pagination: {
    marginVertical: 8,
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4, // ✅ Sửa lại, không dùng '50%' trong React Native
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: light.Primary,
    width: 8,
    height: 8,
    borderRadius: 5,
  },
  inactiveDot: {
    backgroundColor: '#ccc',
  },
});
