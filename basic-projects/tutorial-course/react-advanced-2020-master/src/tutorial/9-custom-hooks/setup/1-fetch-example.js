import React, { useState, useEffect } from "react";
import { useFetch } from "./2-useFetch";

const url = "https://course-api.com/javascript-store-products";

const Example = () => {
  const { loading, data } = useFetch(url);
  console.log(data);
  return (
    <div>
      <h2>{loading ? "loading..." : "data"}</h2>
    </div>
  );
};

export default Example;
