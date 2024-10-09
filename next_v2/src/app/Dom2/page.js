"use client";
import { useState, useEffect } from "react";

export default function UpdateTitle() {
  const [input, setInput] = useState("");

  // useEffect, który zmienia tytuł strony na podstawie wprowadzonej liczby
  useEffect(() => {
    document.title = `${input}`;
  }, [input]); // Efekt zostanie uruchomiony przy każdej zmianie input

  return (
    <div>
      <input
        className="text-red-500"
        value={input}
        type="number"
        onChange={(e) => setInput(e.target.value)}
      />
    </div>
  );
}
