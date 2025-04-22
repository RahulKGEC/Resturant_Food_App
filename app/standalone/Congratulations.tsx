import React from 'react';
import { View, SafeAreaView, StyleSheet, Text, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';

const Congratulations = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.box}>
                <LottieView
                    source={require('../../assets/congratulations.json')} // your local file
                    autoPlay
                    loop
                    style={{ width: 200, height: 200 }}
                />
            </View>


            <View>
                <Text style={{ fontWeight: "800", fontSize: 24 }}> Congratulations!</Text>

            </View>

            <View style={{ width: 280, marginTop: 19 }}>
                <Text style={{ fontWeight: "300", fontSize: 12 }}> Congratulations! Lorem ipsum dolor sit amet consectetur adipisicing elit. In ipsum molestias vel velit explicabo sint dicta reprehenderit amet repellat eum sapiente cupiditate, pariatur facilis quos!</Text>

            </View>





            <TouchableOpacity style={{ marginTop:200,height: 50, width: "85%", backgroundColor: "#FF7622", justifyContent: "center", alignItems: "center", borderRadius: 10, marginVertical: 10 }} >
                <Text style={{ color: "white", fontWeight: "700" }}>
                    TRACK ORDER 
                </Text>
            </TouchableOpacity>

        </SafeAreaView>
    );
};

export default Congratulations;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: 250,
        height: 250,
        justifyContent: 'center',
        alignItems: 'center',
    },
});
