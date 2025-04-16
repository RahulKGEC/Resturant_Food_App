import { ImageComponent, SafeAreaView, ScrollView, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useRouter } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
// import { TextInput } from 'react-native-gesture-handler'
import { TextInput } from 'react-native'
import Cart from "../../../components/myComponents/Cart"
const home = () => {
  const route = useRouter()
  const [bg, setBg] = useState("white");

  const navigation = useNavigation();
  const drawerOpen = () => {
    navigation.dispatch(DrawerActions.openDrawer());

  };
  return (

    <SafeAreaView>
      <ScrollView>
        <View>


          <View style={{ marginHorizontal: 15 }}>

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
                    // flexDirection:"row"
                  }}
                >


                  <MaterialIcons name="menu" size={26} onPress={drawerOpen} />

                </View>

                <View style={{}}>

                  <Text style={{ fontSize: 14, color: "#FF7622", fontWeight: "700" }}>
                    DELIVERY TO
                  </Text>
                  <Text style={{ fontSize: 13, alignItems: "center", justifyContent: "center" }}>
                    Halal Lab office <FontAwesome name="caret-down" size={22} color="black" />

                  </Text>
                </View>
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

            {/* //2nd phase */}

            <View style={{ flexDirection: "row", marginVertical: 15 }}>
              <Text style={{ fontSize: 15 }}>Hey Halal,</Text> <Text style={{ fontSize: 15, fontWeight: "700" }}>  Good Afternoon!</Text>
            </View>



            {/* 3rd SEction  */}

            <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 12, backgroundColor: "#E0E0E0", paddingHorizontal: 15, borderRadius: 14, fontSize: 14, marginVertical: 10, }} >
              <AntDesign name="search1" size={21} style={{ fontWeight: "700", color: "#F0FeF9", marginRight: 10 }} />
              <TextInput placeholder='Search dishes, resturants' />
            </View>

            {/* 4th Section  */}

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 15 }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  All Categories
                </Text>
              </View>
              <TouchableOpacity onPress={() => { route.push('/standalone/squareDetail1') }}
                onPressOut={() => setBg("white")}   // darker on press
                onPressIn={() => setBg('#FF7622')}
                style={{
                  backgroundColor: bg,
                  paddingVertical: 10,
                  paddingHorizontal: 15,
                  borderRadius: 10,
                }}
              >

                <View style={{ flexDirection: "row", }}>
                  <Text style={{ fontSize: 14, }}>
                    See All

                  </Text>
                  <Entypo name="chevron-right" size={19} color="black" style={{ fontWeight: "500" }} />
                </View>
              </TouchableOpacity>
            </View>






          </View>




          {/* 5th Section  */}
          <ScrollView horizontal={true} style={{ marginLeft: 15 }}>
            <TouchableOpacity onPress={() => route.push("/standalone/Search")}>

              <View style={{ gap: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#FFD27C", height: 43, marginRight: 15, paddingHorizontal: 10, borderBottomEndRadius: 20, borderBottomStartRadius: 20, borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                <View style={{ height: 35, width: 35, borderRadius: 50, backgroundColor: "#E0E0E0", justifyContent: "center", alignItems: "center" }}>

                  <FontAwesome5 name="fire-alt" size={21} style={{ fontWeight: "700", color: "#FF7622" }} />
                </View>
                <Text style={{ fontWeight: "700" }}>
                  All
                </Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => route.push("/standalone/Burger")}>
              <View style={{ gap: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#FFD27C", height: 43, paddingHorizontal: 10, marginRight: 15, borderBottomEndRadius: 20, borderBottomStartRadius: 20, borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                <View style={{ height: 35, width: 35, borderRadius: 50, backgroundColor: "#E0E0E0", justifyContent: "center", alignItems: "center" }}>

                  <FontAwesome5 name="hamburger" size={21} style={{ fontWeight: "700", color: "#FF7622" }} />
                </View>
                <Text style={{ fontWeight: "700" }}>
                  Hot Dog
                </Text>
              </View>
            </TouchableOpacity>


            <TouchableOpacity onPress={() => route.push("/standalone/Details")}>
              <View style={{ gap: 15, flexDirection: "row", alignItems: "center", justifyContent: "center", backgroundColor: "#FFD27C", height: 43, paddingHorizontal: 10, marginRight: 15, borderBottomEndRadius: 20, borderBottomStartRadius: 20, borderTopEndRadius: 20, borderTopStartRadius: 20 }}>
                <View style={{ height: 35, width: 35, borderRadius: 50, backgroundColor: "#E0E0E0", justifyContent: "center", alignItems: "center" }}>


                  <FontAwesome5 name="wine-bottle" size={21} style={{ fontWeight: "700", color: "#FF7622" }} />
                </View>
                <Text style={{ fontWeight: "700" }}>
                  Bear
                </Text>
              </View>
            </TouchableOpacity>

          </ScrollView>






          <View style={{ marginHorizontal: 15 }}>
            {/* 6th Section  */}

            <View style={{ flexDirection: "row", alignItems: "center", justifyContent: "space-between", marginVertical: 15 }}>
              <View>
                <Text style={{ fontSize: 18, fontWeight: "500" }}>
                  Open Resturants
                </Text>
              </View>
              <View style={{ flexDirection: "row", }}>
                <Text style={{ fontSize: 14, }}>
                  See All

                </Text>
                <Entypo name="chevron-right" size={19} color="black" style={{ fontWeight: "500" }} />
              </View>
            </View>


            {/* 7th Section  */}


            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />
            <Cart />

















          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}

export default home

const styles = StyleSheet.create({})