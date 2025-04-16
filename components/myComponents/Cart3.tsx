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
                        Uttora Coffee House3
                    </Text>
                </View>


                <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"center",paddingHorizontal:4,marginTop:-10}}>

                    <View >
                        <Text style={{fontWeight:"700",fontSize:17}}>
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


                            <AntDesign name="plus" size={26}  color="white" />

                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Cart3

const styles = StyleSheet.create({})