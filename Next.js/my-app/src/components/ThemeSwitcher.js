"use client";
import { useState, useEffect } from "react";

export default function BodyThemeSwitcher({ onThemeChange }) {
  const [theme, setTheme] = useState("light");
  useEffect(() => {
    if (localStorage.getItem("activeTheme"))
      setTheme(localStorage.getItem("activeTheme"));
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    onThemeChange(newTheme);
    localStorage.setItem("activeTheme", newTheme);
  };

  return (
    <div>
      <button onClick={toggleTheme}>
        Zmień motyw na {theme === "dark" ? "jasny" : "ciemny"}
      </button>
    </div>
  );
}
