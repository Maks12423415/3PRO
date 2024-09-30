"use client"; // Ten komponent jest komponentem klienckim, ponieważ używa stanu

// Importujemy funkcję useState z React, aby zarządzać stanem komponentu
import { useState } from "react";

// Eksportujemy domyślną funkcję komponentu FilterableList
export default function FilterableList({ items }) {
  // Ustawiamy początkowy stan filterText jako pusty string
  const [filterText, setFilterText] = useState("");

  // Filtrujemy listę, sprawdzając, czy każdy element zawiera tekst wpisany przez użytkownika
  const filtredList = items.filter((item) =>
    item.toLowerCase().includes(filterText)
  );

  return (
    <div>
      {/* Pole tekstowe, w którym użytkownik wpisuje tekst do filtrowania */}
      <input
        type="text"
        placeholder="Filtruj..."
        // Zmieniamy stan filterText, gdy użytkownik wpisuje tekst
        onChange={(e) => setFilterText(e.target.value.toLowerCase())}
      />

      {/* Wyświetlamy przefiltrowaną listę jako listę HTML */}
      <ul>
        {/* Mapujemy filtrowane elementy, każdy element to <li> */}
        {filtredList.map((item, index) => (
          <li key={index}> {item} </li>
        ))}
      </ul>
    </div>
  );
}
