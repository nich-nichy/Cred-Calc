import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const Age = () => {
    const [birthYear, setBirthYear] = useState("");
    const [calculatedAge, setCalculatedAge] = useState(null);

    const calculateAge = () => {
        const currentYear = new Date().getFullYear();
        const age = currentYear - parseInt(birthYear, 10);
        setCalculatedAge(age);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Age Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter birth year"
                keyboardType="numeric"
                onChangeText={(text) => setBirthYear(text)}
            />
            <TouchableOpacity style={styles.button} onPress={calculateAge}>
                <Text style={styles.buttonText}>Calculate Age</Text>
            </TouchableOpacity>
            {calculatedAge !== null && (
                <Text style={styles.result}>Your age is: {calculatedAge} years</Text>
            )}
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

export default Age;
