"use client";
import { useState } from "react";

export default function Licznik() {
  const [licznik, setLicznik] = useState(0);

  function handleLicznik() {
    setLicznik(licznik + 1);
  }

  return (
    <div className="flex justify-center items-center gap-5">
      <button onClick={handleLicznik}>Zwiększ licznik</button>
      <h1 className="p-4 border-2 ">{licznik}</h1>
    </div>
  );
}
