// Importujemy nasz komponent ImageWithText
import ImageWithText from "../../components/ImageWithText";

import SimpleForm from "@/components/SimpleForm";

const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&s";
// Eksportujemy funkcję ContactPage jako domyślny eksport tego modułu
export default function ContactPage() {
  return (
    <div>
      <h2>Kontakt</h2>
      {/* Wywołujemy komponent ImageWithText, aby wyświetlić obrazek z tekstem kontaktowym */}
      <ImageWithText imageUrl={imageUrl} text="Skontaktuj się z nami!" />
      <SimpleForm
        placeholder="Podaj numer kontaktowy"
        value="number"
        label="Numer kontaktowy: "
      />
    </div>
  );
}
