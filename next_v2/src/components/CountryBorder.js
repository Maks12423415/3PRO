"use client";

// Importujemy potrzebne hooki z Reacta oraz komponenty
import { useState, useEffect } from "react";
import Country from "./Country"; // Import komponentu Country do wyświetlenia szczegółów kraju
import Link from "next/link"; // Import komponentu Link do obsługi nawigacji między stronami w Next.js

export default function CountryBorder({ countrys }) {
  // Definiujemy stany dla krajów, błędu, minimalnej i maksymalnej populacji
  const [countries, setCountries] = useState(null);
  const [error, setError] = useState(false);
  const [minPopulation, setMinPopulation] = useState(0);
  const [maxPopulation, setMaxPopulation] = useState(0);

  useEffect(() => {
    // Funkcja asynchroniczna do pobrania danych o krajach
    const getData = async () => {
      try {
        const countriesData = []; // Tablica do przechowywania danych o krajach

        // Dla każdego kraju w przekazanej tablicy countrys, pobieramy dane
        for (const country of countrys) {
          const response = await fetch(
            `https://restcountries.com/v3.1/alpha/${country}`
          );
          const Json = await response.json(); // Konwertujemy odpowiedź na JSON
          countriesData.push(Json[0]); // Dodajemy dane kraju do tablicy countriesData
        }

        // Ustawiamy minimalną populację na podstawie pobranych danych
        setMinPopulation(
          Math.min(...countriesData.map((country) => country.population))
        );

        // Ustawiamy maksymalną populację na podstawie pobranych danych
        setMaxPopulation(
          Math.max(...countriesData.map((country) => country.population))
        );

        // Ustawiamy stan countries na pobrane dane
        setCountries(countriesData);
      } catch (error) {
        // W przypadku błędu ustawiamy stan błędu na true i logujemy błąd
        setError(true);
        console.log(error);
      }
    };

    // Wywołanie funkcji pobierającej dane
    getData();
  }, [countrys]); // Efekt będzie się wywoływał za każdym razem, gdy countrys się zmieni

  return (
    <>
      {/* Wyświetlamy komunikat, jeśli nie udało się pobrać danych */}
      {error && <h1>Nie udało się pobrać danych</h1>}

      {/* Sprawdzamy, czy dane o krajach zostały pobrane i są dostępne */}
      {countries != null &&
        countries.map((border, index) => (
          // Tworzymy link do szczegółowej strony o każdym kraju
          <Link
            key={index}
            href={`/RestCountries/${border.cca2}`} // Przekierowanie do strony kraju na podstawie jego kodu cca2
            className={`${
              minPopulation === border.population // Jeśli populacja kraju jest minimalna, dodajemy specjalną klasę
                ? "border-red-500 border-5"
                : ""
            } ${
              maxPopulation === border.population // Jeśli populacja kraju jest maksymalna, dodajemy inną klasę
                ? "border-green-500 border-5"
                : ""
            }`}
          >
            {/* Wyświetlamy komponent Country z przekazaniem danych o kraju */}
            <Country kraj={border} />
          </Link>
        ))}
    </>
  );
}
