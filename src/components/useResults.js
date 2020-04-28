import yelp from "../utils/yelp";
import React, { useEffect, useState } from "react";

export default () => {
  const [error, setError] = useState("");
  const [isError, setIsError] = useState(false);
  const [results, setResults] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    makeRequest("pasta");
  }, []);

  const costEffectiveResults = results.filter((result) => {
    return result.price === "$";
  });

  const pricerResults = results.filter((result) => {
    return result.price === "$$";
  });

  const spenderResults = results.filter((result) => {
    return result.price === "$$$";
  });

  const makeRequest = async (term) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50,
          term: term.length > 0 ? term : "pasta",
          location: "san jose",
        },
      });

      console.log(response.data);
      setResults(response.data.businesses);
      setTotal(response.data.total);
      setIsError(false);
    } catch (err) {
      console.log(err);
      setIsError(true);
      setError("Something went wrong!!!");
    }
  };

  return [
    makeRequest,
    isError,
    results,
    total,
    costEffectiveResults,
    pricerResults,
    spenderResults,
  ];
};
