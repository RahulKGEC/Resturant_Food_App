import { Stack } from 'expo-router';
// import EditScreen from '@/components/myComponents/EditScreen';
export default function RootLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen
        name="(drawer)"
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="standalone"
        options={{ title: 'Login' }}
      />
            {/* <Stack.Screen name="EditScreen"    component={EditScreen} options={{ title: "edit" ,headerShown:false}} /> */}
    </Stack>
  );
}