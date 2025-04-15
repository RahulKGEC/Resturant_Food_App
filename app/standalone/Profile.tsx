import { ScrollView, StyleSheet, Text, TouchableOpacity, View, Image } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { AntDesign, Entypo, FontAwesome, Fontisto, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useRouter } from 'expo-router'

const Profile = () => {



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
                                Profile
                            </Text>
                        </View>




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


                                <MaterialCommunityIcons name="dots-horizontal" size={26} />

                            </View>
                        </TouchableOpacity>

                    </View>



                    <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginTop: 30, marginBottom: 14 }}>
                        <View>
                            <Image source={require('../../assets/images/detail2.png')} style={{ width: 90, height: 90, borderRadius: 50 }} />

                        </View>
                        <View>
                            <Text style={{ fontSize: 19, fontWeight: "800", marginBottom: 7 }}>
                                Rahul Shaw
                            </Text>
                            <Text>
                                I love my food
                            </Text>
                        </View>
                    </View>

//1st
                    <View style={{ backgroundColor: "#E0E0E0", borderRadius: 10 }}>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginTop: 12, marginHorizontal: 14 }}>
                                    <View>
                                        {/* <Image source={require('../../../assets/images/detail1.png')} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
                                        <View
                                            style={{
                                                height: 40,
                                                width: 40,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "50%",
                                                backgroundColor: "white",
                                                // flexDirection:"row"
                                            }}
                                        >


                                            {/* <Fontisto name="email" size={23}  /> */}
                                            <FontAwesome name="user" size={24}  style={{ color: "#FF7622" }}/>

                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                                            Personal Info
                                        </Text>

                                    </View>
                                </View>
                            </View>
                            <View>
                                <AntDesign name="right" size={24} style={{ marginRight: 14 }} />

                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginVertical: 12, marginHorizontal: 14 }}>
                                    <View>
                                        {/* <Image source={require('../../../assets/images/detail1.png')} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
                                        <View
                                            style={{
                                                height: 40,
                                                width: 40,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "50%",
                                                backgroundColor: "white",
                                                // flexDirection:"row"
                                            }}
                                        >

{/* 
                                            <Fontisto name="email" size={23}  /> */}
                                            <MaterialIcons name="location-on" size={24}  style={{ color: "#FF7622" }}/>

                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                                            Address
                                        </Text>

                                    </View>
                                </View>
                            </View>
                            <View style={{ marginRight: 14 }}>
                                <AntDesign name="right" size={24} />

                            </View>
                        </View>
                    </View>
//2nd

                    <View style={{ backgroundColor: "#E0E0E0", borderRadius: 10, marginVertical: 19 }}>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginTop: 12, marginHorizontal: 14 }}>
                                    <View>
                                        {/* <Image source={require('../../../assets/images/detail1.png')} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
                                        <View
                                            style={{
                                                height: 40,
                                                width: 40,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "50%",
                                                backgroundColor: "white",
                                                // flexDirection:"row"
                                            }}
                                        >


                                            {/* <Fontisto name="email" size={23} style={{ color: "#FF7622" }} /> */}
                                            <MaterialIcons name="payment" size={24}  style={{ color: "#FF7622" }}/>

                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                                            Payment Method 
                                        </Text>

                                    </View>
                                </View>
                            </View>
                            <View>
                                <AntDesign name="right" size={24} style={{ marginRight: 14 }} />

                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginVertical: 12, marginHorizontal: 14 }}>
                                    <View>
                                        {/* <Image source={require('../../../assets/images/detail1.png')} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
                                        <View
                                            style={{
                                                height: 40,
                                                width: 40,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "50%",
                                                backgroundColor: "white",
                                                // flexDirection:"row"
                                            }}
                                        >


                                            {/* <Fontisto name="email" size={23} style={{ color: "#FF7622" }} /> */}
                                            <MaterialIcons name="shopping-bag" size={24} style={{ color: "#FF7622" }} />

                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                                            Cart
                                        </Text>

                                    </View>
                                </View>
                            </View>
                            <View style={{ marginRight: 14 }}>
                                <AntDesign name="right" size={24} />

                            </View>
                        </View>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginHorizontal: 14 }}>
                                    <View>
                                        {/* <Image source={require('../../../assets/images/detail1.png')} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
                                        <View
                                            style={{
                                                height: 40,
                                                width: 40,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "50%",
                                                backgroundColor: "white",
                                                // flexDirection:"row"
                                            }}
                                        >


                                            {/* <Fontisto name="email" size={23} style={{ color: "#FF7622" }} /> */}
                                            <FontAwesome name="heart" size={24}  style={{ color: "#FF7622" }}/>

                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                                        Favourite
                                        </Text>

                                    </View>
                                </View>
                            </View>
                            <View style={{ marginRight: 14 }}>
                                <AntDesign name="right" size={24} />

                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginVertical: 12, marginHorizontal: 14 }}>
                                    <View>
                                        {/* <Image source={require('../../../assets/images/detail1.png')} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
                                        <View
                                            style={{
                                                height: 40,
                                                width: 40,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "50%",
                                                backgroundColor: "white",
                                                // flexDirection:"row"
                                            }}
                                        >


                                            {/* <Fontisto name="email" size={23}  /> */}
                                            <Ionicons name="notifications" size={24}  style={{ color: "#FF7622" }}/>

                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                                            Notification 
                                        </Text>

                                    </View>
                                </View>
                            </View>
                            <View style={{ marginRight: 14 }}>
                                <AntDesign name="right" size={24} />

                            </View>
                        </View>

                    </View>




//3th


                    <View style={{ backgroundColor: "#E0E0E0", borderRadius: 10 }}>

                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginTop: 12, marginHorizontal: 14 }}>
                                    <View>
                                        {/* <Image source={require('../../../assets/images/detail1.png')} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
                                        <View
                                            style={{
                                                height: 40,
                                                width: 40,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "50%",
                                                backgroundColor: "white",
                                                // flexDirection:"row"
                                            }}
                                        >


                                            {/* <Fontisto name="email" size={23} style={{ color: "#FF7622" }} /> */}
                                            <MaterialCommunityIcons name="help-circle-outline" size={24} style={{ color: "#FF7622" }}  />

                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                                            FAQs
                                        </Text>

                                    </View>
                                </View>
                            </View>
                            <View>
                                <AntDesign name="right" size={24} style={{ marginRight: 14 }} />

                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginVertical: 12, marginHorizontal: 14 }}>
                                    <View>
                                        {/* <Image source={require('../../../assets/images/detail1.png')} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
                                        <View
                                            style={{
                                                height: 40,
                                                width: 40,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "50%",
                                                backgroundColor: "white",
                                                // flexDirection:"row"
                                            }}
                                        >


                                            {/* <Fontisto name="email" size={23} style={{ color: "#FF7622" }} /> */}
                                            <FontAwesome name="star" size={24} style={{ color: "#FF7622" }} />

                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                                            User Reviews
                                        </Text>

                                    </View>
                                </View>
                            </View>
                            <View style={{ marginRight: 14 }}>
                                <AntDesign name="right" size={24} />

                            </View>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginHorizontal: 14 }}>
                                    <View>
                                        {/* <Image source={require('../../../assets/images/detail1.png')} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
                                        <View
                                            style={{
                                                height: 40,
                                                width: 40,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "50%",
                                                backgroundColor: "white",
                                                // flexDirection:"row"
                                            }}
                                        >


                                            {/* <Fontisto name="email" size={23} style={{ color: "#FF7622" }} /> */}
                                            <Ionicons name="settings" size={24}  style={{ color: "#FF7622" }}/>

                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                                            Settings
                                        </Text>

                                    </View>
                                </View>
                            </View>
                            <View>
                                <AntDesign name="right" size={24} style={{ marginRight: 14 }} />

                            </View>
                        </View>
                    </View>





//4th section

                    <View style={{ backgroundColor: "#E0E0E0", borderRadius: 10, marginVertical: 19 }}>


                        <View style={{ flexDirection: "row", justifyContent: "space-between", alignItems: "center" }}>
                            <View>
                                <View style={{ flexDirection: "row", gap: 25, alignItems: "center", marginVertical: 12, marginHorizontal: 14 }}>
                                    <View>
                                        {/* <Image source={require('../../../assets/images/detail1.png')} style={{ width: 50, height: 50, borderRadius: 50 }} /> */}
                                        <View
                                            style={{
                                                height: 40,
                                                width: 40,
                                                alignItems: "center",
                                                justifyContent: "center",
                                                borderRadius: "50%",
                                                backgroundColor: "white",
                                                // flexDirection:"row"
                                            }}
                                        >


                                            {/* <Fontisto name="email" size={23} style={{ color: "#FF7622" }} /> */}

                                            <MaterialIcons name="logout" size={24}  style={{ color: "#FF7622" }} />

                                        </View>
                                    </View>
                                    <View>
                                        <Text style={{ fontSize: 14, fontWeight: "800", marginBottom: 2 }}>
                                            Log Out
                                        </Text>

                                    </View>
                                </View>
                            </View>
                            <View style={{ marginRight: 14 }}>
                                <AntDesign name="right" size={24} />

                            </View>
                        </View>

                    </View>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Profile

const styles = StyleSheet.create({})