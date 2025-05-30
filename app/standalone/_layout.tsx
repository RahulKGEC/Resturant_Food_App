import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';
// import EditScreen from './EditScreen';
// import login from './login';
import MyContext from '@/components/myComponents/MyContext';

const _layout = () => {
  return (
    <MyContext>
      <Stack screenOptions={{ headerShown: false }}

      >
        <Stack.Screen name="login" options={{ title: "Login", headerShown: false }} />
        <Stack.Screen name="EditScreen" options={{ title: "EditScreen", headerShown: false }} />
        <Stack.Screen name="MyAddress" options={{ title: "MyAddress", headerShown: false }} />
        <Stack.Screen name="Map" options={{ title: "Map", headerShown: false }} />
        <Stack.Screen name="squareDetail" options={{ title: "squareDetail", headerShown: false }} />
        <Stack.Screen name="Search" options={{ title: "Search", headerShown: false }} />
        <Stack.Screen name="Burger" options={{ title: "Burger", headerShown: false }} />
        <Stack.Screen name="ResturantView" options={{ title: "ResturantView", headerShown: false }} />
        <Stack.Screen name="SpicyResturant" options={{ title: "SpicyResturant", headerShown: false }} />
        <Stack.Screen name="CartBlack" options={{ title: "CartBlack", headerShown: false }} />
        <Stack.Screen name="Payment" options={{ title: "Payment", headerShown: false }} />
        <Stack.Screen name="AddCard" options={{ title: "AddCard", headerShown: false }} />
        <Stack.Screen name="Congratulations" options={{ title: "Congratulations", headerShown: false }} />
        <Stack.Screen name="SignUp" options={{ title: "SignUp", headerShown: false }} />



      </Stack>
    </MyContext>
  );
};

export default _layout;

const styles = StyleSheet.create({});
