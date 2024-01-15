import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from "react-native";

const Cgpa = () => {
  const [courses, setCourses] = useState([]);
  const [courseName, setCourseName] = useState("");
  const [creditHours, setCreditHours] = useState("");
  const [points, setPoints] = useState("");
  const [cgpa, setCGPA] = useState(null);

  const addCourse = () => {
    if (!courseName || !creditHours || !points) {
      // Handle validation or show an alert
      return;
    }

    const newCourse = {
      id: courses.length + 1,
      name: courseName,
      creditHours: parseFloat(creditHours),
      points: parseFloat(points),
    };

    setCourses([...courses, newCourse]);
    setCourseName("");
    setCreditHours("");
    setPoints("");
  };

  const calculateCGPA = () => {
    if (courses.length === 0) {
      // Handle the case when there are no courses added
      return;
    }

    const totalCredits = courses.reduce((acc, course) => acc + course.creditHours, 0);
    const totalPoints = courses.reduce((acc, course) => acc + course.points, 0);

    const calculatedCGPA = totalPoints / totalCredits;
    setCGPA(calculatedCGPA.toFixed(2)); // Keep only two decimal places
  };

  return (
      <View style={styles.container}>
        <Text style={styles.header}>College CGPA Calculator</Text>
        <TextInput
            style={styles.input}
            placeholder="Course Name"
            onChangeText={(text) => setCourseName(text)}
            value={courseName}
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
            placeholder="Points Obtained"
            keyboardType="numeric"
            onChangeText={(text) => setPoints(text)}
            value={points}
        />
        <TouchableOpacity style={styles.button} onPress={addCourse}>
          <Text style={styles.buttonText}>Add Course</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={calculateCGPA}>
          <Text style={styles.buttonText}>Calculate CGPA</Text>
        </TouchableOpacity>
        {cgpa !== null && <Text style={styles.result}>CGPA: {cgpa}</Text>}
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

export default Cgpa;
