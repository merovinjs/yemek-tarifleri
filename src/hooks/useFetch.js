import { useEffect } from "react";
import { useState } from "react";

export const useFetch = (url, method = "GET") => {
  const [isLoading, setIsloading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [options, setOptions] = useState(null);

  const postData = async (data) => {
    setOptions({
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
  };

  useEffect(() => {
    const fetchData = async (options) => {
      setIsloading(true);
      try {
        const response = await fetch(url, { ...options });
        if (!response.ok) {
          throw new Error(response.statusText);
        }
        const data = await response.json();
        setIsloading(false);
        setData(data);
      } catch (err) {
        setIsloading(false);
        setError(`${err}`);
        console.log(err);
      }
    };
    if (method === "GET") {
      fetchData();
    }
    if (method === "POST" && options) {
      fetchData(options);
    }
  }, [url, options, method]);
  return { data, isLoading, error, postData };
};
