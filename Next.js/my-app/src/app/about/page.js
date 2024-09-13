// Importujemy komponent ItemList, który prawdopodobnie renderuje listę elementów
import ItemList from "../../components/ItemList";

// Importujemy komponent Link z Next.js do nawigacji między stronami
import Link from "next/link";

// Eksportujemy funkcję AboutPage jako domyślny eksport tego modułu
export default function AboutPage() {
  // Definiujemy tablicę z hobby
  const hobbies = ["Programowanie", "Czytanie książek", "Siłownia"];

  // Renderujemy stronę o mnie
  return (
    <div>
      <h1>O mnie</h1>
      <h2>Moje hobby:</h2>
      {/* Wywołujemy komponent ItemList, przekazując mu tablicę hobby */}
      <ItemList items={hobbies} />
      {/* Link do strony głównej, który pozwala na nawigację z powrotem */}
      <Link href={"/"}>Ulubione filmy</Link>
    </div>
  );
}
