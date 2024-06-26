import React from "react"
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Ionicons, FontAwesome } from "@expo/vector-icons"
import HomeScreen from "../Screen/HomeScreen/HomeScreen"
import ProfileScreen from "../Screen/ProfileScreen/ProfileScreen"
import FavoriteScreen from "../Screen/FavoriteScreen/FavoriteScreen"
import Colors from "../Utils/Colors"

const Tab = createBottomTabNavigator()

export default function TabNavigation() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false
      }}
    >
      <Tab.Screen
        name="home"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarLabel: "Pesquisar",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="favorite"
        component={FavoriteScreen}
        options={{
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="heart" size={size} color={color} />
          )
        }}
      />
      <Tab.Screen
        name="profile"
        component={ProfileScreen}
        options={{
          tabBarActiveTintColor: Colors.PRIMARY,
          tabBarLabel: "Perfil",
          tabBarIcon: ({ color, size }) => (
            <FontAwesome name="user-circle" size={size} color={color} />
          )
        }}
      />
    </Tab.Navigator>
  )
}
