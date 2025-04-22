import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useContext, useState } from 'react'
import { AntDesign, Entypo, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { CartContext } from '../(drawer)/(tabs)'

const CartBlack = () => {


    const { addToCart, wish, setCart, setWish, cart, addToWish, deleteFromCart, deleteFromWish } = useContext(CartContext)
    const updateQTY = (ele1, dependency) => {
        if (dependency === 1) {
            const updated = cart.map((ele) => {
                if (ele.id === ele1.id) {

                    return { ...ele1, qty: ele1.qty + 1 }
                }
                else {
                    return ele
                }

            })

            setCart(updated)
        }
        if (dependency === 0) {
            const updated = cart.map((ele) => {
                if (ele.id === ele1.id) {

                    return { ...ele, qty: ele?.qty - 1 }
                }
                else {
                    return ele
                }

            })

            setCart(updated)
        }

    }


    const route = useRouter()
    return (
        <SafeAreaView style={{ backgroundColor: "black", flex: 1 }}>
            <ScrollView >
                <View style={{ marginHorizontal: 18 }}>

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 25, alignItems: "center", }}>


                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, }}>

                            <View
                                style={{
                                    height: 35,
                                    width: 35,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "50%",
                                    backgroundColor: "#2A2A39",
                                    // flexDirection:"row"
                                }}
                            >


                                <FontAwesome name="angle-left" color="white" size={26} onPress={() => route.back()} />

                            </View>

                            <Text style={{ fontSize: 18, color: "white" }}>
                                Cart
                            </Text>
                        </View>




                        <TouchableOpacity onPress={() => route.push("/standalone/EditScreen")}>
                            <Text style={{ fontSize: 17, color: "#FF7622", textDecorationLine: "underline" }}>
                                EDIT ITEM
                            </Text>
                        </TouchableOpacity>

                    </View>
                    {cart?.length && cart.map((ele) => (



                        <View
                            //   key={index}
                            style={[
                                {
                                    height: 150,
                                    width: "100%",
                                    marginTop: 20,
                                    marginHorizontal: "auto",
                                    flexDirection: "row",
                                    gap: 12,
                                    paddingVertical: 10,
                                    paddingHorizontal: 10,
                                    backgroundColor: "black",
                                    borderRadius: 10,

                                    // 
                                },
                            ]}
                        >
                            <View
                                style={[
                                    {
                                        height: 110,
                                        width: 110,
                                        marginVertical: "auto",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        backgroundColor: "#EDD3D4",
                                        borderRadius: 10,
                                    },
                                ]}
                            >
                                <Image
                                    source={{ uri: ele.image }}
                                    style={{ height: 100, width: 100 }}
                                />
                            </View>

                            <View
                                style={[
                                    {
                                        height: 70,
                                        width: 100,
                                        marginVertical: "auto",
                                        marginLeft: 13,
                                        gap: 10,
                                        justifyContent: "center",
                                        alignItems: "flex-start",

                                    },
                                ]}
                            >
                                <Text style={{ fontSize: 12, color: "white" }}>
                                    {ele?.name}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: "800",
                                        alignSelf: "flex-start",
                                        color: "white"
                                    }}
                                >
                                    $ {ele.cookTimeMinutes * ele.qty}
                                </Text>

                                <Text style={{ fontSize: 12, color: "grey" }}>
                                    14"
                                </Text>
                            </View>
                            <View
                                style={[
                                    {
                                        height: 70,
                                        width: 70,
                                        marginVertical: "auto",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        gap: 10,
                                    },
                                ]}
                            >

                                <View
                                    style={[
                                        {
                                            height: 30,
                                            width: 55,
                                            borderRadius: 7,
                                            flexDirection: "row",
                                            gap: 14,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            position: "absolute",
                                            top: 70,
                                            left: -29
                                        },
                                    ]}
                                >
                                    <View style={{ height: 30, width: 30, borderRadius: 50, backgroundColor: "#2A2A39", justifyContent: "center", alignItems: "center" }}>

                                        <Entypo
                                            name="plus"
                                            style={{ fontSize: 22, color: "white" }}
                                            onPress={() => { updateQTY(ele, 1) }}
                                        />
                                    </View>

                                    <Text style={{ fontSize: 11, color: "white" }}>{ele.qty}</Text>
                                    <View style={{ height: 30, width: 30, borderRadius: 50, backgroundColor: "#2A2A39", justifyContent: "center", alignItems: "center" }}>

                                        <Entypo
                                            name="minus"
                                            style={{ fontSize: 22, color: "white" }}
                                            onPress={() => { ele.qty === 0 ? deleteFromCart(ele.id) : updateQTY(ele, 0) }}
                                        />
                                    </View>
                                </View>
                            </View>
                        </View>
                    ))}


                </View>

                {/* Last item */}

                <View style={{ position: "absolute", width: "100%", height: 350, backgroundColor: "white", bottom: -400, borderRadius: 20 }}>
                    <View style={{ marginHorizontal: 21, marginTop: 15 }}>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", marginHorizontal: 12 }}>
                            <Text style={{ color: 'gray', fontWeight: "500" }}>
                                DELIVERY ADDRESS
                            </Text>

                            <TouchableOpacity onPress={() => route.push("/standalone/EditScreen")}>
                                <Text style={{ fontSize: 16, color: "#FF7622", textDecorationLine: "underline" }}>
                                    EDIT
                                </Text>
                            </TouchableOpacity>



                        </View>








                        <View>

                            <TextInput placeholder='I love fast Food' style={{ paddingVertical: 15, backgroundColor: "#E0E0E0", paddingHorizontal: 15, borderRadius: 14, fontSize: 14, marginVertical: 13, }} />
                        </View>
                        <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginVertical: 15 }}>
                            <View style={{ flexDirection: "row", alignItems: "center" }}>
                                <Text style={{ color: "gray" }}> TOTAL :</Text>
                                <Text style={{ fontSize: 22, color: "black", fontWeight: "500", }}> $ {cart.reduce((acc, ele) => acc + (ele?.qty * ele?.cookTimeMinutes), 0)}</Text>
                            </View>

                            <View>

                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Text style={{ color: "#FF7622", marginRight: 5 }}>Breakdown</Text>
                                    <AntDesign name="right" size={12} color="#2A2A39" />
                                </View>

                            </View>
                        </View>






                        <View style={{ alignItems: "center", marginVertical: 20 }}>


                            <TouchableOpacity style={{ height: 50, width: "100%", backgroundColor: "#FF7622", justifyContent: "center", alignItems: "center", borderRadius: 10 }} onPress={() => route.push("/standalone/MyAddress")}>
                                <Text style={{ color: "white" }}>
                                    PLACE ORDER
                                </Text>
                            </TouchableOpacity>
                        </View>





                    </View>
                </View>










            </ScrollView>
        </SafeAreaView>
    )
}

export default CartBlack

const styles = StyleSheet.create({})