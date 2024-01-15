import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const LoanCalculator = () => {
    const [loanAmount, setLoanAmount] = useState("");
    const [interestRate, setInterestRate] = useState("");
    const [loanTerm, setLoanTerm] = useState("");
    const [monthlyPayment, setMonthlyPayment] = useState(null);

    const calculateLoan = () => {
        if (!loanAmount || !interestRate || !loanTerm) {
            return;
        }

        const P = parseFloat(loanAmount);
        const r = parseFloat(interestRate) / 100 / 12;
        const n = parseFloat(loanTerm) * 12;

        const monthlyPaymentResult = (P * r) / (1 - Math.pow(1 + r, -n));
        setMonthlyPayment(monthlyPaymentResult.toFixed(2)); };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Loan Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Enter loan amount"
                keyboardType="numeric"
                onChangeText={(text) => setLoanAmount(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter interest rate (%)"
                keyboardType="numeric"
                onChangeText={(text) => setInterestRate(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Enter loan term (years)"
                keyboardType="numeric"
                onChangeText={(text) => setLoanTerm(text)}
            />
            <TouchableOpacity style={styles.button} onPress={calculateLoan}>
                <Text style={styles.buttonText}>Calculate Monthly Payment</Text>
            </TouchableOpacity>
            {monthlyPayment !== null && (
                <Text style={styles.result}>Monthly Payment: ${monthlyPayment}</Text>
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

export default LoanCalculator;
