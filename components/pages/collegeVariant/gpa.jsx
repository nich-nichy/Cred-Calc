import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const GPACalculator = () => {
    const [subjects, setSubjects] = useState([]);
    const [subjectName, setSubjectName] = useState("");
    const [creditHours, setCreditHours] = useState("");
    const [grade, setGrade] = useState("");
    const [gpa, setGPA] = useState(null);

    const addSubject = () => {
        if (!subjectName || !creditHours || !grade) {
            // Handle validation or show an alert
            return;
        }

        const newSubject = {
            id: subjects.length + 1,
            name: subjectName,
            creditHours: parseFloat(creditHours),
            grade: grade.toUpperCase(), // Convert the grade to uppercase for consistency
        };

        setSubjects([...subjects, newSubject]);
        setSubjectName("");
        setCreditHours("");
        setGrade("");
    };

    const calculateGPA = () => {
        if (subjects.length === 0) {
            // Handle the case when there are no subjects added
            return;
        }

        const totalCredits = subjects.reduce((acc, subject) => acc + subject.creditHours, 0);
        const totalGradePoints = subjects.reduce((acc, subject) => acc + getGradePoints(subject.grade) * subject.creditHours, 0);

        const calculatedGPA = totalGradePoints / totalCredits;
        setGPA(calculatedGPA.toFixed(2)); // Keep only two decimal places
    };

    const getGradePoints = (grade) => {
        switch (grade) {
            case "A":
                return 4.0;
            case "B":
                return 3.0;
            case "C":
                return 2.0;
            case "D":
                return 1.0;
            default:
                return 0.0;
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.header}>GPA Calculator</Text>
            <TextInput
                style={styles.input}
                placeholder="Subject Name"
                onChangeText={(text) => setSubjectName(text)}
                value={subjectName}
            />
            <TextInput
                style={styles.input}
                placeholder="Credit Hours"
                keyboardType="numeric"
                onChangeText={(text) => setCreditHours(text)}
                value={creditHours}
            />
            <TextInput
                style={styles.input}
                placeholder="Grade (A, B, C, ...)"
                onChangeText={(text) => setGrade(text)}
                value={grade}
            />
            <TouchableOpacity style={styles.button} onPress={addSubject}>
                <Text style={styles.buttonText}>Add Subject</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.button} onPress={calculateGPA}>
                <Text style={styles.buttonText}>Calculate GPA</Text>
            </TouchableOpacity>
            {gpa !== null && <Text style={styles.result}>GPA: {gpa}</Text>}
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
        marginBottom: 10,
    },
    buttonText: {
        color: "#fff",
        textAlign: "center",
    },
    result: {
        fontSize: 18,
        marginTop: 10,
    },
});

export default GPACalculator;
