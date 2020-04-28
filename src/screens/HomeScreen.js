import React, { useState, useEffect } from "react";
import { Text, StyleSheet, SafeAreaView } from "react-native";
import Searchbar from "../components/Searchbar";
import useResults from "../components/useResults";
import RestuarantsList from "../components/RestuarantsList";
import { ScrollView } from "react-native-gesture-handler";

const HomeScreen = ({ navigation }) => {
  const [searchText, setSearchText] = useState("");
  const [isVisible, setVisible] = useState(false);
  const [
    makeRequest,
    isError,
    results,
    total,
    costEffectiveResults,
    pricerResults,
    spenderResults,
  ] = useResults();

  const clearSearch = () => {
    setSearchText("");
    setVisible(false);
    makeRequest("pasta");
  };

  const setText = (text) => {
    setSearchText(text);
    setVisible(true);
  };

  let message;
  if (isError) {
    message = <Text style={styles.total}> Something went wrong!!! </Text>;
  } else {
    message = (
      <Text style={styles.total}> We found {total} results for you!!! </Text>
    );
  }

  return (
    <ScrollView>
      <SafeAreaView style={styles.container}>
        <Searchbar
          onSearchChange={setText}
          onSubmit={() => makeRequest(searchText)}
          text={searchText}
          onClear={clearSearch}
          isVisible={isVisible}
        />
        {message}

        <RestuarantsList title="Cost Effective" data={costEffectiveResults} />
        <RestuarantsList title="Bit Pricier" data={pricerResults} />
        <RestuarantsList title="Big Spender" data={spenderResults} />
      </SafeAreaView>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  total: {
    fontSize: 16,
    textAlign: "center",
    fontStyle: "italic",
    fontWeight: "500",
    marginTop: 10,
  },
});

export default HomeScreen;
