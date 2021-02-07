import { useState, useEffect } from "react";

export const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const products = await response.json();
    setData(products);
    setLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return { loading, data };
};
