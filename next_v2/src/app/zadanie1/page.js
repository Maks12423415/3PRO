"use client";
import { useState } from "react";

export default function Zadanie1() {
  // Stan przechowujący aktualny status ("start" lub "stop")
  const [status, setStatus] = useState("start");

  // Funkcja zmieniająca status między "start" a "stop"
  function handleStatus() {
    if (status == "stop") setStatus("start");
    else setStatus("stop");
  }

  return (
    <>
      {/* Przycisk do zmiany statusu */}
      <button onClick={handleStatus}>Zmien status</button>

      {/* Wyświetlanie aktualnego statusu */}
      <h1>{status}</h1>
    </>
  );
}
