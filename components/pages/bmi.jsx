import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const BmiCalculator = () => {
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [bmi, setBmi] = useState(null);

    const calculateBmi = () => {
        if (!weight || !height) {
            return;
        }

        const weightKg = parseFloat(weight);
        const heightM = parseFloat(height) / 100;
        const bmiResult = weightKg / (heightM * heightM);
        setBmi(bmiResult.toFixed(2));
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>BMI Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter weight (kg)"
                keyboardType="numeric"
                onChangeText={(text) => setWeight(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter height (cm)"
                keyboardType="numeric"
                onChangeText={(text) => setHeight(text)}
            />
            <TouchableOpacity style={styles.button} onPress={calculateBmi}>
                <Text style={styles.buttonText}>Calculate BMI</Text>
            </TouchableOpacity>
            {bmi !== null && <Text style={styles.result}>Your BMI is: {bmi}</Text>}
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#f5f5f5",
    },
    header: {
        fontSize: 24,
        fontWeight: "bold",
        marginBottom: 20,
    },
    input: {
        height: 40,
        width: 200,
        borderColor: "gray",
        borderWidth: 1,
        marginBottom: 20,
        padding: 10,
    },
    button: {
        backgroundColor: "#007BFF",
        padding: 10,
        borderRadius: 5,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
    result: {
        marginTop: 20,
        fontSize: 18,
    },
});

export default BmiCalculator;
