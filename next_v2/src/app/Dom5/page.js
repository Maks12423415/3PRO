"use client";
import { useState } from "react";

export default function Dom5() {
  const [data, setData] = useState(null); // Zmieniamy na null, aby łatwiej było obsługiwać dane
  const [url, setUrl] = useState("");
  const [error, setError] = useState(null);

  // Funkcja do pobierania danych
  const getData = async () => {
    try {
      const res = await fetch(url);

      const dataJSON = await res.json();
      setData(dataJSON);
      setError(null); // Resetujemy błąd, jeśli wszystko poszło dobrze
    } catch (error) {
      console.log(error);
      setError(error.message); // Ustawiamy wiadomość błędu
    }
  };

  // Obsługa wysyłania formularza
  const handleSubmit = (e) => {
    e.preventDefault(); // Zapobiegamy domyślnemu zachowaniu formularza
    getData(); // Wywołujemy funkcję pobierania danych
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          className={"text-red-500"}
          type={"text"}
          onChange={(e) => setUrl(e.target.value)}
          placeholder="Wprowadź URL"
        />
        <button type="submit">Wyślij</button>
      </form>

      {/* Wyświetlanie błędu, jeśli wystąpił */}
      {error && <p className="text-red-500">{error}</p>}

      {/* Wyświetlanie danych, jeśli zostały pobrane */}
      {data && (
        <div>
          <h2>Pobrane dane:</h2>
          <pre>{JSON.stringify(data, null, 2)}</pre>{" "}
          {/* Wyświetlanie danych w formacie JSON */}
        </div>
      )}
    </div>
  );
}
