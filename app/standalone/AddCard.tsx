import { SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons'

const AddCard = () => {
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ marginHorizontal: 18 }}>
          {/* 1st   Compionets*/}
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


                <Text style={{ fontWeight: "500", fontSize: 17, alignItems: "center", justifyContent: "center" }}>
                  Add Card

                </Text>
              </View>
            </View>





          </View>








          {/* 2nd container */}

          <View style={{ flex: 1, marginVertical: 20 }}>

            <View>
              <Text style={{ color: "gray" }}>
                CARD HOLDER NAME
              </Text>
              <TextInput placeholder='Vishal Khadok' style={{ paddingVertical: 15, backgroundColor: "#E0E0E0", paddingHorizontal: 15, borderRadius: 14, fontSize: 14, marginVertical: 10, }} />
            </View>

            <View>
              <Text style={{ color: "gray" }}>
                CARD NUMBER
              </Text>

              <View style={{ flexDirection: "row", alignItems: "center", paddingVertical: 10, backgroundColor: "#E0E0E0", paddingHorizontal: 15, borderRadius: 14, fontSize: 14, marginVertical: 10, }} >

                <TextInput placeholder=' 2134    |_ _ _ _ _ _ _ _ _ ' placeholderTextColor="gray" style={{ fontSize: 16 }} />
              </View>
            </View>

            <View style={{ width: "100%", flexDirection: "row", gap: 15 }}>
              <View style={{ width: "46%" }}>
                <Text style={{ color: "gray" }}>
                  EXPIRE DATE
                </Text>
                <TextInput placeholder='MM/YYYY' style={{ paddingVertical: 15, backgroundColor: "#E0E0E0", paddingHorizontal: 15, borderRadius: 14, fontSize: 14, marginVertical: 10, }} />
              </View>
              <View style={{ width: "46%" }}>
                <Text style={{ color: "gray" }}>
                  CVC
                </Text>
                <TextInput placeholder='...' placeholderTextColor="gray" style={{ paddingVertical: 9, backgroundColor: "#E0E0E0", paddingHorizontal: 10, borderRadius: 14, fontSize: 23, marginVertical: 10, }} />
              </View>
            </View>











            <TouchableOpacity style={{ height: 50, width: "100%", backgroundColor: "#FF7622", justifyContent: "center", alignItems: "center", borderRadius: 10, marginVertical: 10 }} onPress={() => route.push("/standalone/Profile")}>
              <Text style={{ color: "white", fontWeight: "700" }}>
                ADD & MAKE PAYMENT
              </Text>
            </TouchableOpacity>








          </View>








        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default AddCard

const styles = StyleSheet.create({})