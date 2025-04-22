import { Image, SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { BlurView } from 'expo-blur';
import Cart4 from '@/components/myComponents/Cart4';
import { useFocusEffect, useLocalSearchParams, useRouter } from 'expo-router';
import { CartContext } from '../(drawer)/(tabs)';
import CartBlack from './CartBlack';




const Details = () => {


    const { wish, cart, setCart, setWish, signup, setSignup, addANEWMember, allsignup, setAllsignup, addToCart, addToWish, deleteFromCart, deleteFromWish } = useContext(CartContext)
    const route = useRouter()
    const [selectedSize, setSelectedSize] = useState(null);
    const [qty, setQty] = useState(1)
    const [detail, setDetail] = useState({})
    const { id } = useLocalSearchParams()
    const item = cart.find((ele) => ele?.id == id);
    useEffect(() => {
        if(item?.qty){

            console.log("item ok ", item);
            setQty(item?.qty);
        }
    
    
    
    }, [item?.qty]);
    

    // const qytData =  cart?.find(i=>i?.id==id)
    // useEffect(()=>{
    //     if(qytData?.qty){
    //     setQty(qytData?.qty)
    //     }
    // },[qytData?.qty])

    // useEffect(() => {
    //     alert('alert')
    //     fetch(`https://dummyjson.com/recipes/${id}`)
    //         .then(res => res.json())
    //         .then(data => {
    //             setDetail(data)
    //             fetchQTY(data?.id)
    //         });
    // },)



    useFocusEffect(
        React.useCallback(() => {
            // alert('alert')
            fetch(`https://dummyjson.com/recipes/${id}`)
                .then(res => res.json())
                .then(data => {
                    setDetail(data)
                    fetchQTY(id)
                });
            return () => {

            };
        }, [id]))

    const sizes = ["10\"", "12\"", "14\""];
    // const [wish, setWish] = useState(true)
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ marginHorizontal: 18 }}>


                    <View style={{ alignItems: "center" }}>
                        <View style={{ height: 270, width: "100%", backgroundColor: "#FFB869", borderRadius: 23, marginBottom: 15, alignItems: "center" }}>
                            <TouchableOpacity style={{ position: "absolute", top: 97, }} onPress={() => route.push('/standalone/ResturantView')}>

                                <Image source={{ uri: detail.image }} style={{ height: 150, width: 170, borderRadius: 16 }} />

                                {/* import { BlurView } from 'expo-blur'; */}

                            </TouchableOpacity>
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
                                <BlurView
                                    intensity={30}
                                    tint="light"
                                    style={{
                                        height: 30,
                                        width: 30,
                                        borderRadius: 15, // not "50%", use number
                                        //   borderWidth: 2,
                                        //   borderColor: "#CFCFCF",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        overflow: "hidden",
                                        position: "absolute",
                                        top: -90,
                                        right: 10
                                    }}
                                >
                                    {wish?.some((ele) => ele?.id === detail.id) ?
                                        <AntDesign name="heart" size={20} color="red" style={{ position: "absolute", right: 3, top: 4 }} onPress={() => deleteFromWish(detail?.id)} />
                                        :
                                        <AntDesign name="hearto" size={20} color="#CFCFCF" style={{ position: "absolute", right: 3, top: 4 }} onPress={() => addToWish(detail)} />

                                    }
                                </BlurView>
                            </View>

                        </View>
                    </View>

                    {/* 3rd Section  */}
                    <View style={{ marginVertical: 12 }}>

                        <Text style={{ fontSize: 20, fontWeight: "600" }}>
                            {detail.name}
                        </Text>
                    </View>


                    {/* 3rd Section  */}
                    <View style={{ flexDirection: "row", alignItems: "center", gap: 20 }}>
                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            {/* <FontAwesome name="star" size={24} color="gold" /> */}
                            <FontAwesome name="star-o" size={24} color="#FF7622" />
                            <Text style={{ fontWeight: "800", fontSize: 15 }}>
                                {detail.rating}
                            </Text>

                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            {/* <FontAwesome name="star" size={24} color="gold" /> */}
                            <MaterialCommunityIcons name="truck-fast-outline" size={24} color="#FF7622" />
                            <Text style={{ fontWeight: "800", fontSize: 15 }}>
                                {detail.reviewCount}
                            </Text>

                        </View>

                        <View style={{ flexDirection: "row", alignItems: "center", gap: 10 }}>
                            {/* <FontAwesome name="star" size={24} color="gold" /> */}
                            <AntDesign name="clockcircleo" size={22} color="#FF7622" />
                            <Text style={{ fontWeight: "800", fontSize: 15 }}>
                                {detail.servings}
                            </Text>

                        </View>
                    </View>
                    {/* 3rd Section  */}


                    <View style={{ marginVertical: 12 }}>

                        <Text style={{ fontSize: 12, fontWeight: "200" }}>{
                            detail.ingredients?.join(" ")}
                        </Text>
                    </View>

                    {/* 3rd Section  */}




                    {/* 3rd Section  */}


                    <View style={{ flexDirection: "row", alignItems: "center", gap: 14, marginVertical: 12 }}>
                        <Text>SIZE :</Text>

                        {sizes.map((size, index: any) => (
                            <TouchableOpacity key={index} onPress={() => setSelectedSize(index)}

                            >
                                <View
                                    style={{
                                        height: 40,
                                        width: 40,
                                        alignItems: "center",
                                        justifyContent: "center",
                                        borderRadius: 20, // not "50%", use number
                                        backgroundColor: selectedSize === index ? "#FF7622" : "#C9C9C9",
                                    }}
                                >
                                    <Text style={{ fontWeight: "500", fontSize: 17 }}>{size}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}
                    </View>



                    {/* 3rd Section  */}



                    <View style={{ marginVertical: 12 }}>

                        <Text style={{ fontSize: 16, fontWeight: "500", color: "rgba(0,0,0,0.6)" }}>
                            INGRIDIENTS
                        </Text>
                    </View>




                    <ScrollView horizontal>
                        <View style={{ marginVertical: 3, flexDirection: 'row', gap: 10 }}>
                            <Cart4 />
                            <View
                                style={{
                                    height: 45,
                                    width: 45,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 20, // not "50%", use number
                                    backgroundColor: "#FFD2BA"
                                }}
                            >
                                <MaterialCommunityIcons name="food-variant" size={24} color="green" />
                                {/* <FontAwesome name="coffee" size={22} color="brown" /> */}

                            </View>
                            <View
                                style={{
                                    height: 45,
                                    width: 45,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 20, // not "50%", use number
                                    backgroundColor: "#FFD2BA"
                                }}
                            >
                                <MaterialCommunityIcons name="noodles" size={24} color="tomato" />
                                {/* <FontAwesome name="coffee" size={22} color="brown" /> */}

                            </View>
                            <View
                                style={{
                                    height: 45,
                                    width: 45,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 20, // not "50%", use number
                                    backgroundColor: "#FFD2BA"
                                }}
                            >
                                <FontAwesome name="spoon" size={24} color="gray" />
                                {/* <FontAwesome name="coffee" size={22} color="brown" /> */}

                            </View>
                            <View
                                style={{
                                    height: 45,
                                    width: 45,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 20, // not "50%", use number
                                    backgroundColor: "#FFD2BA"
                                }}
                            >
                                <MaterialCommunityIcons name="pizza" size={24} color="orange" />
                                {/* <FontAwesome name="coffee" size={22} color="brown" /> */}

                            </View>
                            <View
                                style={{
                                    height: 45,
                                    width: 45,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 20, // not "50%", use number
                                    backgroundColor: "#FFD2BA"
                                }}
                            >
                                <FontAwesome name="coffee" size={22} color="brown" />

                            </View>
                            <View
                                style={{
                                    height: 45,
                                    width: 45,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 20, // not "50%", use number
                                    backgroundColor: "#FFD2BA"
                                }}
                            >
                                <FontAwesome name="coffee" size={22} color="brown" />

                            </View>
                            <View
                                style={{
                                    height: 45,
                                    width: 45,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 20, // not "50%", use number
                                    backgroundColor: "#FFD2BA"
                                }}
                            >
                                <FontAwesome name="coffee" size={22} color="brown" />

                            </View>
                            <View
                                style={{
                                    height: 45,
                                    width: 45,
                                    alignItems: "center",
                                    justifyContent: "center",
                                    borderRadius: 20, // not "50%", use number
                                    backgroundColor: "#FFD2BA"
                                }}
                            >
                                <FontAwesome name="coffee" size={22} color="brown" />

                            </View>





                        </View>
                    </ScrollView>


                    {/* 3rd Section  */}
                    <View style={{ marginVertical: 18, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }}>
                        <View>
                            <Text style={{ fontSize: 20, fontWeight: "500" }}> $ {detail.cookTimeMinutes === 0 ? 10 * qty : detail.cookTimeMinutes * qty}</Text>
                        </View>
                        <View>
                            {/* 2nd item button  */}
                            <View style={{ gap: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "rgb(0,0,0)", height: 43, marginRight: 15, paddingHorizontal: 10, borderBottomEndRadius: 20, borderBottomStartRadius: 20, borderTopEndRadius: 20, borderTopStartRadius: 20, width: 130 }}>
                                <TouchableOpacity onPress={() => setQty(qty === 1 ? 1 : qty - 1)}>
                                    <View style={{ height: 30, width: 30, borderRadius: 50, backgroundColor: "#BFBFBF", justifyContent: "center", alignItems: "center" }}>

                                        <Entypo name="minus" size={22} color="white" />
                                    </View>
                                </TouchableOpacity>
                                <Text style={{ fontWeight: "700", color: "white" }}>
                                    {qty ?? 1}
                                </Text>
                                <TouchableOpacity onPress={() => setQty(qty + 1)}>
                                    <View style={{ height: 30, width: 30, borderRadius: 50, backgroundColor: "#BFBFBF", justifyContent: "center", alignItems: "center" }}>

                                        <Entypo name="plus" size={22} color="white" style={{ fontWeight: "600" }} />
                                    </View>
                                </TouchableOpacity>
                            </View>


                        </View>
                    </View>

                    <TouchableOpacity style={{ height: 50, width: "100%", marginTop: 12, backgroundColor: "#FF7622", justifyContent: "center", alignItems: "center", borderRadius: 10 }} onPress={() => { addToCart({ ...detail, qty: qty }), route.push('/standalone/CartBlack') }}>
                        <Text style={{ color: "white" }}>
                            ADD TO CART
                        </Text>
                    </TouchableOpacity>







                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Details

const styles = StyleSheet.create({})