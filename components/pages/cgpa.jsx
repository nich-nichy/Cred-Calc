import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";

const Cgpa = ({ courses }) => {
  const [cgpa, setCgpa] = useState(0);

  const calculateCgpa = () => {
    const totalCredits = courses.reduce(
      (acc, course) => acc + course.creditHours,
      0
    );
    const totalPoints = courses.reduce((acc, course) => acc + course.points, 0);

    setCgpa(totalPoints / totalCredits);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>CGPA Calculator</Text>
      <View style={styles.courses}>
        {courses.map((course) => (
          <View key={course.id}>
            <Text style={styles.courseName}>{course.name}</Text>
            <Text style={styles.courseCredits}>{course.creditHours}</Text>
            <Text style={styles.coursePoints}>{course.points}</Text>
          </View>
        ))}
      </View>
      <View style={styles.cgpa}>
        <Text style={styles.cgpaLabel}>CGPA</Text>
        <Text style={styles.cgpaValue}>{cgpa}</Text>
      </View>
      <View style={styles.button}>
        <Text onPress={calculateCgpa}>Calculate CGPA</Text>
      </View>
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
  header: {
    fontSize: 20,
    fontWeight: "bold",
  },
  courses: {
    flex: 1,
    flexDirection: "column",
  },
  courseName: {
    fontSize: 16,
  },
  courseCredits: {
    fontSize: 16,
    margin: 5,
  },
  coursePoints: {
    fontSize: 16,
    margin: 5,
  },
  cgpa: {
    flex: 1,
    flexDirection: "row",
  },
  cgpaLabel: {
    fontSize: 16,
    margin: 5,
  },
  cgpaValue: {
    fontSize: 16,
    fontWeight: "bold",
    margin: 5,
  },
  button: {
    width: 100,
    height: 40,
    backgroundColor: "#000",
    color: "#fff",
    borderRadius: 5,
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Cgpa;
