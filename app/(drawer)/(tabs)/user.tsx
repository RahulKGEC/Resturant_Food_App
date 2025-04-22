import { StyleSheet, Text, View } from 'react-native'
import React, { useContext } from 'react'
import { CartContext } from '.';

const user = () => {

  const {  } = useContext(CartContext);
  return (
    <View>
      <Text>user</Text>
    </View>
  )
}

export default user

const styles = StyleSheet.create({})