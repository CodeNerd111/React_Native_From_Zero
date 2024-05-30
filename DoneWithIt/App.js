import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import WelcomeScreen from "./app/screens/WelcomeScreen";
import ViewImageScreen from "./app/screens/ViewImageScreen";
import AppText from "./app/components/AppText";
import Card from "./app/components/Card";
import ListingDetailsScreen from "./app/screens/ListingDetailsScreen";
import MessageScreen from "./app/screens/MessageScreen";
import AccountScreen from "./app/screens/AccountScreen";
import ListingScreen from "./app/screens/ListingsScreen";

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <ListingScreen />
    </GestureHandlerRootView>
  );
}
