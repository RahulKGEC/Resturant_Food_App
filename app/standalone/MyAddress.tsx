import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Feather, FontAwesome, Fontisto } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const MyAddress = () => {
    const route = useRouter()
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ marginHorizontal: 15,flex:1 }}>

                    <View style={{ flex:1,flexDirection: "row", justifyContent: "space-between", marginTop: 25, alignItems: "center", }}>


                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10, }}>
                            <TouchableOpacity onPress={() => route.back()}>

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


                                    <FontAwesome name="angle-left" size={26} />

                                </View>
                            </TouchableOpacity>

                            <Text style={{ fontSize: 18 }}>
                                My Address
                            </Text>
                        </View>




                        <TouchableOpacity >
                            {/* <Text style={{ fontSize: 18, color: "#FF7622", textDecorationLine: "underline" }}>
Edit
</Text> */}
                        </TouchableOpacity>
















                    </View>

                    <View style={{ gap: 28, marginVertical: 20,flex:1 }}>
                        <View style={{ height: 110, width: "100%", borderColor: "red", borderWidth: 2, borderRadius: 10, position: "relative", flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 15, backgroundColor: "#F0F5FA" }}>
                            <Feather name="edit" size={23} style={{ position: "absolute", top: 5, right: 40 }} />
                            <AntDesign name="delete" size={23} style={{ position: "absolute", top: 5, right: 9 }} />
                            <View
                                style={{
                                    height: 50,
                                    width: 50,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "50%",
                                    backgroundColor: "lightblue",
                                    // flexDirection:"row"
                                }}
                            >


                                <Fontisto name="email" size={28} style={{ color: "#FF7622" }} />

                            </View>
                            <View style={{ gap: 12 }}>
                                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                                    HOME
                                </Text>
                                <Text>
                                    2464 Royal L n. Mesa , New Jersey
                                </Text>
                            </View>

                        </View>
                        <View style={{ height: 110, width: "100%", borderColor: "red", borderWidth: 2, borderRadius: 10, position: "relative", flexDirection: "row", alignItems: "center", gap: 10, paddingHorizontal: 15, backgroundColor: "#F0F5FA" }}>
                            <Feather name="edit" size={23} style={{ position: "absolute", top: 5, right: 40 }} />
                            <AntDesign name="delete" size={23} style={{ position: "absolute", top: 5, right: 9 }} />
                            <View
                                style={{
                                    height: 50,
                                    width: 50,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "50%",
                                    backgroundColor: "lightblue",
                                    // flexDirection:"row"
                                }}
                            >


                                <Fontisto name="email" size={28} style={{ color: "#FF7622" }} />

                            </View>
                            <View style={{ gap: 12 }}>
                                <Text style={{ fontSize: 18, fontWeight: "600" }}>
                                    WORK
                                </Text>
                                <Text>
                                    2464 Royal L n. Mesa , New Jersey
                                </Text>
                            </View>

                        </View>
                    </View>





                    <TouchableOpacity style={{ height: 50, width: "100%", backgroundColor: "#FF7622", justifyContent: "center", alignItems: "center", borderRadius: 10 }} onPress={() => route.push("/standalone/MyAddress")}>
                        <Text style={{ color: "white" }}>
                            SAVE
                        </Text>
                    </TouchableOpacity>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default MyAddress

const styles = StyleSheet.create({})