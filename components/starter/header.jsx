import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Cgpa from '../pages/cgpa.jsx'
import Gpa from '../pages/gpa.jsx'


export default function Header() {
  const handleCard1Press = () => {
    return <Stack.Screen name="Cgpa" component={Cgpa} />
  };
  const handleCard2Press = () => {
        return <Stack.Screen name="Gpa" component={Gpa} />
  };
  return (
    <NavigationContainer>
      <View style={styles.container}>
         <TouchableOpacity style={styles.card1} onPress={handleCard1Press}>
        <Image style={styles.cardImage} source={require('../../assets/')} />
        <Text style={styles.cardTitle}>Card 1</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.card2} onPress={handleCard2Press}>
        <Image style={styles.cardImage} source={{ uri: 'https://via.placeholder.com/350x150' }} />
        <Text style={styles.cardTitle}>Card 2</Text>
      </TouchableOpacity>
      </View>
      </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    top: 0,
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  card1: {
    width: '45%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  card2: {
    width: '45%',
    height: 200,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  cardImage: {
    width: '100%',
    height: '70%',
    resizeMode: 'cover',
    borderRadius: 10,
  },
  cardTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 10,
  },
});
