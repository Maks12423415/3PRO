"use client";
import { useState } from "react";
export default function Liczby() {
  const [odpowiedz, setOdpowiedz] = useState("Podaj liczbę:  ");

  return (
    <>
      <input
        className="text-red-500"
        type="number"
        onChange={(e) =>
          setOdpowiedz(
            e.target.value % 2 == 0
              ? "Liczba jest parzysta"
              : "Liczba jest nieparzysta"
          )
        }
      />
      <h1>{odpowiedz}</h1>
    </>
  );
}
