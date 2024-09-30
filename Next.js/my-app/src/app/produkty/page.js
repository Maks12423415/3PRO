// Importujemy dwa komponenty, ListWithObjects do wyświetlania listy obiektów
// oraz FilterableList do wyświetlania filtrowanej listy.
import ListWithObjects from "@/components/ListWithObjects";
import FilterableList from "@/components/FilterableList";

// Tworzymy pustą tablicę produktów
const products = [];

// Wypełniamy tablicę obiektami produktowymi, każdy produkt ma nazwę i wartość
for (let i = 0; i < 8; ++i) {
  products.push({ name: `Product ${i + 1}`, value: `Value ${i + 1}` });
}

// Tablica z owocami, którą przekażemy do komponentu FilterableList
const filterableArray = [
  "Apple",
  "Banana",
  "Mango",
  "Orange",
  "Pineapple",
  "Kiwi",
  "Strawberry",
  "Blueberry",
  "Grapefruit",
  "Pomegranate",
  "Watermelon",
  "Peach",
];

// Eksportujemy domyślną funkcję strony Produkty
export default function Produkty() {
  return (
    <>
      {/* Wywołujemy komponent ListWithObjects z przekazaniem tablicy products */}
      <ListWithObjects items={products} />

      {/* Wywołujemy komponent FilterableList z przekazaniem tablicy owoców */}
      <FilterableList items={filterableArray} />
    </>
  );
}
