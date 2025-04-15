import { ImageComponent, SafeAreaView, ScrollView, StyleSheet, Image, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { AntDesign, Entypo, Feather, FontAwesome, FontAwesome5, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons'
import { useNavigation, useRouter } from 'expo-router'
import { DrawerActions } from '@react-navigation/native'
import { TextInput } from 'react-native'
import Cart from "../../components/myComponents/Cart"
import { LinearGradient } from 'expo-linear-gradient';
import { IconSymbol } from '@/components/ui/IconSymbol'
import Icon from 'react-native-vector-icons/MaterialIcons';
const home = () => {
  const route = useRouter()
  const [model,setModel]=useState(true)
  const [bg, setBg] = useState("white");

  const navigation = useNavigation();
  const drawerOpen = () => {
    navigation.dispatch(DrawerActions.openDrawer());

  };
  return (

    <SafeAreaView>
      <ScrollView>
        <View style={{ position: "relative", display: "flex" }}>


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
              <TouchableOpacity
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
            <View style={{ height: 150, width: 120, borderRadius: 18, }}>
              <View style={{ alignItems: "center" }}>

                <Image source={{ uri: "https://tse4.mm.bing.net/th?id=OIP.KXbIh9HDVtXtVg-IiV6m6QAAAA&pid=Api&P=0&h=180" }} style={{ width: 110, height: 100, borderRadius: 15 }} />
              </View>
              <View style={{ marginHorizontal: 10 }}>


                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Pizza
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#333333" }}>
                    Starting
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#333333" }}>
                    $70
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ height: 150, width: 120, borderRadius: 18, marginLeft: 15 }}>
              <View style={{ alignItems: "center" }}>

                <Image source={require("../../assets/images/detail2.png")} style={{ width: 110, height: 100, borderRadius: 15 }} />
              </View>
              <View style={{ marginHorizontal: 10 }}>


                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Pizza
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#333333" }}>
                    Starting
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#333333" }}>
                    $70
                  </Text>
                </View>
              </View>
            </View>

            <View style={{ height: 150, width: 120, borderRadius: 18, marginLeft: 15 }}>
              <View style={{ alignItems: "center" }}>

                <Image source={{ uri: "https://tse3.mm.bing.net/th?id=OIP.wnwcBAQL0XEzt6SxuhUkjgHaGO&pid=Api&P=0&h=180" }} style={{ width: 110, height: 100, borderRadius: 15 }} />
              </View>
              <View style={{ marginHorizontal: 10 }}>


                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Pizza
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#333333" }}>
                    Starting
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#333333" }}>
                    $70
                  </Text>
                </View>
              </View>
            </View>



            <View style={{ height: 150, width: 120, borderRadius: 18, marginLeft: 15 }}>
              <View style={{ alignItems: "center" }}>

                <Image source={require("../../assets/images/detail2.png")} style={{ width: 110, height: 100, borderRadius: 15 }} />
              </View>
              <View style={{ marginHorizontal: 10 }}>


                <Text style={{ fontSize: 18, fontWeight: "700" }}>
                  Pizza
                </Text>
                <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#333333" }}>
                    Starting
                  </Text>
                  <Text style={{ fontSize: 14, fontWeight: "400", color: "#333333" }}>
                    $70
                  </Text>
                </View>
              </View>
            </View>

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





            {/* 8th Section */}

{model &&

            <View style={{ height: 350, width: "90%", borderRadius: 18, position: "absolute", top: -250, left: 10, }}>

              <LinearGradient
                colors={['#F6BD21', '#E66E00']} // top to bottom gradient
                style={{ flex: 1, borderRadius: 30 }}
              >
                <Text style={{
                  fontWeight: "900",
                  fontSize: 33,
                  color: "white",
                  textAlign: "center",
                  marginTop: 60
                }}>
                  Hurry Offers!
                </Text>


                <Text style={{
                  fontWeight: "900",
                  fontSize: 24,
                  color: "white",
                  textAlign: "center",
                  marginTop: 40
                }}>
                  #1243CD2
                </Text>
                <Text style={{
                  fontWeight: "900",
                  fontSize: 15,
                  color: "white",
                  textAlign: "center",
                  marginTop: 40
                }}>
                  Use the coupon get 25% discount
                </Text>

                <View style={{ justifyContent: "center", alignItems: "center", }}>

                  <View style={{ borderColor: "white", borderWidth: 2, height: 48, width: "80%", marginTop: 29, borderRadius: 15, justifyContent: "center", alignItems: "center" }}>
                    <Text style={{ color: "white", fontSize: 17 }}>
                      GOT IT
                    </Text>
                  </View>
                </View>

              </LinearGradient>
              <View
                style={{
                  height: 35,
                  width: 35,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: "50%",
                  backgroundColor: "#F6BD21",
                  // flexDirection:"row"
                  position: "absolute",
                  right:-10,
                top:-10
                }}
              >


<Icon name="close" size={30} color="#E66E00" onPress={()=>setModel(!model)} />

              </View>

            </View>



              }



          </View>
        </View>
      </ScrollView>
    </SafeAreaView >
  )
}

export default home

const styles = StyleSheet.create({})