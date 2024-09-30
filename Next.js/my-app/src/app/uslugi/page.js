// Importujemy komponent FilterableList, aby wyświetlić filtrowaną listę
import FilterableList from "@/components/FilterableList";

// Tablica z usługami, którą przekażemy do komponentu FilterableList
const array = ["Charger", "Table", "Surprise"];

// Eksportujemy domyślną funkcję strony Uslugi
export default function Uslugi() {
  return (
    <>
      {/* Wywołujemy komponent FilterableList z przekazaniem tablicy usług */}
      <FilterableList items={array} />
    </>
  );
}
