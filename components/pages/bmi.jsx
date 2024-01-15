import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Bmi = ({ courses }) => {

    return (
        <View style={styles.container}>
            <Text style={styles.header}>Advertisement</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: 300,
        height: 400,
        margin: 10,
        borderRadius: 5,
        backgroundColor: "#fff",
    },
});

export default Bmi;
