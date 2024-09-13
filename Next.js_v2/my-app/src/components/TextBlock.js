// Eksportujemy funkcję TextBlock jako domyślny eksport tego modułu
export default function TextBlock({ heading, content }) {
  // Renderujemy komponent z nagłówkiem i treścią
  return (
    <div>
      {/* Nagłówek */}
      <h2>{heading}</h2>
      {/* Treść */}
      <p>{content}</p>
    </div>
  );
}
