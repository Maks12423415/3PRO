"use client";
import { useState } from "react";

export default function BgChange() {
  // Stan dla motywu tła (biały lub szary)
  const [mode, setMode] = useState("bg-white");

  // Funkcja zmieniająca kolor tła między szarym a czarnym
  function handleColor() {
    setMode(
      mode === "bg-gray-400 text-black"
        ? "bg-black text-white"
        : "bg-gray-400 text-black"
    );
  }

  return (
    <div className={`${mode} flex h-screen justify-center items-center`}>
      {/* Przycisk zmieniający motyw */}
      <button className="border-2" onClick={handleColor}>
        Zmien motyw
      </button>
    </div>
  );
}
