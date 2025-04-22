import { Stack } from 'expo-router';
// import EditScreen from '@/components/myComponents/EditScreen';
import MyContext from '@/components/myComponents/MyContext';
export default function RootLayout() {
  return (
    <MyContext>


      <Stack screenOptions={{ headerShown: false }}>
        <Stack.Screen
          name="(drawer)"
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="standalone"
          options={{ title: 'Login' }}
        />
        <Stack.Screen
          name="index"
          options={{ title: 'Index' }}
        />
        {/* <Stack.Screen name="EditScreen"    component={EditScreen} options={{ title: "edit" ,headerShown:false}} /> */}
      </Stack>
    </MyContext>
  );
}