import React, { useState } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import Home from "./index";
import CGPA from "./components/pages/collegeVariant/cgpa";
import GPA from "./components/pages/collegeVariant/gpa";
import AGE from "./components/pages/age";
import BMI from "./components/pages/bmi";
import TIP from "./components/pages/tip";
import Loan from "./components/pages/loan";
import Advertisement from "./components/utils/advertisement";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

export default function App() {
  const Stack = createStackNavigator();
  return (
      <NavigationContainer>
          <Stack.Navigator style={styles.container}>
              <Stack.Screen name="Home" component={Home} />
              <Stack.Screen name="CGPA" component={CGPA} />
              <Stack.Screen name="GPA" component={GPA} />
              <Stack.Screen name="AGE" component={AGE} />
              <Stack.Screen name="BMI" component={BMI} />
              <Stack.Screen name="TIP" component={TIP} />
              <Stack.Screen name="Loan" component={Loan} />
              <Stack.Screen name="Advertisement" component={Advertisement} />
          </Stack.Navigator>
      </NavigationContainer>
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
