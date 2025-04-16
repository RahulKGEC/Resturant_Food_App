import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Cart2 = () => {
    const route = useRouter()
    return (
        <View
            style={{
                height: 170,
                width: 150,
                borderRadius: 18,
                // marginLeft: 15,
                backgroundColor: "#fff", // card background
                padding: 8,
                shadowColor: "#000", // iOS shadow
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.1,
                shadowRadius: 4,
                elevation: 4, // Android shadow
                gap: 8,
            }}
        >
            <View style={{ alignItems: "center" }}>
                <Image
                    source={require("../../assets/images/detail2.png")}
                    style={{ width: 130, height: 100, borderRadius: 15 }}
                />
            </View>
            <View style={{ marginHorizontal: 5, gap: 3 }}>
                <Text style={{ fontSize: 14, fontWeight: "700" }}>European Pizza</Text>
                <Text style={{ fontSize: 13, fontWeight: "400", color: "gray" }}>
                    Uttora Coffee 
                </Text>
            </View>
        </View>
    )
}

export default Cart2

const styles = StyleSheet.create({})