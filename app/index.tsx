import { SafeAreaView, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import FrontCarousel from '@/components/myComponents/FrontCarousel'
import { useRouter } from 'expo-router'


const index = () => {
    const  route = useRouter()
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={{ marginHorizontal: 18,marginTop:30 }}>


                    <FrontCarousel />





                    <TouchableOpacity onPress={()=>route.push('/standalone/SignUp')} style={{ marginTop: 90, height: 50, width: "100%", backgroundColor: "#FF7622", justifyContent: "center", alignItems: "center", borderRadius: 10, marginVertical: 10 }} >
                        <Text style={{ color: "white", fontWeight: "700" }}>
                            NEXT
                        </Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={{ height: 50, width: "100%", justifyContent: "center", alignItems: "center", borderRadius: 10, }} >
                        <Text style={{ color: "gray", fontWeight: "700" }}>
                            SKIP
                        </Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default index

const styles = StyleSheet.create({})