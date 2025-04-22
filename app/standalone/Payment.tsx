import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Entypo } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import { IconSymbol } from '@/components/ui/IconSymbol'
// import Icon from 'react-native-vector-icons/FontAwesome';

const Payment = () => {
    const route = useRouter()
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ marginHorizontal: 18 }}>


                    {/* 1st Section */}

                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 25, alignItems: "center", }}>


                        <View style={{ flexDirection: "row", alignItems: "center", gap: 15, }}>

                            <View
                                style={{
                                    height: 35,
                                    width: 35,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "50%",
                                    backgroundColor: "#C9C9C9",

                                }}
                            >


                                <AntDesign name="left" size={22} onPress={() => route.back()} />

                            </View>

                            <View style={{}}>


                                <Text style={{ fontSize: 17, alignItems: "center", justifyContent: "center" }}>
                                    Payment

                                </Text>
                            </View>
                        </View>





                    </View>


                </View>


                {/* 2st Section */}

                <View style={{ marginTop: 12,marginLeft:18 }}>
                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection: "row", gap: 12 }}>
                            {/* 1st */}
                            <View style={{ height: 75, width: 85, borderWidth: 2, borderRadius: 15, alignItems: "center", justifyContent: "center", backgroundColor: "#F5F5F5" }}>
                                <Image
                                    source={{ uri: "https://tse4.mm.bing.net/th?id=OIP.b6C5gGVEJpJEXfbYIibKJwHaHa&pid=Api&P=0&h=180" }} // your image path
                                    style={{ width: 50, height: 50, resizeMode: 'contain' }}
                                />

                            </View>
                            {/* 1st */}

                            <View style={{ height: 75, width: 85, borderWidth: 2, borderRadius: 15, alignItems: "center", justifyContent: "center", backgroundColor: "#F5F5F5" }}>
                                <Image
                                    source={{ uri: "https://tse3.mm.bing.net/th?id=OIP.UTmCNgsULvYHrJHM66jN7AHaC0&pid=Api&P=0&h=180" }} // your image path
                                    style={{ width: 50, height: 50, resizeMode: 'contain' }}
                                />

                            </View>
                            {/* 1st */}





                            <View style={{ height: 75, width: 85, borderWidth: 2, borderRadius: 15, alignItems: "center", justifyContent: "center", backgroundColor: "#F5F5F5" }}>
                                <Image
                                    source={{ uri: "https://tse4.mm.bing.net/th?id=OIP.e1DAjr64p70tGJHkpUFZtwHaEK&pid=Api&P=0&h=180" }} // your image path
                                    style={{ width: 60, height: 60, resizeMode: 'contain' }}
                                />

                            </View>
                            {/* 1st */}


                            <View style={{ height: 75, width: 85, borderWidth: 2, borderRadius: 15, alignItems: "center", justifyContent: "center", backgroundColor: "#F5F5F5" }}>
                                <Image
                                    source={{ uri: "https://tse4.mm.bing.net/th?id=OIP.RqHF5z-lXxopmvBkV1c0XQHaE8&pid=Api&P=0&h=180" }} // your image path
                                    style={{ width: 70, height: 70, resizeMode: 'contain' }}
                                />

                            </View>





                        </View>

                    </ScrollView>
                </View>






                <View style={{ marginHorizontal: 18 }}>



                    <View style={{ alignItems: "center", marginVertical: 20 }}>


                        <TouchableOpacity style={{ flexDirection: "row", gap: 10, height: 50, width: "100%", justifyContent: "center", alignItems: "center", borderRadius: 10, borderWidth: 2, borderColor: "rgba(0,0,0,0.3)" }} onPress={() => route.push("/standalone/MyAddress")}>

                            <Entypo name="plus" size={25} color="#FF7622" />

                            <Text style={{ color: "#FF7622" }}>
                                ADD NEW
                            </Text>
                        </TouchableOpacity>
                    </View>

                    <View style={{ justifyContent: "space-between", flexDirection: "row", alignItems: "center", marginVertical: 15 }}>
                        <View style={{ flexDirection: "row", alignItems: "center" }}>
                            <Text style={{ color: "gray" }}> TOTAL : </Text>
                            <Text style={{ fontSize: 22, color: "black", fontWeight: "500", }}> $96</Text>
                        </View>

                        <View>



                        </View>
                    </View>



                    <View style={{ alignItems: "center", marginVertical: 20 }}>


                        <TouchableOpacity style={{ height: 50, width: "100%", backgroundColor: "#FF7622", justifyContent: "center", alignItems: "center", borderRadius: 10 }} onPress={() => route.push("/standalone/MyAddress")}>
                            <Text style={{ color: "white" }}>
                                PAY & CONFIRM
                            </Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Payment

const styles = StyleSheet.create({})