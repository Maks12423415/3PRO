// Eksportujemy funkcję ItemList jako domyślny eksport tego modułu
export default function ItemList({ items }) {
  // Renderujemy listę elementów
  return (
    <ul>
      {/* Iterujemy przez tablicę items i renderujemy każdy element jako <li> */}
      {items.map((item, index) => (
        // Każdemu elementowi przypisujemy unikalny klucz (index w tym przypadku)
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}
