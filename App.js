import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Navbar from "./components/starter/menuBar";
import Header from "./components/starter/header";

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <Navbar />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    paddingBottom: 0,
    backgroundColor: "#111827",
  },
});
