import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons'

const Cart4 = () => {
    return (
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
    )
}

export default Cart4

const styles = StyleSheet.create({})