"use client";
import { useEffect, useState } from "react";
import Country from "@/components/Country";
export default function ReastCountries() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch("https://restcountries.com/v3.1/all");
        const dataJSON = await res.json();
        setData(dataJSON);
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
    <div className="flex flex-wrap gap-2 w-full h-screen justify-center items-center">
      <h1>{loading && "Loading..."}</h1>
      <h1>{error && "Nie udało się pobrać danych"}</h1>
      {data &&
        data.map((country, index) => <Country key={index} country={country} />)}
    </div>
  );
}
