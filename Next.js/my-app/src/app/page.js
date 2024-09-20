// Importy z Next.js i komponentów z aplikacji
import Link from "next/link"; // Komponent Link do nawigacji między stronami

// Importy komponentów z lokalnych plików
import ItemList from "../components/ItemList";
import TextBlock from "../components/TextBlock";
import Footer from "../components/Footer";
import ImageWithText from "../components/ImageWithText";
import SimpleForm from "@/components/SimpleForm";
import ConditionalDisplay from "@/components/ConditionalDisplay";
import ListWithObjects from "@/components/ListWithObjects";

// Importy stylów CSS
import styles from "./index.module.css"; // Stylowanie dla tego komponentu

// Eksportujemy funkcję HomePage jako domyślny eksport tego modułu
export default function HomePage() {
  // Definiujemy tablicę z danymi do komponentów
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
      {/* Sekcja z komponentem TextBlock, który pokazuje nagłówek i treść */}
      <TextBlock
        heading="Informacje o stronie"
        content="Jest to strona o mnie!"
      />

      {/* Wyświetlamy listę ulubionych filmów */}
      <h2>Ulubione filmy:</h2>
      <ItemList items={favoriteMovies} />

      {/* Sekcja nawigacji z linkami do innych stron */}
      <nav>
        <Link href="/about">Moje hobby</Link> <br />
        <Link href="/contact">Kontakt</Link> <br />
        <Link href="/o_nas">O nas</Link>
      </nav>

      {/* Wyświetlenie obrazka z tekstem przy użyciu komponentu ImageWithText */}
      <ImageWithText imageUrl={imageUrl} text="Pies" />

      {/* Komponent formularza SimpleForm */}
      <SimpleForm placeholder="Podaj imię..." label="Imię: " />

      {/* Komponent ConditionalDisplay z warunkowym renderowaniem */}
      <ConditionalDisplay isVisible={true} />

      {/* Wyświetlenie listy z obiektami */}
      <ListWithObjects items={table} />

      {/* Sekcja z komponentem Footer */}
      <Footer />

      {/* Dodanie autora strony */}
      <h3>Wykonawca: Maks Samborski</h3>
    </div>
  );
}
