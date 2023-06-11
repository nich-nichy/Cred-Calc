import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Cgpa from "../pages/cgpa";
import Gpa from "../pages/gpa";

export default function Header() {
  return (
    <NavigationContainer style={styles.container}>
      <View>
        <Text style={styles.title}>CredCalc</Text>
        <Image
          style={styles.logo}
          source={require("../../assets/Design-NVG.jpg")}
        />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {},
  title: {
    color: "#fff",
    margin: 10,
    marginTop: 40,
    fontSize: 30,
    fontWeight: 700,
  },
  logo: {
    width: 80,
    height: 80,
    borderRadius: "50%",
    display: "relative",
    alignSelf: "center",
    marginTop: "10px",
    marginBottom: "20px",
  },
});
