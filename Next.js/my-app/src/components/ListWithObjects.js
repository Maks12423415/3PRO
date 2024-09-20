function ListWithObjects({ items }) {
  // Komponent ListWithObjects przyjmuje props 'items', który jest tablicą obiektów

  return (
    <ul>
      {/* Mapujemy przez tablicę 'items', aby wygenerować elementy listy */}
      {items.map((item, index) => (
        // Używamy 'index' jako klucz dla każdego elementu listy (lepiej używać unikalnych identyfikatorów, jeśli dostępne)
        <li key={index}>
          {/* Wyświetlamy właściwości 'name' i 'value' z obiektu 'item' */}
          {item.name}: {item.value}
        </li>
      ))}
    </ul>
  );
}

export default ListWithObjects;
// Eksportujemy komponent, aby mógł być użyty w innych częściach aplikacji
