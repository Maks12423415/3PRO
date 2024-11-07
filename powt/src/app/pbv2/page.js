"use client";

import { useState, useEffect } from "react";
import PocketBase from "pocketbase"; // Import biblioteki do komunikacji z PocketBase
import CarList from "src/components/CarList"; // Komponent do wyświetlania listy samochodów
import AddCarForm from "src/components/AddCarForm"; // Komponent do dodawania nowych samochodów

export default function DB() {
  // Stan przechowujący dane o samochodach, zdjęcie i dane nowego samochodu
  const [data, setData] = useState([]);
  const [zdjecie, setZdjecie] = useState(null);
  const [dane, setDane] = useState({ Marka: "", Model: "", Zdj: "" });

  // Połączenie z bazą danych PocketBase
  const pb = new PocketBase("http://172.16.15.149:8080"); //http://172.16.15.149:8080, dom: http://192.168.89.140:8080

  // Hook useEffect do pobierania danych z PocketBase przy pierwszym renderowaniu
  useEffect(() => {
    const getData = async () => {
      try {
        const records = await pb
          .collection("cars")
          .getFullList({ sort: "-created" }); // Pobiera wszystkie rekordy samochodów posortowane po dacie
        setData(records); // Ustawia dane w stanie
      } catch (error) {
        console.log(error); // Obsługuje błędy
      }
    };
    getData();
  }, []); // Pusty array oznacza, że efekt wykona się tylko raz, po pierwszym renderze

  // Funkcja zapisująca nowy samochód do bazy danych
  const save = async () => {
    const form = new FormData();
    form.append("Model", dane.Model);
    form.append("Marka", dane.Marka);
    form.append("Zdj", zdjecie); // Dodanie zdjęcia samochodu

    try {
      const record = await pb.collection("cars").create(form); // Tworzenie nowego rekordu
      setData((prevData) => [record, ...prevData]); // Dodanie nowego samochodu na początek listy
    } catch (error) {
      console.log("Error saving data:", error); // Obsługa błędów
    }
  };

  // Funkcja usuwająca samochód z bazy danych
  const kill = async (id) => {
    try {
      await pb.collection("cars").delete(id); // Usuwanie samochodu
      setData((prevData) => prevData.filter((item) => item.id !== id)); // Usunięcie samochodu z listy
    } catch (error) {
      console.log(error); // Obsługa błędów
    }
  };

  // Funkcja aktualizująca samochód w stanie
  const updateItem = (updatedCar) => {
    setData(
      (prevData) =>
        prevData.map((item) => (item.id === updatedCar.id ? updatedCar : item)) // Zamiana zaktualizowanego samochodu w stanie
    );
  };

  // Funkcja zmieniająca status samochodu (np. włączony/wyłączony)
  const toggleStatus = async (car) => {
    try {
      const updatedCar = { ...car, Status: !car.Status }; // Zmiana statusu samochodu
      await pb.collection("cars").update(car.id, updatedCar); // Aktualizacja statusu w bazie danych
      setData(
        (prevData) =>
          prevData.map((item) => (item.id === car.id ? updatedCar : item)) // Aktualizacja statusu samochodu w stanie
      );
    } catch (error) {
      console.log("Error updating status:", error); // Obsługuje błędy
    }
  };

  // Funkcja aktualizująca dane samochodu
  const handleUpdate = async (updatedCar) => {
    const form = new FormData();
    form.append("Model", updatedCar.Model);
    form.append("Marka", updatedCar.Marka);
    if (updatedCar.Zdj instanceof File) {
      form.append("Zdj", updatedCar.Zdj); // Dodanie nowego zdjęcia, jeśli zostało wybrane
    }

    try {
      const updatedRecord = await pb
        .collection("cars")
        .update(updatedCar.id, form); // Aktualizacja rekordu w bazie danych
      setData((prevData) =>
        prevData.map(
          (item) => (item.id === updatedRecord.id ? updatedRecord : item) // Zaktualizowanie samochodu w stanie
        )
      );
    } catch (error) {
      console.log("Error updating data:", error); // Obsługuje błędy
    }
  };

  return (
    <div className="w-full flex h-screen gap-10 flex-wrap ">
      <div className="flex items-center">
        {/* Komponent wyświetlający listę samochodów */}
        <CarList
          data={data}
          onDelete={kill}
          onUpdate={handleUpdate}
          onToggleStatus={toggleStatus}
        />
        {/* Komponent formularza do dodawania samochodów */}
        <AddCarForm save={save} setZdjecie={setZdjecie} setDane={setDane} />
      </div>
    </div>
  );
}
