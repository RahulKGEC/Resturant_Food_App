import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import React from 'react';
import EditScreen from './EditScreen';
import login from './login';

const _layout = () => {
  return (
    <Stack screenOptions={{headerShown:false}}
    
    >
      <Stack.Screen name="login"  options={{ title: "Login", headerShown: false }} />
      <Stack.Screen name="EditScreen" options={{ title: "EditScreen", headerShown: false }} />
      <Stack.Screen name="MyAddress" options={{ title: "MyAddress", headerShown: false }} />
      <Stack.Screen name="Map" options={{ title: "Map", headerShown: false }} />
      <Stack.Screen name="squareDetail" options={{ title: "squareDetail", headerShown: false }} />
      <Stack.Screen name="Search" options={{ title: "Search", headerShown: false }} />
      <Stack.Screen name="Burger" options={{ title: "Burger", headerShown: false }} />
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
