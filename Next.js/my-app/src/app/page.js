// Importujemy komponent Link z Next.js, który służy do nawigacji między stronami
import Link from "next/link";

// Importujemy nasz komponent ItemList, który prawdopodobnie renderuje listę elementów
import ItemList from "../components/ItemList";

// Importujemy style CSS z lokalnego pliku modułowego
import styles from "./index.module.css";

// Importujemy nasz komponent TextBlock, który znajduje się w pliku Footer.js
import TextBlock from "../components/TextBlock";

import Footer from "../components/Footer"; // Import komponentu Footer

import ImageWithText from "../components/ImageWithText";

import SimpleForm from "@/components/SimpleForm";

import ConditionalDisplay from "@/components/ConditionalDisplay";

import ListWithObjects from "@/components/ListWithObjects";

// Eksportujemy funkcję HomePage jako domyślny eksport tego modułu
export default function HomePage() {
  // Definiujemy tablicę z ulubionymi filmami
  const favoriteMovies = ["film1", "film2", "film3"];
  const imageUrl =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&s";
  const table = [
    { name: "Maks", value: 16 },
    { name: "Dawid", value: 17 },
  ];

  // Renderujemy stronę główną
  return (
    <div>
      {/* Nagłówek z klasą CSS z modułowego pliku stylów */}
      <TextBlock
        heading="Informacje o stronie"
        content="Jest to strona o mnie!"
      />
      <h2>Ulubione filmy:</h2>
      {/* Wywołujemy komponent ItemList, przekazując mu tablicę ulubionych filmów */}
      <ItemList items={favoriteMovies} />
      {/* Link do strony "about", który pozwala na nawigację do innej strony w aplikacji */}
      <Link href="/about">Moje hobby</Link> <br />
      <Link href="/contact">Kontakt</Link>
      <br />
      <Link href="/o_nas">O nas</Link>
      <ImageWithText imageUrl={imageUrl} text={"Pies"} />
      {/* Wywołujemy komponent Footer */}
      <Footer />
      <SimpleForm placeholder="Podaj imie..." value="text" label="Imie: " />
      <ConditionalDisplay isVisible={true} />
      <ListWithObjects items={table} />
      <h3>Wykonawca: Maks Samborski</h3>
    </div>
  );
}
