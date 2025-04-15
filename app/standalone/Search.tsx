import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5 } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Search = () => {
    const route = useRouter()
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ marginHorizontal: 18 }}>

                    {/* 1st section */}
                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 25, alignItems: "center", }}>


                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, }}>

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


                                <FontAwesome name="angle-left" size={26} onPress={() => route.back()} />

                            </View>

                            <Text style={{ fontSize: 18 }}>
                                Search
                            </Text>
                        </View>




                        <TouchableOpacity onPress={() => route.push("/standalone/EditScreen")}>
                            <Text style={{ fontSize: 18, color: "#FF7622", textDecorationLine: "underline" }}>
                                <View
                                    style={{
                                        height: 35,
                                        width: 35,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "50%",
                                        backgroundColor: "black",
                                        // flexDirection:"row"
                                        position: "relative"
                                    }}
                                >

                                    <View
                                        style={{
                                            height: 25,
                                            width: 25,
                                            alignItems: "center",
                                            justifyContent: "center",
                                            borderRadius: "50%",
                                            backgroundColor: "#FF7622",
                                            // flexDirection:"row"
                                            position: "absolute",
                                            top: -10,
                                            left: 20
                                        }}
                                    >

                                        <Text>
                                            3
                                        </Text>

                                        {/* < name="angle-left" size={26} onPress={drawerOpen} /> */}

                                    </View>
                                    {/* <FontAwesome name="angle-left" size={26} /> */}
                                    <Feather name="shopping-bag" size={20} style={{ color: "white" }} />

                                </View>

                            </Text>
                        </TouchableOpacity>

                    </View>




                    {/* 2nd section  */}
                    <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 12, backgroundColor: "#E0E0E0", paddingHorizontal: 15, borderRadius: 14, fontSize: 14, marginVertical: 21, }} >
                        <AntDesign name="search1" size={21} style={{ fontWeight: "700", color: "#F0FeF9", marginRight: 10 }} />
                        <TextInput placeholder='Search dishes, resturants' />
                        <Entypo name="circle-with-cross" size={24} style={{ color: "#BFBFBF", paddingLeft: 70 }} />
                    </View>

                </View>





                {/* #3rd Section  */}
                <View style={{ marginLeft: 18 }}>
                    <Text style={{ fontSize: 22, fontWeight: "400" }}>
                        Recent Keywords
                    </Text>
                    <View>

                        <ScrollView horizontal={true} >
                            <View style={{ flexDirection: "row", marginVertical: 15 }}>

                                <View style={{ gap: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", height: 38, paddingHorizontal: 10, marginRight: 15, borderBottomEndRadius: 20, borderBottomStartRadius: 20, borderTopEndRadius: 20, borderTopStartRadius: 20, borderWidth: 1 }}>

                                    <Text style={{ fontWeight: "500" }}>
                                        Burger
                                    </Text>
                                </View>


                                <View style={{ gap: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", height: 38, paddingHorizontal: 10, marginRight: 15, borderBottomEndRadius: 20, borderBottomStartRadius: 20, borderTopEndRadius: 20, borderTopStartRadius: 20, borderWidth: 1 }}>

                                    <Text style={{ fontWeight: "500" }}>
                                        Burger
                                    </Text>
                                </View>
                                <View style={{ gap: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", height: 38, paddingHorizontal: 10, marginRight: 15, borderBottomEndRadius: 20, borderBottomStartRadius: 20, borderTopEndRadius: 20, borderTopStartRadius: 20, borderWidth: 1 }}>

                                    <Text style={{ fontWeight: "500" }}>
                                        Burger
                                    </Text>
                                </View>
                                <View style={{ gap: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", height: 38, paddingHorizontal: 10, marginRight: 15, borderBottomEndRadius: 20, borderBottomStartRadius: 20, borderTopEndRadius: 20, borderTopStartRadius: 20, borderWidth: 1 }}>

                                    <Text style={{ fontWeight: "500" }}>
                                        Burger
                                    </Text>
                                </View>
                                <View style={{ gap: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", height: 38, paddingHorizontal: 10, marginRight: 15, borderBottomEndRadius: 20, borderBottomStartRadius: 20, borderTopEndRadius: 20, borderTopStartRadius: 20, borderWidth: 1 }}>

                                    <Text style={{ fontWeight: "500" }}>
                                        Burger
                                    </Text>
                                </View>
                                <View style={{ gap: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", height: 38, paddingHorizontal: 10, marginRight: 15, borderBottomEndRadius: 20, borderBottomStartRadius: 20, borderTopEndRadius: 20, borderTopStartRadius: 20, borderWidth: 1 }}>

                                    <Text style={{ fontWeight: "500" }}>
                                        Sandwich
                                    </Text>
                                </View>





                                <View style={{ gap: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", height: 38, paddingHorizontal: 10, marginRight: 15, borderBottomEndRadius: 20, borderBottomStartRadius: 20, borderTopEndRadius: 20, borderTopStartRadius: 20, borderWidth: 1 }}>

                                    <Text style={{ fontWeight: "500" }}>
                                        Pizza
                                    </Text>
                                </View>




                                <View style={{ gap: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", height: 38, paddingHorizontal: 10, marginRight: 15, borderBottomEndRadius: 20, borderBottomStartRadius: 20, borderTopEndRadius: 20, borderTopStartRadius: 20, borderWidth: 1 }}>

                                    <Text style={{ fontWeight: "500" }}>
                                        Sandwich
                                    </Text>
                                </View>


                            </View>
                        </ScrollView>
                    </View>
                </View>




                {/* 4th Section */}
                <View style={{ marginHorizontal: 18, marginVertical: 15 }}>

                    <Text style={{ fontSize: 22, fontWeight: "400" }}>
                        Suggested Resturants
                    </Text>


                </View>

                {/* 5th Section */}
                <View style={{ marginHorizontal: 18 }}>

                    <View style={{ gap: 10 }}>
                        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
                            <View
                                style={{
                                    height: 50,
                                    width: 50,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 25, // half of 50 for circle
                                    backgroundColor: "#C9C9C9",
                                }}
                            >
                                <Image
                                    source={{
                                        uri: "https://tse3.mm.bing.net/th?id=OIP.s0KYKCeZL71ctv5UHRNP7gHaEo&pid=Api&P=0&h=180",
                                    }}
                                    style={{ width: 50, height: 50, borderRadius: 15 }}
                                />
                            </View>

                            <View>
                                <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                                    Pansi Resturant
                                </Text>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                                    <AntDesign
                                        name="staro"
                                        size={18}
                                        style={{ color: "#FF7622", fontWeight: "600" }}
                                    />
                                    <Text style={{ fontSize: 13, fontWeight: "500" }}>Rahul Shaw</Text>
                                </View>
                            </View>
                        </View>

                        <View style={{ flexDirection: "row", gap: 16, alignItems: "center" }}>
                            <View
                                style={{
                                    height: 50,
                                    width: 50,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 25, // half of 50 for circle
                                    backgroundColor: "#C9C9C9",
                                }}
                            >
                                <Image
                                    source={{
                                        uri: "https://tse3.mm.bing.net/th?id=OIP.s0KYKCeZL71ctv5UHRNP7gHaEo&pid=Api&P=0&h=180",
                                    }}
                                    style={{ width: 50, height: 50, borderRadius: 15 }}
                                />
                            </View>

                            <View>
                                <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                                    Pansi Resturant
                                </Text>
                                <View style={{ flexDirection: "row", alignItems: "center", gap: 5 }}>
                                    <AntDesign
                                        name="staro"
                                        size={18}
                                        style={{ color: "#FF7622", fontWeight: "600" }}
                                    />
                                    <Text style={{ fontSize: 13, fontWeight: "500" }}>Rahul Shaw</Text>
                                </View>
                            </View>
                        </View>
                    </View>


                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Search

const styles = StyleSheet.create({})