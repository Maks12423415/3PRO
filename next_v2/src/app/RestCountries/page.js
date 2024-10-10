"use client";
import Country from "@/components/Country";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function RestCountries() {
  // Stany dla danych, błędu i ładowania
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  // Pobieranie danych z API Rest Countries
  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("https://restcountries.com/v3.1/all");
        const dataJson = await response.json();
        setData(dataJson); // Ustawianie pobranych danych
      } catch (error) {
        console.log(error);
        setError(true); // Obsługa błędu
      } finally {
        setLoading(false); // Ustawienie stanu po załadowaniu danych
      }
    };
    getData();
  }, []);

  return (
    <div className="flex flex-wrap gap-2 w-full h-screen justify-center items-center">
      {/* Wyświetlanie komunikatu ładowania lub błędu */}
      <h1>{loading && "Loading..."}</h1>
      <h1>{error && "Nie udało się pobrać danych"}</h1>

      {/* Mapowanie danych o krajach na komponenty */}
      {data && data.map((kraj, index) => 
      <Link key={index} href={`/RestCountries/${kraj.cca2}`} >
      <Country key={index} kraj={kraj} />
      </Link>)}
    </div>
  );
}
