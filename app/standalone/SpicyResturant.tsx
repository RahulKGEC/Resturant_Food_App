import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur'
// import { useRoute } from '@react-navigation/native'
import { useRouter } from 'expo-router'
import Cart3 from '@/components/myComponents/Cart3'

const SpicyResturant = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const foodItems = ["Burger", "Sandwich", "Pizza", "Burger", "Burger", "Sandwich", "Pizza", "Sandwich"];
    const route = useRouter()
    const [wish, setWish] = useState(true)
    return (
        <SafeAreaView>
            <ScrollView>




                {/* 1st Container  */}
                <View style={{ alignItems: "center" }}>
                    <View style={{ height: 270, width: "100%", backgroundColor: "#FFB869", borderRadius: 23, marginBottom: 15, alignItems: "center" }}>


                        <Image source={{ uri: "https://clipartspub.com/images/pizza-clipart-clip-art-7.jpg" }} style={{ height: 150, width: 170, position: "absolute", top: 97 }} />

                        {/* import { BlurView } from 'expo-blur'; */}


                        <View
                            style={{
                                height: 30,
                                width: 30,
                                alignItems: "center",
                                justifyContent: "center",
                                borderRadius: "50%",
                                backgroundColor: "white",
                                // flexDirection:"row"
                                position: "absolute",
                                top: 38, left: 17
                            }}
                        >


                            <AntDesign name="left" size={17} onPress={() => route.back()} />

                        </View>


                        <View style={{ position: "absolute", right: 16, top: 125 }}>
                            <View
                                style={{
                                    height: 35,
                                    width: 35,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "50%",
                                    backgroundColor: "white",
                                    // flexDirection:"row"
                                    position: "absolute",
                                    top: -90,
                                    right: 11
                                }}
                            >


                                <Entypo name="dots-three-horizontal" size={19} />

                            </View>
                        </View>

                    </View>
                </View>

                {/* 2nd Container  */}
                <View style={{ marginHorizontal: 18 }}>

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

                    <View>
                        <Text style={{ fontWeight: "700", fontSize: 19, marginTop: 7 }}>
                            Spicy Resturant
                        </Text>

                        <Text style={{ fontWeight: "400", fontSize: 14, color: "#BFBFBF", marginTop: 6 }}>
                            Burger - Chicken - Riche - Wings Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam, laudantium quis odit harum explicabo.
                        </Text>
                    </View>

                </View>


                {/* 3 Rd Container  */}
                <View style={{ marginLeft: 18 }}>
                    <ScrollView horizontal={true}>
                        <View style={{ flexDirection: "row", marginVertical: 10 }}>
                            {foodItems.map((item, index: any) => (
                                <TouchableOpacity
                                    key={index}
                                    onPress={() => setActiveIndex(index)}
                                    style={{
                                        // gap: 100,
                                        flexDirection: "row",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        height: 38,
                                        paddingHorizontal: 10,
                                        marginRight: 10,
                                        borderRadius: 20,
                                        borderWidth: 1,
                                        borderColor: "rgba(0,0,0,0.2)",
                                        backgroundColor: activeIndex === index ? "#FF7622" : "white"
                                    }}
                                >
                                    <Text style={{ fontWeight: "500", color: activeIndex === index ? "white" : "black" }}>
                                        {item}
                                    </Text>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </View>

                <View style={{ marginHorizontal: 18 }}>

                    <View style={{ marginVertical: 12 }}>

                        <Text style={{ fontSize: 20, fontWeight: "600" }}>
                            Burger (10)
                        </Text>
                    </View>


                    <View style={{ display: "flex", flexDirection: 'row', flexWrap: "wrap", gap: 15 }}>
                        <Cart3 />
                        <Cart3 />
                        <Cart3 />
                        <Cart3 />
                        <Cart3 />
                        <Cart3 />
                        <Cart3 />
                    </View>






































                    {/* </View> */}















                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SpicyResturant

const styles = StyleSheet.create({})