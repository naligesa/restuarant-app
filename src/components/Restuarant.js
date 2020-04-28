import React, { useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";

const Restuarant = ({ src, name, rating, review, id }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() =>
        navigation.navigate("Details", {
          id: id,
        })
      }
    >
      <Image style={styles.image} source={{ uri: src }} />
      <Text style={styles.name} numberOfLines={1} ellipsizeMode="tail">
        {name}
      </Text>
      <View style={styles.ratingContainer}>
        <Text style={styles.rating}>{rating} stars,</Text>
        <Text style={styles.review}> {review} reviews</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
  ratingContainer: {
    flexDirection: "row",
  },
  image: {
    width: 250,
    height: 180,
    resizeMode: "cover",
  },
  name: {
    width: 250,
    fontWeight: "bold",
    fontSize: 16,
    fontStyle: "italic",
    marginTop: 5,
  },
  rating: {
    fontSize: 15,
    color: "#696969",
  },
  review: {
    fontSize: 15,
    color: "#696969",
  },
});

export default Restuarant;
