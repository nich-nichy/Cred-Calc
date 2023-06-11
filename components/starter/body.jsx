import React from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  NavigationContainer,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

export default function Body() {
  const handleCard1Press = () => {
    // Handle card1 press
  };

  const handleCard2Press = () => {
    // Handle card2 press
  };

  return (
    <ScrollView
      contentContainerStyle={styles.container}
      showsVerticalScrollIndicator={false}
    >
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
      {/* Card second wrapper */}
      <View style={styles.cardHolder}>
        <TouchableOpacity style={styles.card1} onPress={handleCard2Press}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/Design-NVG.jpg")}
          />
          <Text style={styles.cardTitle}>Age</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card2} onPress={handleCard2Press}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/Design-NVG.jpg")}
          />
          <Text style={styles.cardTitle}>BMI</Text>
        </TouchableOpacity>
      </View>
      {/* Card third wrapper */}
      <View style={styles.cardHolder}>
        <TouchableOpacity style={styles.card1} onPress={handleCard2Press}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/Design-NVG.jpg")}
          />
          <Text style={styles.cardTitle}>Tip</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.card2} onPress={handleCard2Press}>
          <Image
            style={styles.cardImage}
            source={require("../../assets/Design-NVG.jpg")}
          />
          <Text style={styles.cardTitle}>Loan</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.cardHolder}>
        <TouchableOpacity style={styles.advertisement}>
          <Text style={styles.advertisementHeader}>Advertisement</Text>
          <Image
            style={styles.cardImage}
            source={require("../../assets/Design-NVG.jpg")}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    paddingVertical: 10,
    height: 100,
    margin: "0px 0px 0px 0px",
  },
  cardHolder: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 1,
  },
  card1: {
    width: 160,
    height: 200,
    margin: 10,
    marginTop: 20,
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
    width: 160,
    height: 200,
    margin: 10,
    marginTop: "20px",
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
  advertisement: {
    width: 250,
    height: 200,
    margin: 10,
    marginTop: "20px",
    marginBottom: "30px",
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
  advertisementHeader: {
    color: "#fff",
    paddingBottom: 15,
  },
  progressBar: {
    marginTop: "10px",
  },
  progressHolder: {
    marginTop: "10px",
  },
});
