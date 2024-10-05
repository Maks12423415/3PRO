"use client"; // Użycie hooków wymaga, aby strona była klientowa (client-side)
import { useState } from "react";

export default function Strona1() {
  // Stan dla licznika
  const [licznik, setLicznik] = useState(0);

  // Funkcja do zwiększania licznika o 1
  function handleClick() {
    setLicznik(licznik + 1);
  }

  // Funkcja do zmniejszania licznika o 1
  function dishandleClick() {
    setLicznik(licznik - 1);
  }

  return (
    <div className="gap-10 space-x-4">
      <h1>Hello World</h1>

      {/* Przycisk zwiększający licznik */}
      <button className="text-blue-500" onClick={handleClick}>
        Dodaj 1
      </button>

      {/* Przycisk zmniejszający licznik */}
      <button className="text-red-500" onClick={dishandleClick}>
        Odejmij 1
      </button>

      {/* Wyświetlanie aktualnej wartości licznika */}
      <p className="flex justify-center items-center border-2 w-10">
        {licznik}
      </p>
    </div>
  );
}
