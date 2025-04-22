import React, { useRef, useState, useEffect } from 'react';
import { FlatList, View, Image, StyleSheet, Dimensions, Animated } from 'react-native';

const images = [
  require('../../assets/images/detail1.png'),
  require('../../assets/images/detail2.png'),
  require('../../assets/images/detail1.png'),
  require('../../assets/images/detail2.png'),
  require('../../assets/images/detail1.png'),
  require('../../assets/images/detail2.png'),
  require('../../assets/images/detail1.png'),
  require('../../assets/images/detail2.png'),
  require('../../assets/images/detail1.png'),
  require('../../assets/images/detail2.png'),
  require('../../assets/images/detail1.png'),
  
];

const { width } = Dimensions.get('window');

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef();

  // Auto slide every 2 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      let nextIndex = (currentIndex + 1) % images.length;
      flatListRef.current.scrollToIndex({ index: nextIndex, animated: true });
      setCurrentIndex(nextIndex);
    }, 2000);

    return () => clearInterval(timer); // cleanup
  }, [currentIndex]);

  // Update index on scroll
  const onScroll = (e) => {
    const index = Math.round(e.nativeEvent.contentOffset.x / width);
    setCurrentIndex(index);
  };

  return (
    <View>
      <FlatList
        ref={flatListRef}
        data={images}
        horizontal
        pagingEnabled
        onScroll={onScroll}
        showsHorizontalScrollIndicator={false}
        keyExtractor={(_, index) => index.toString()}
        renderItem={({ item }) => (
          <View style={styles.slide}>
            <Image source={item} style={styles.image} />
          </View>
        )}
      />

      {/* Dots */}
      <View style={styles.dotsContainer}>
        {images.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              currentIndex === index && styles.activeDot
            ]}
          />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  slide: {
    width,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: width * 0.9,
    height: 200,
    borderRadius: 10,
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 10,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#ccc',
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: '#333',
    width: 10,
    height: 10,
  },
});

export default Carousel;
