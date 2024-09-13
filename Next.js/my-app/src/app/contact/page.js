// Importujemy nasz komponent ImageWithText
import ImageWithText from "../../components/ImageWithText";

// Eksportujemy funkcję ContactPage jako domyślny eksport tego modułu
export default function ContactPage() {
  return (
    <div>
      {/* Wywołujemy komponent ImageWithText, aby wyświetlić obrazek z tekstem kontaktowym */}
      <ImageWithText
        imageUrl="../../components/pies.jpg"
        text="Skontaktuj się z nami!"
      />
      <h2>Kontakt</h2>
      {/* Możesz dodać więcej treści lub komponentów tutaj */}
    </div>
  );
}
