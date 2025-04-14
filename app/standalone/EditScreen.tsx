import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { FontAwesome, Fontisto } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const EditScreen = () => {
    const route = useRouter()
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ marginHorizontal: 15 }}>


                    <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 25, alignItems: "center", }}>


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
                                Personal Info
                            </Text>
                        </View>




                        <TouchableOpacity >
                            {/* <Text style={{ fontSize: 18, color: "#FF7622", textDecorationLine: "underline" }}>
    Edit
  </Text> */}
                        </TouchableOpacity>
















                    </View>




                    <View>
                        <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginTop: 30, marginBottom: 14, justifyContent: "center", position: "relative" }}>
                            <View>
                                <Image source={require('../../assets/images/detail1.png')} style={{ width: 110, height: 110, borderRadius: 50 }} />

                                <View
                                    style={{
                                        height: 36,
                                        width: 36,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: "50%",
                                        backgroundColor: "#FF7622",
                                        // flexDirection:"row"
                                        position: "absolute",
                                        top: 85, left: 70
                                    }}
                                >


                                    <Fontisto name="email" size={17} style={{ color: "white" }} />

                                </View>
                            </View>
                        </View>

                    </View>


                    <View>
                        <Text style={{ color: "gray" }}>
                            FULL NAME
                        </Text>
                        <TextInput placeholder='Vishal Khadok' placeholderTextColor="#C9C9C9" style={{ paddingVertical: 15, paddingHorizontal: 15, backgroundColor: "#E0E0E0", borderRadius: 14, fontSize: 14, marginVertical: 10, }} />
                    </View>

                    <View>
                        <Text style={{ color: "gray" }}>
                            EMAIL
                        </Text>
                        <TextInput placeholder='shawrahula@gmail.com' style={{ paddingVertical: 15, backgroundColor: "#E0E0E0", paddingHorizontal: 15, borderRadius: 14, fontSize: 14, marginVertical: 10, }} />
                    </View>

                    <View>
                        <Text style={{ color: "gray" }}>
                            PHONE NUMBER
                        </Text>
                        <TextInput placeholder='I love fast Food' style={{ paddingVertical: 15, backgroundColor: "#E0E0E0", paddingHorizontal: 15, borderRadius: 14, fontSize: 14, marginVertical: 10, }} />
                    </View>
                    <View>
                        <Text style={{ color: "gray" }}>
                            BIO
                        </Text>
                        <TextInput
                            placeholder='I love fast Food'
                            multiline={true}
                            numberOfLines={4}
                            style={{
                                paddingVertical: 10,
                                backgroundColor: "#E0E0E0",
                                borderRadius: 14,
                                fontSize: 14,
                                marginVertical: 10,
                                minHeight: 150,// Ensures a minimum height 
                                textAlignVertical: 'top',
                                paddingHorizontal: 15
                            }}
                        />

                    </View>


                    <View style={{ alignItems: "center", marginVertical: 25 }}>


                        <TouchableOpacity style={{ height: 50, width: "100%", backgroundColor: "#FF7622", justifyContent: "center", alignItems: "center", borderRadius: 10 }} onPress={() => route.push("/standalone/MyAddress")}>
                            <Text style={{ color: "white" }}>
                                SAVE
                            </Text>
                        </TouchableOpacity>
                    </View>




                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default EditScreen

const styles = StyleSheet.create({})