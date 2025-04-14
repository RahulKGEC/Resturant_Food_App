import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { useRouter } from 'expo-router'

const feed = () => {
  const router=useRouter()
  return (
    <View>
      <Text>feed</Text>
      <TouchableOpacity onPress={()=> router.navigate("/standalone/login")}>
        <Text  >Go To Login Page</Text>
      </TouchableOpacity>
    </View>
  )
}

export default feed

const styles = StyleSheet.create({})