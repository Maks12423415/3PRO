"use client";
// Importujemy nasz komponent ImageWithText
import { useState, useEffect } from "react";
import ImageWithText from "../../components/ImageWithText";
import DynamicButton from "@/components/DynamicButton";
import ThemeSwitcher from "@/components/ThemeSwitcher";

import SimpleForm from "@/components/SimpleForm";
const on_click = () => {
  console.log("Kliknięto na stronie kontaktowej");
};
const imageUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3vrTUU3CKbUDThpm8aZzFXdTmai6PodNfXA&s";
// Eksportujemy funkcję ContactPage jako domyślny eksport tego modułu
export default function ContactPage() {
  const [theme, setTheme] = useState(null);

  const handleThemeChange = (theme) => {
    setTheme(theme);
  };

  useEffect(() => {
    if (theme) {
      document.body.classList.add(
        theme === "light" ? "light-theme" : "dark-theme"
      );
      document.body.classList.remove(
        theme === "light" ? "dark-theme" : "light-theme"
      );
    }
  }, [theme]);
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

      <DynamicButton label={"Kliknij"} onClick={on_click} />
      <br />

      <ThemeSwitcher onThemeChange={handleThemeChange} />
    </div>
  );
}
