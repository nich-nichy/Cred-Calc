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
import Cgpa from "../pages/cgpa.jsx";
import Gpa from "../pages/gpa.jsx";

export default function Header() {
  const handleCard1Press = () => {
    return <Stack.Screen name="Cgpa" component={Cgpa} />;
  };
  const handleCard2Press = () => {
    return <Stack.Screen name="Gpa" component={Gpa} />;
  };
  return (
    <NavigationContainer style={styles.container}>
      {/* App starter */}
      <View>
        <Text style={styles.title}>CGPA and GPA Calculator</Text>
        <Image
          style={styles.logo}
          source={require("../../assets/Design-NVG.jpg")}
        />
      </View>
      {/* Card Wrapper */}
      <View style={styles.cardHolder}>
        <TouchableOpacity style={styles.card1} onPress={handleCard1Press}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/Design-NVG.jpg")}
          />
          <Text style={styles.cardTitle}>CGPA</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card2} onPress={handleCard2Press}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/Design-NVG.jpg")}
          />
          <Text style={styles.cardTitle}>GPA</Text>
        </TouchableOpacity>
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
    marginTop: "20px",
  },
  cardHolder: {
    flex: 1,
    justifyContent: "space-evenly",
    display: "-webkit-inline-box",
    marginTop: "30px",
    marginBottom: "1px",
  },
  card1: {
    width: 200,
    height: 200,
    margin: 10,
    backgroundColor: "#1e293b",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  card2: {
    width: 200,
    height: 200,
    margin: 10,
    backgroundColor: "#1e293b",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: "center",
    alignItems: "center",
  },
  cardImage: {
    width: "70%",
    height: "60%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: "700",
    marginTop: 10,
    color: "#fff",
  },
  progressBar: {
    marginTop: "10px",
  },
  progressHolder: {
    marginTop: "10px",
  },
});
