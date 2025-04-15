import { Image, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Entypo, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import { makeViewDescriptorsSet } from 'react-native-reanimated/lib/typescript/ViewDescriptorsSet'
import { useRouter } from 'expo-router'

const Map = () => {

    const [selected, setSelected] = useState('home');
    const route = useRouter()

    const btnStyle = (key: any) => ({
        backgroundColor: selected === key ? "#FF7622" : "#E0E0E0",
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 14,
        flexDirection: "row",
        alignItems: "center",
        gap: 8,
        marginRight: 10,
    });

    const textColor = (key: any) => ({
        color: selected === key ? "white" : "black",
    });
    return (
        <SafeAreaView>

            <ScrollView>







                <View style={{ flexDirection: "row", justifyContent: "space-between", marginTop: 25, alignItems: "center", }}>


                    <View style={{ flexDirection: "row", alignItems: "center", gap: 10, marginHorizontal: 15 }}>
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



                    </View>




                    <TouchableOpacity >
                        {/* <Text style={{ fontSize: 18, color: "#FF7622", textDecorationLine: "underline" }}>
Edit
</Text> */}
                    </TouchableOpacity>
















                </View>
                <View>
                    <Image
                        source={require('../../assets/images/bigchair.png')}
                        style={{ width: "100%", height: 350, borderRadius: 10 }}
                    />
                </View>









                <View style={{ marginHorizontal: 15, flex: 1, marginVertical: 20 }}>



                    <View>
                        <Text style={{ color: "black", fontWeight: "700" }}>
                            Address
                        </Text>

                        <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 12, backgroundColor: "#E0E0E0", paddingHorizontal: 15, borderRadius: 14, fontSize: 14, marginVertical: 10, }} >
                            <Entypo name="location-pin" size={23} />
                            <TextInput placeholder=' shawrahula@gmail.com' />
                        </View>
                    </View>

                    <View style={{ width: "100%", flexDirection: "row", gap: 15 }}>
                        <View style={{ width: "46%" }}>
                            <Text style={{ color: "gray" }}>
                                STREET
                            </Text>
                            <TextInput placeholder='street' style={{ paddingVertical: 15, backgroundColor: "#E0E0E0", paddingHorizontal: 15, borderRadius: 14, fontSize: 14, marginVertical: 10, }} />
                        </View>
                        <View style={{ width: "46%" }}>
                            <Text style={{ color: "gray" }}>
                                POST CODE
                            </Text>
                            <TextInput placeholder='post code' style={{ paddingVertical: 15, backgroundColor: "#E0E0E0", paddingHorizontal: 15, borderRadius: 14, fontSize: 14, marginVertical: 10, }} />
                        </View>
                    </View>
                    <View>
                        <Text style={{ color: "gray" }}>
                            APPARTMENT
                        </Text>
                        <TextInput placeholder='shawrahula@gmail.com' style={{ paddingVertical: 15, backgroundColor: "#E0E0E0", paddingHorizontal: 15, borderRadius: 14, fontSize: 14, marginVertical: 10, }} />
                    </View>





                    <View style={{ marginVertical: 10 }}>
                        <Text style={{ color: "gray" }}>
                            LABEL AS
                        </Text>
                        {/* <TextInput placeholder='shawrahula@gmail.com' style={{ paddingVertical: 15, backgroundColor: "#E0E0E0", paddingHorizontal: 15, borderRadius: 14, fontSize: 14, marginVertical: 10, }} /> */}
                        <ScrollView horizontal={true} style={{ marginVertical: 10 }}>
                            <TouchableOpacity onPress={() => setSelected('home')} style={btnStyle('home')}>
                                <MaterialIcons name="home" size={20} color={selected === 'home' ? "white" : "black"} />
                                <Text style={textColor('home')}>Home</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setSelected('office')} style={btnStyle('office')}>
                                <MaterialIcons name="work" size={20} color={selected === 'office' ? "white" : "black"} />
                                <Text style={textColor('office')}>Office</Text>
                            </TouchableOpacity>

                            <TouchableOpacity onPress={() => setSelected('others')} style={btnStyle('others')}>
                                <MaterialIcons name="location-on" size={20} color={selected === 'others' ? "white" : "black"} />
                                <Text style={textColor('others')}>Others</Text>
                            </TouchableOpacity>
                        </ScrollView>
                    </View>




                    <TouchableOpacity style={{ height: 50, width: "100%", backgroundColor: "#FF7622", justifyContent: "center", alignItems: "center", borderRadius: 10, marginVertical: 10 }} onPress={() => route.push("/standalone/Profile")}>
                        <Text style={{ color: "white", fontWeight: "700" }}>
                            SAVE LOCATION
                        </Text>
                    </TouchableOpacity>








                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Map

const styles = StyleSheet.create({})