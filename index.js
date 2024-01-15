import React from "react";
import { View, TouchableOpacity, Text, StyleSheet, Image, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

export default function App() {
    const navigation = useNavigation();

    const handleCard1Press = () => {
    };

    const handleNavigation = (componentName) => {
        console.log(componentName);
        switch (componentName) {
            case 'CGPA':
                navigation.navigate('CGPA');
                break;
            case 'GPA':
                navigation.navigate('GPA');
                break;
            case 'CGPA':
                navigation.navigate('CGPA');
                break;
            case 'CGPA':
                navigation.navigate('CGPA');
                break;
            default:
                break;
        }
    };

    return (
            <>
                <View>
                    {/* <Text style={styles.title}>CredCalc</Text> */}
                    {/* Header */}
                    <Image
                        style={styles.logo}
                        source={require("./assets/logo-cc.png")}
                    />
                {/* Body */}
                    <ScrollView
                        contentContainerStyle={styles.container}
                        showsVerticalScrollIndicator={false}
                    >
                        {/* Card Wrapper */}
                        <View style={styles.cardHolder}>
                            <TouchableOpacity style={styles.card1} onPress={() => handleNavigation('CGPA')}>
                                <Image
                                    style={styles.cardImage}
                                    source={require("./assets/Design-NVG.jpg")}
                                />
                                <Text style={styles.cardTitle}>CGPA</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card2} onPress={() => handleNavigation('GPA')}>
                                <Image
                                    style={styles.cardImage}
                                    source={require("./assets/Design-NVG.jpg")}
                                />
                                <Text style={styles.cardTitle}>GPA</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Card second wrapper */}
                        <View style={styles.cardHolder}>
                            <TouchableOpacity style={styles.card1} onPress={handleNavigation('GPA')}>
                                <Image
                                    style={styles.cardImage}
                                    source={require("./assets/Design-NVG.jpg")}
                                />
                                <Text style={styles.cardTitle}>Age</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card2} onPress={handleNavigation('GPA')}>
                                <Image
                                    style={styles.cardImage}
                                    source={require("./assets/Design-NVG.jpg")}
                                />
                                <Text style={styles.cardTitle}>BMI</Text>
                            </TouchableOpacity>
                        </View>
                        {/* Card third wrapper */}
                        <View style={styles.cardHolder}>
                            <TouchableOpacity style={styles.card1} onPress={handleNavigation('GPA')}>
                                <Image
                                    style={styles.cardImage}
                                    source={require("./assets/Design-NVG.jpg")}
                                />
                                <Text style={styles.cardTitle}>Tip</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={styles.card2} onPress={handleNavigation('GPA')}>
                                <Image
                                    style={styles.cardImage}
                                    source={require("./assets/Design-NVG.jpg")}
                                />
                                <Text style={styles.cardTitle}>Loan</Text>
                            </TouchableOpacity>
                        </View>
                        <View style={styles.cardHolder}>
                            <TouchableOpacity style={styles.advertisement}>
                                <Text style={styles.advertisementHeader}>Advertisement</Text>
                                <Image
                                    style={styles.cardImage}
                                    source={require("./assets/Design-NVG.jpg")}
                                />
                            </TouchableOpacity>
                        </View>
                    </ScrollView>
                </View>
            </>
        // <View style={styles.container}>
        //
        // </View>
        )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        paddingBottom: 0,
        backgroundColor: "#111827",
    },
    title: {
        color: "#fff",
        margin: 10,
        marginTop: 40,
        fontSize: 30,
        fontWeight: 700,
    },
    logo: {
        width: 90,
        height: 100,
        display: "relative",
        alignSelf: "center",
        marginTop: "30px",
        marginBottom: "20px",
        padding: "10px 0px 0px 0px",
    },
    containerBody: {
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

