import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Constants from "expo-constants";

const Screen = ({ children, style }) => {
  return (
    <SafeAreaView style={styles.screen}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  screen: {
    paddingTop: Constants.statusBarHeight,
    //paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
});
