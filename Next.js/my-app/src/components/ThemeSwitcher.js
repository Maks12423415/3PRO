// "use client" wskazuje, że komponent jest renderowany po stronie klienta w Next.js
"use client";

import { useState, useEffect } from "react";

// Definiujemy komponent BodyThemeSwitcher, który przyjmuje funkcję onThemeChange jako props
export default function BodyThemeSwitcher({ onThemeChange }) {
  // Używamy useState do ustawienia początkowego stanu motywu na "light"
  const [theme, setTheme] = useState("light");

  // useEffect jest używany do sprawdzenia, czy w localStorage zapisany jest motyw.
  // Jeśli tak, ustawiamy go jako aktywny motyw.
  // Ten efekt wykonuje się tylko raz, po pierwszym renderze, ponieważ przekazujemy pustą tablicę [].
  useEffect(() => {
    const storedTheme = localStorage.getItem("activeTheme") || "light";
    setTheme(storedTheme);
  }, []);

  // Funkcja toggleTheme zmienia motyw pomiędzy "dark" a "light".
  const toggleTheme = () => {
    // Sprawdzamy, jaki jest obecny motyw i zmieniamy go na przeciwny
    const newTheme = theme === "dark" ? "light" : "dark";

    // Ustawiamy nowy motyw w stanie komponentu
    setTheme(newTheme);

    // Wywołujemy funkcję onThemeChange, która przekazuje nowy motyw do komponentu nadrzędnego
    onThemeChange(newTheme);

    // Zapisujemy nowy motyw w localStorage, aby pamiętać preferencje użytkownika
    localStorage.setItem("activeTheme", newTheme);
    console.log("Nowy motyw:", newTheme);
  };

  return (
    <div>
      {/* Przycisk do zmiany motywu. Tekst zmienia się dynamicznie w zależności od bieżącego motywu */}
      <button onClick={toggleTheme}>
        Zmień motyw na {theme === "dark" ? "jasny" : "ciemny"}
      </button>
    </div>
  );
}
