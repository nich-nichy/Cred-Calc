import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const TipCalculator = () => {
    const [billAmount, setBillAmount] = useState("");
    const [tipPercentage, setTipPercentage] = useState("");
    const [tipAmount, setTipAmount] = useState(null);

    const calculateTip = () => {
        if (!billAmount || !tipPercentage) {
            // Handle validation or show an alert
            return;
        }

        const bill = parseFloat(billAmount);
        const tipPercent = parseFloat(tipPercentage);

        const tipResult = (bill * tipPercent) / 100;
        setTipAmount(tipResult.toFixed(2)); // Keep only two decimal places
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Tip Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter bill amount"
                keyboardType="numeric"
                onChangeText={(text) => setBillAmount(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter tip percentage"
                keyboardType="numeric"
                onChangeText={(text) => setTipPercentage(text)}
            />
            <TouchableOpacity style={styles.button} onPress={calculateTip}>
                <Text style={styles.buttonText}>Calculate Tip</Text>
            </TouchableOpacity>
            {tipAmount !== null && <Text style={styles.result}>Tip Amount: ${tipAmount}</Text>}
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

export default TipCalculator;
