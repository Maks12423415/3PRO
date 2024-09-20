"use client"; // Oznaczamy komponent jako Client Component, aby mógł korzystać z hooków (np. useState)

import React, { useState } from "react"; // Importujemy React i hook useState do zarządzania stanem komponentu

function SimpleForm({ label, placeholder }) {
  // Używamy destrukturyzacji propsów, aby otrzymać label i placeholder jako argumenty funkcji

  const [inputValue, setInputValue] = useState("");
  // Definiujemy stan dla wartości inputu. Początkowa wartość to pusty string.
  // inputValue to aktualna wartość, setInputValue to funkcja do jej aktualizacji.

  const handleSubmit = (e) => {
    e.preventDefault(); // Zapobiega domyślnemu przeładowaniu strony po wysłaniu formularza
    console.log("Wprowadzono:", inputValue); // Wyświetla aktualną wartość inputu w konsoli
  };

  return (
    // Zwracamy formularz HTML, który użytkownik będzie mógł wypełnić
    <form onSubmit={handleSubmit}>
      {/* Wyświetlamy etykietę z tekstem podanym przez prop label */}
      <label>{label}</label>

      {/* Tworzymy pole tekstowe, którego wartość jest powiązana ze stanem (inputValue) */}
      <input
        type="text"
        placeholder={placeholder} // Ustawiamy placeholder z prop
        value={inputValue} // Ustawiamy wartość pola na aktualny stan (inputValue)
        onChange={(e) => setInputValue(e.target.value)}
        // Aktualizujemy stan na podstawie tego, co użytkownik wpisze (e.target.value)
      />

      {/* Przycisk, który wysyła formularz */}
      <button type="submit">Wyślij</button>
    </form>
  );
}

export default SimpleForm;
// Eksportujemy komponent SimpleForm, aby mógł być używany w innych częściach aplikacji
