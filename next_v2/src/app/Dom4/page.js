"use client";
import { useState } from "react";

export default function UpdateUserForm() {
  // Stan początkowy z danymi użytkownika
  const [user, setUser] = useState({
    firstName: "Jan",
    lastName: "Kowalski",
    email: "jan.kowalski@example.com",
    phone: "123-456-789",
  });

  // Tablica do przechowywania historii aktualizacji
  const [userHistory, setUserHistory] = useState([]);

  // Obsługa zmian w polach formularza
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prevUser) => ({
      ...prevUser, // Użycie operatora spread do zachowania pozostałych danych
      [name]: value, // Aktualizacja wybranej właściwości
    }));
  };

  // Obsługa wysyłania formularza
  const handleSubmit = (e) => {
    e.preventDefault();
    // Dodanie bieżących danych użytkownika do historii
    setUserHistory((prevHistory) => [...prevHistory, user]);
    console.log("Zaktualizowane dane użytkownika:", user);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <form onSubmit={handleSubmit} className="space-x-5">
        <input
          className="text-red-500"
          type="text"
          name="firstName"
          value={user.firstName}
          placeholder="Imię..."
          onChange={handleChange}
        />
        <input
          className="text-red-500"
          type="text"
          name="lastName"
          value={user.lastName}
          placeholder="Nazwisko..."
          onChange={handleChange}
        />
        <input
          className="text-red-500"
          type="email"
          name="email"
          value={user.email}
          placeholder="Email..."
          onChange={handleChange}
        />
        <input
          className="text-red-500"
          type="tel"
          name="phone"
          value={user.phone}
          placeholder="Numer telefonu..."
          onChange={handleChange}
        />
        <button type="submit">Wyślij</button>
      </form>

      {/* Wyświetlanie bieżących zaktualizowanych danych */}
      <div className="mt-5">
        <h2>Ostatnia aktualizacja:</h2>
        <p>Imię: {user.firstName}</p>
        <p>Nazwisko: {user.lastName}</p>
        <p>Email: {user.email}</p>
        <p>Telefon: {user.phone}</p>
      </div>

      {/* Wyświetlanie historii aktualizacji */}
      <div className="mt-5">
        <h2>Historia aktualizacji:</h2>
        {userHistory.map((historyItem, index) => (
          <div key={index} className="mb-5 border p-3">
            <p>Imię: {historyItem.firstName}</p>
            <p>Nazwisko: {historyItem.lastName}</p>
            <p>Email: {historyItem.email}</p>
            <p>Telefon: {historyItem.phone}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
