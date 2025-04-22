import { Tabs } from "expo-router";
import React from "react";
import { Platform } from "react-native";

import { HapticTab } from "@/components/HapticTab";
import { IconSymbol } from "@/components/ui/IconSymbol";
import TabBarBackground from "@/components/ui/TabBarBackground";
import { Colors } from "@/constants/Colors";
import { useColorScheme } from "@/hooks/useColorScheme";
import {
  FontAwesome,
  Fontisto,
  Ionicons,
  MaterialIcons,
} from "@expo/vector-icons";

import MyContext from "@/components/myComponents/MyContext";

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <MyContext>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: "#FF7622", // active icon/text color (orange)
          tabBarInactiveTintColor: "gray", // inactive icon/text color
          // tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
          headerShown: false,
          tabBarButton: HapticTab,
          tabBarBackground: TabBarBackground,
          tabBarStyle: Platform.select({
            ios: {
              // Use a transparent background on iOS to show the blur effect
              position: "absolute",
            },
            default: {},
          }),
        }}
      >
        <Tabs.Screen
          name="square"
          options={{
            // title: "Square",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <MaterialIcons size={28} name="square" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="index"
          options={{
            // title: "Index ",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Ionicons size={28} name="menu" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="add"
          options={{
            // title: "add",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Ionicons size={35} name="add-circle-outline" color={color} />
            ),
          }}
        />
        <Tabs.Screen
          name="ring"
          options={{
            // title: "ring",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <Fontisto size={28} name="bell" color={color} />
            ),
          }}
        />

        <Tabs.Screen
          name="user"
          options={{
            // title: "user",
            tabBarShowLabel: false,
            tabBarIcon: ({ color }) => (
              <FontAwesome size={28} name="user-circle" color={color} />
            ),
          }}
        />

      </Tabs>
    </MyContext>
  );
}
