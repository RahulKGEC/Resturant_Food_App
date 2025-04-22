import { Drawer } from 'expo-router/drawer';
import MyContext from '@/components/myComponents/MyContext';

export default function DrawerLayout() {
  return (
    <MyContext>
      <Drawer>
        <Drawer.Screen
          name="(tabs)"
          options={{
            title: 'Main App',
            headerShown: false
          }}
        />
        <Drawer.Screen
          name="profile"
          options={{ title: 'Profile' }}
        />
      </Drawer>
    </MyContext>
  );
}