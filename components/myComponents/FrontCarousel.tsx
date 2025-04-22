import React, { useRef, useState, useEffect } from 'react';
import { FlatList, View, Image, StyleSheet, Dimensions, Animated } from 'react-native';

const images = [
    {uri:'https://tse3.mm.bing.net/th?id=OIP.Ci4ns3JrHahKF9rKLdS5UwHaHc&pid=Api&P=0&h=180'},
    {uri:'https://tse3.mm.bing.net/th?id=OIP.Ci4ns3JrHahKF9rKLdS5UwHaHc&pid=Api&P=0&h=180'},
    {uri:'https://webstockreview.net/images/clipart-restaurant-waiter-16.png'},
    {uri:'https://tse3.mm.bing.net/th?id=OIP.Ci4ns3JrHahKF9rKLdS5UwHaHc&pid=Api&P=0&h=180'},
    {uri:'https://tse2.mm.bing.net/th?id=OIP.FCAM3O9qj0u-h1pOzQcKTAHaHa&pid=Api&P=0&h=180'},
  
];

const { width } = Dimensions.get('window');

const FrontCarousel = () => {
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
        <View >
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
        width: "100%",
        height: 400,
        borderRadius: 10,
    },
    dotsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: 30,
    },
    dot: {
        width: 8,
        height: 8,
        borderRadius: 50,
        backgroundColor: '#FFD2B3',
        marginHorizontal: 4,
    },
    activeDot: {
        backgroundColor: '#FF7622',
        width: 10,
        height: 10,
      
    },
});

export default FrontCarousel;
