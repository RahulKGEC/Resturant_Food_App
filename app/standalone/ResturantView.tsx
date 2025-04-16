import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome, MaterialCommunityIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'
import Cart3 from '@/components/myComponents/Cart3'
import { LinearGradient } from 'expo-linear-gradient'
// import Icon from 'react-native-vector-icons/MaterialIcons';

const ResturantView = () => {
    //   const route = useRouter()
    const [model, setModel] = useState(true)
    const [activeIndex, setActiveIndex] = useState(null);

    const foodItems = ["Delivery", "Pick Up", "Offer", "Online payment available"];

    const time = ["10-15 min", "20 min", "30 min"]
    const pricing = ["$", "$$", "$$$"]
    const rating = ["*", "*", "*", "*", "*"]
    const route = useRouter()
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ marginHorizontal: 18 }}>

                    {/* 1st Container */}
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

                            <Text style={{ fontSize: 18, fontWeight: "500" }}>
                                Resturant View
                            </Text>
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


                                <Entypo name="dots-three-horizontal" size={22} />

                            </View>
                        </View>
                    </View>


                    {/* 2nd czontainer */}

                    <View style={{
                        width: "100%", height: 250,
                        //  borderColor: "red", borderWidth: 2 ,
                        gap: 2,
                        marginVertical: 15
                    }}>
                        <Image source={{ uri: 'https://tse1.mm.bing.net/th?id=OIP.g9meiANJcKP0ekLeCy4laQHaE7&pid=Api&P=0&h=180' }} style={{ width: "100%", height: 130, borderRadius: 18 }} />
                        <Text style={{ fontWeight: "700", fontSize: 19, marginTop: 7 }}>
                            Spicy Resturant
                        </Text>
                        <Text style={{ fontWeight: "400", fontSize: 14, color: "#BFBFBF" }}>
                            Burger - Chicken - Riche - Wings Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius ullam, laudantium quis odit harum explicabo.
                        </Text>


                        <View style={{ flexDirection: "row", alignItems: "center", gap: 20, marginTop: 8 }}>
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
                                    free
                                </Text>

                            </View>

                            <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                                {/* <FontAwesome name="star" size={24} color="gold" /> */}
                                <AntDesign name="clockcircleo" size={22} color="#FF7622" />
                                <Text style={{ fontWeight: "800", fontSize: 15 }}>
                                    20 min
                                </Text>

                            </View>
                        </View>


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































                </View>

                {model &&

                    <View style={{ width: "90%", borderWidth: 2,borderColor:"rgba(0,0,0,0.3)", borderRadius: 18, position: "absolute", top: 170, left: 15, backgroundColor: "white" }}>

                        <View style={{ marginHorizontal: 18 }}>




                            <View>
                                <Text style={{ fontSize: 19, marginVertical: 15, fontWeight: "500" }}>
                                    Filter your search
                                </Text>

                                <Text style={{ fontSize: 15, marginTop: 15, fontWeight: "500" }}>
                                    OFFERS
                                </Text>
                                {/* <ScrollView horizontal={true}> */}
                                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 4 }}>
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
                                {/* </ScrollView> */}
                            </View>



                            <View>
                                <Text style={{ fontSize: 15, marginTop: 15, fontWeight: "500" }}>
                                    DELIVER TIME
                                </Text>



                                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 4 }}>
                                    {time.map((item, index: any) => (
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

                            </View>














                            <View>
                                <Text style={{ fontSize: 15, marginTop: 15, fontWeight: "500" }}>
                                    PRICING
                                </Text>



                                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 4 }}>
                                    {pricing.map((item, index: any) => (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => setActiveIndex(index)}
                                            style={{
                                                // gap: 100,
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                height: 45,
                                                width: 45,
                                                // paddingHorizontal: 10,
                                                marginRight: 10,
                                                borderRadius: 50,
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

                            </View>







                            <View>
                                <Text style={{ fontSize: 15, marginTop: 15, fontWeight: "500" }}>
                                    DELIVER TIME
                                </Text>



                                <View style={{ flexDirection: "row", flexWrap: "wrap", gap: 4 }}>
                                    {rating.map((item, index: any) => (
                                        <TouchableOpacity
                                            key={index}
                                            onPress={() => setActiveIndex(index)}
                                            style={{
                                                // gap: 100,
                                                flexDirection: "row",
                                                alignItems: "center",
                                                justifyContent: "center",
                                                height: 38,
                                                width: 38,
                                                // paddingHorizontal: 10,
                                                marginRight: 10,
                                                borderRadius: 50,
                                                borderWidth: 1,
                                                borderColor: "rgba(0,0,0,0.2)",
                                                backgroundColor: activeIndex === index ? "#FF7622" : "white"
                                            }}
                                        >
                                            <Text style={{ fontWeight: "500", fontSize: 20, color: activeIndex === index ? "white" : "black" }}>
                                                <AntDesign name="staro" size={19} />
                                            </Text>
                                        </TouchableOpacity>
                                    ))}
                                </View>

                            </View>




                            <View style={{ alignItems: "center", marginVertical: 25 }}>


                                <TouchableOpacity style={{ height: 50, width: "100%", backgroundColor: "#FF7622", justifyContent: "center", alignItems: "center", borderRadius: 10 }} onPress={() => route.push("/standalone/MyAddress")}>
                                    <Text style={{ color: "white" }}>
                                        FILTER
                                    </Text>
                                </TouchableOpacity>
                            </View>
                            {/* cross Button */}
                            <View
                                style={{
                                    height: 35,
                                    width: 35,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: "50%",
                                    backgroundColor: "#EFEFEF",
                                    // flexDirection:"row"
                                    position: "absolute",
                                    right: 0,
                                    top: 15
                                }}
                            >


                                <Entypo name="cross" size={30} color="#E66E00" onPress={() => setModel(!model)} />

                            </View>
                        </View>
                    </View>



                }

            </ScrollView>

        </SafeAreaView>
    )
}

export default ResturantView

const styles = StyleSheet.create({})