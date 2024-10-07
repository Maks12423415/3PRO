"use client";
import { useState, useEffect } from "react";
import Country from "@/components/Country";

export default function RestCountries() {
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const dataJSON = await response.json();
        setCountries(dataJSON);
      } catch (error) {
        console.log(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center">
      <h1>{loading && "Loading..."}</h1>
      <h1>{error && "Nie udało się pobrać danych"}</h1>
      {countries &&
        countries.map((kraj, index) => <Country key={index} kraj={kraj} />)}
    </div>
  );
}
