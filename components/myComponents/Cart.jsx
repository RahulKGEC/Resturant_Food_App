
import { ImageComponent, SafeAreaView, ScrollView, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Feather, FontAwesome, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useRouter } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { TextInput } from 'react-native-gesture-handler'

const Cart = () => {
    return (
        <>


            <View style={{
                width: "100%", height: 250,
                //  borderColor: "red", borderWidth: 2 ,
                gap: 10
            }}>
                <Image source={{uri:'https://tse1.mm.bing.net/th?id=OIP.g9meiANJcKP0ekLeCy4laQHaE7&pid=Api&P=0&h=180'}} style={{ width: "100%", height: 130, borderRadius: 18 }} />
                <Text style={{ fontWeight: "500", fontSize: 21 }}>
                    Rose Garden Resturant
                </Text>
                <Text style={{ fontWeight: "400", fontSize: 14, color: "#BFBFBF" }}>
                    Burger - Chicken - Riche - Wings
                </Text>


                <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        {/* <FontAwesome name="star" size={24} color="gold" /> */}
                        <FontAwesome name="star-o" size={24} color="#FF7622" />
                        <Text style={{ fontWeight: "800", fontSize: 15 }}>
                            4.7
                        </Text>

                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        {/* <FontAwesome name="star" size={24} color="gold" /> */}
                        <MaterialCommunityIcons name="truck-fast-outline" size={24} color="#FF7622" />
                        <Text style={{ fontWeight: "800", fontSize: 15 }}>
                            4.7
                        </Text>

                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                        {/* <FontAwesome name="star" size={24} color="gold" /> */}
                        <AntDesign name="clockcircleo" size={22} color="#FF7622" />
                        <Text style={{ fontWeight: "800", fontSize: 15 }}>
                            4.7
                        </Text>

                    </View>
                </View>


            </View>
        </>
    )
}

export default Cart

const styles = StyleSheet.create({})