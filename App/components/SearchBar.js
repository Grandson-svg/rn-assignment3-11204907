// src/components/Header.js
import React from 'react';
import { View, Text, StyleSheet, Image, Lato, ScreeenLeft} from 'react-native';

const SearchBar = ({ name, taskCount }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Hello , Devs {name}</Text>
      <Text style={styles.taskCount}>12 tasks today</Text>
      <Image source={require('../assets/drake.png')} style={styles.icon} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F7F0E8',
    bottom: 5,
  
  },
  greeting: {
    fontSize: 17,
    fontFamily: Lato,
    lineHeight: 34,
  },
  taskCount: {
    fontSize: 10,
    color: '#000000',
    width: 100,
    height: 21,
    right: 195,
    fontfamily: Lato,
    top: 20,
 
  },
  icon: {
    width: 50,
    height: 52,
  },
});

export default SearchBar;