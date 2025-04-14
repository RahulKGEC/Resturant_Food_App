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
    </Stack>
  );
};

export default _layout;

const styles = StyleSheet.create({});
