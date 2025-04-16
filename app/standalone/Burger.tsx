import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Feather, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import Cart3 from '@/components/myComponents/Cart3'
import Cart from '@/components/myComponents/Cart'

const Burger = () => {
    const route = useRouter()
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ marginHorizontal: 18 }}>




                    {/* 1st section  */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 25, alignItems: "center", }}>


                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, }}>

                            <View
                                style={{
                                    height: 37,
                                    width: 37,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "50%",
                                    backgroundColor: "#C9C9C9",
                                    // flexDirection:"row"
                                }}
                            >


                                <FontAwesome name="angle-left" size={26} onPress={() => route.back()} />

                            </View>

                            <View>
                                <View style={{ borderColor: "gray", gap: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", height: 38, paddingHorizontal: 10, marginRight: 15, borderBottomEndRadius: 20, borderBottomStartRadius: 20, borderTopEndRadius: 20, borderTopStartRadius: 20, borderWidth: 1 }}>

                                    <Text style={{ fontWeight: "500" }}>
                                        Burger
                                    </Text>
                                    <FontAwesome name="caret-down" size={22} color="#FF7622" />
                                </View>
                            </View>
                        </View>




                        <View style={{ flexDirection: "row", gap: 5 }}>
                            <View>
                                <View
                                    style={{
                                        height: 35,
                                        width: 35,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "50%",
                                        backgroundColor: "black",
                                        // flexDirection:"row"
                                    }}
                                >


                                    <AntDesign name="search1" size={22} style={{ color: "white" }} />

                                </View>

                            </View>
                            <View>

                                <View
                                    style={{
                                        height: 35,
                                        width: 35,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "50%",
                                        backgroundColor: "#C9C9C9",
                                        // flexDirection:"row"
                                    }}
                                >


                                    <MaterialIcons name="settings-input-composite" size={22} color="#FF7622" />

                                </View>



                            </View>
                        </View>

                    </View>


                    {/* 2nd Section */}

                    <View style={{ marginVertical: 15 }}>

                        <Text style={{ fontSize: 22, fontWeight: "500" }}>
                            Popular Burgers
                        </Text>
                    </View>

                    {/* 3rd section  */}

                    <View style={{ flexDirection: "row", gap: 14, flexWrap: "wrap" }}>
                        <Cart3 />
                        <Cart3 />
                        <Cart3 />
                        <Cart3 />



                    </View>


                    {/* 4rd section  */}
                    <View style={{ marginVertical: 15 }}>

                        <Text style={{ fontSize: 22, fontWeight: "500" }}>
                            Open Resturants
                        </Text>
                    </View>

                    <Cart />
                    <Cart />
                    <Cart />







                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Burger

const styles = StyleSheet.create({})