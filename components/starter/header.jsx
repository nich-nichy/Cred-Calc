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

export default function Header() {
  return (
    <NavigationContainer style={styles.container}>
      <View>
        {/* <Text style={styles.title}>CredCalc</Text> */}
        <Image
          style={styles.logo}
          source={require("../../assets/logo-cc.png")}
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
    width: 90,
    height: 100,
    display: "relative",
    alignSelf: "center",
    marginTop: "30px",
    marginBottom: "20px",
    padding: "10px 0px 0px 0px",
  },
});
