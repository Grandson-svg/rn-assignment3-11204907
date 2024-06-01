import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

const Category = ({ title, tasks, image }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.tasks}>{tasks}10 Tasks</Text>
      <Image source={image} style={styles.image} />
      
      
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 35,
    backgroundColor: "#fff",
    borderRadius: 10,
    margin:5,
    elevation: 3,
  },
  image: {
    width: 100,
    height:110,
  },
  title: {
    fontSize: 7,
    marginVertical: 8,
    right: 25
  },
  tasks: {
    fontSize: 5,
    color: "#888",
    right: 25,
    bottom: 10
  },
});

export default Category;