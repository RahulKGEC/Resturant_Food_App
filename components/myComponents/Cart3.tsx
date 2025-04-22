import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { AntDesign, FontAwesome } from '@expo/vector-icons'

const Cart3 = () => {
    return (
        <>
            <View
                style={{
                    // height: 220,

                    width: 150,
                    borderRadius: 18,
                    backgroundColor: "#fff",
                    padding: 8,
                    marginTop: 60,

                    // iOS shadow
                    shadowColor: "#000",
                    shadowOffset: { width: 3, height: 5 }, // right and bottom
                    shadowOpacity: 0.2,
                    shadowRadius: 5,

                    // Android shadow
                    elevation: 6,

                }}
            >
                <View style={{ alignItems: "center" }}>
                    <Image
                        source={{ uri: "http://www.pngmart.com/files/16/Classic-Cheese-Burger-PNG-Transparent-Image.png" }}
                        style={{ width: 110, height: 99, borderRadius: 15, position: "absolute", top: -65 }}
                    />
                </View>
                <View style={{ marginHorizontal: 5, gap: 3, marginTop: 34 }}>
                    <Text style={{ fontSize: 14, fontWeight: "700" }}>European Pizza</Text>
                    <Text style={{ fontSize: 13, fontWeight: "400", color: "gray" }}>
                        Uttora Coffee
                    </Text>
                </View>


                <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center", paddingHorizontal: 4, marginTop: 5 }}>

                    <View >
                        <Text style={{ fontWeight: "700", fontSize: 17 }}>
                            $ 40
                        </Text>
                    </View>
                    <View>
                        <View
                            style={{
                                height: 30,
                                width: 30,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "50%",
                                backgroundColor: "#FF7622",
                                // flexDirection:"row"
                            }}
                        >


                            <AntDesign name="plus" size={20} color="white" />

                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Cart3

const styles = StyleSheet.create({})