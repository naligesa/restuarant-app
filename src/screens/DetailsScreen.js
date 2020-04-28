import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import yelp from "../utils/yelp";
import { FlatList } from "react-native-gesture-handler";

const DetailsScreen = ({ navigation, route }) => {
  const { id } = route.params;
  const [images, setImages] = useState([]);

  useEffect(() => {
    sendRequest();
  }, []);

  const sendRequest = async () => {
    try {
      const response = await yelp.get(`/${id}`);
      setImages(response.data.photos);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={images}
        keyExtractor={(item, index) => "Key " + index}
        renderItem={({ item }) => (
          <View>
            <Image
              style={{ width: 200, height: 200 }}
              source={{ uri: item }}
              resizeMode="cover"
            />
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 10,
  },
});

export default DetailsScreen;
