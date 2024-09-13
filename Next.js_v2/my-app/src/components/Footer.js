// Importujemy nasz komponent TextBlock z lokalnego pliku
import TextBlock from "./TextBlock";

// Eksportujemy funkcję Footer jako domyślny eksport tego modułu
export default function Footer() {
  // Renderujemy komponent Footer
  return (
    <div>
      {/* Wywołujemy komponent TextBlock, przekazując mu nagłówek i treść */}
      <TextBlock heading={"Coś tam"} content={"bla bla bla"} />
    </div>
  );
}
