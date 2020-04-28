import React, { useState } from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";
import Restuarant from "./Restuarant";

const RestuarantsList = ({ title, data }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}> {title} </Text>
      <FlatList
        horizontal
        showsHorizontalScrollIndicator={false}
        data={data}
        keyExtractor={(item, index) => "Key " + index}
        renderItem={({ item }) => (
          <Restuarant
            src={item.image_url}
            name={item.name}
            rating={item.rating}
            review={item.review_count}
            id={item.id}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
  title: {
    fontWeight: "700",
    fontSize: 16,
    fontStyle: "italic",
    marginLeft: 10,
    marginVertical: 5,
  },
});

export default RestuarantsList;
