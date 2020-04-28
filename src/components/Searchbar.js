import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import { Feather } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const Searchbar = ({ onSearchChange, onSubmit, text, onClear, isVisible }) => {
  return (
    <View style={styles.container}>
      <Feather name="search" size={25} color="black" style={{ padding: 0 }} />
      <TextInput
        style={styles.input}
        autoCorrect={false}
        autoCapitalize="none"
        placeholder="Search Restuarants"
        onChangeText={onSearchChange}
        value={text}
        onEndEditing={onSubmit}
      />
      {isVisible && (
        <MaterialIcons name="clear" color="black" size={25} onPress={onClear} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#d3d3d3",
    padding: 10,
    marginHorizontal: 10,
    flexDirection: "row",
    borderRadius: 25,
  },
  input: {
    flex: 1,
    paddingLeft: 10,
    fontSize: 16,
  },
});

export default Searchbar;
