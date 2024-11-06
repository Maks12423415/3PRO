"use client"; // Określa, że kod jest przeznaczony do wykonywania po stronie klienta
import { useState } from "react"; // Import hooka do zarządzania stanem komponentu
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"; // Import komponentów UI dla karty
import Image from "next/image"; // Komponent Next.js do wyświetlania obrazków
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar"; // Import komponentów dla menu
import { Trash2, Pencil, CircleEllipsis, Save } from "lucide-react"; // Ikony do użycia w menu
import { Input } from "@/components/ui/input"; // Komponent input
import { Button } from "@/components/ui/button"; // Komponent przycisku
import { Switch } from "@/components/ui/switch"; // Komponent przełącznika (Switch)
import PocketBase from "pocketbase"; // Biblioteka do integracji z PocketBase

export default function CarCard({ car, onDelete, onUpdate, onToggleStatus }) {
  // Stan przechowujący tryb edycji oraz dane samochodu
  const [isEditing, setIsEditing] = useState(false); // Przełącznik trybu edycji
  const [editedCar, setEditedCar] = useState({ ...car }); // Przechowuje dane samochodu w trybie edycji
  const pb = new PocketBase("http://192.168.89.140:8080"); // Tworzenie instancji PocketBase do komunikacji z backendem

  // Funkcja zapisująca zaktualizowane dane samochodu
  const handleSave = () => {
    onUpdate(editedCar); // Wywołanie funkcji przekazanej z rodzica w celu zapisania zmian
    setIsEditing(false); // Wyłączenie trybu edycji
  };

  return (
    <Card key={car.id} className="w-[300px] h-[400px]">
      {" "}
      {/* Karta samochodu */}
      <CardHeader>
        <CardTitle>
          {/* Jeśli w trybie edycji, umożliwia zmianę zdjęcia samochodu */}
          {isEditing ? (
            <Input
              type="file"
              onChange={
                (e) =>
                  setEditedCar((prev) => ({ ...prev, Zdj: e.target.files[0] })) // Zaktualizowanie zdjęcia w stanie
              }
            />
          ) : (
            // Wyświetlanie zdjęcia samochodu
            <Image
              src={pb.files.getUrl(car, car.Zdj)} // Pobieranie URL zdjęcia z PocketBase
              alt={car.Model} // Alternatywny tekst dla obrazka
              width={300}
              height={200}
              className="w-[300px] h-[200px]" // Stylowanie obrazka
            />
          )}
        </CardTitle>
        <CardDescription>
          {/* Jeśli w trybie edycji, umożliwia edytowanie modelu samochodu */}
          {isEditing ? (
            <Input
              value={editedCar.Model} // Ustawianie aktualnej wartości modelu
              onChange={
                (e) =>
                  setEditedCar((prev) => ({ ...prev, Model: e.target.value })) // Zaktualizowanie modelu w stanie
              }
              placeholder="Model..."
            />
          ) : (
            car.Model // Wyświetlanie modelu, jeśli nie jest w trybie edycji
          )}
        </CardDescription>
      </CardHeader>
      <CardContent>
        {/* Jeśli w trybie edycji, umożliwia edytowanie marki samochodu */}
        {isEditing ? (
          <Input
            value={editedCar.Marka} // Ustawianie aktualnej wartości marki
            onChange={
              (e) =>
                setEditedCar((prev) => ({ ...prev, Marka: e.target.value })) // Zaktualizowanie marki w stanie
            }
            placeholder="Marka..."
          />
        ) : (
          <p>{car.Marka}</p> // Wyświetlanie marki, jeśli nie jest w trybie edycji
        )}
      </CardContent>
      <CardFooter className="justify-between">
        {" "}
        {/* Stopka karty */}
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>
              <CircleEllipsis /> {/* Ikona menu */}
            </MenubarTrigger>
            <MenubarContent>
              {/* Opcje menu */}
              <MenubarItem onClick={() => setIsEditing(!isEditing)}>
                {/* Przełącza tryb edycji (Edytuj / Anuluj) */}
                {isEditing ? "Cancel" : "Edit"} <Pencil />
              </MenubarItem>
              {/* Jeśli jesteśmy w trybie edycji, pojawia się opcja zapisania */}
              {isEditing && (
                <MenubarItem onClick={handleSave}>
                  Save <Save /> {/* Ikona zapisu */}
                </MenubarItem>
              )}
              {/* Opcja usunięcia samochodu */}
              <MenubarItem onClick={() => onDelete(car.id)}>
                Delete <Trash2 /> {/* Ikona usuwania */}
              </MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
        {/* Przełącznik statusu samochodu */}
        <Switch
          onClick={() => onToggleStatus(car)} // Zmiana statusu samochodu
          checked={car.Status ?? false} // Ustawienie wartości przełącznika na podstawie statusu
        />
      </CardFooter>
    </Card>
  );
}
