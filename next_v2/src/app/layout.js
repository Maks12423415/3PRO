"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useState } from "react";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

// Meta dane dla strony
// export const metadata = {
//   title: "Create Next App",
//   description: "Generated by create next app",
// };

// Główna struktura layoutu aplikacji
export default function RootLayout({ children }) {
  const [theme, setTheme] = useState("bg-white text-black");

  function color() {
    setTheme(
      theme === "bg-white text-black"
        ? "bg-black text-white"
        : "bg-white text-black"
    );
  }
  return (
    <html lang="en">
      <body className={`${inter.className} ${theme}`}>
        {/* Nawigacja na każdej stronie */}
        <NavBar />
        <Switch onClick={color} id="airplane-mode" />
        <Label htmlFor="airplane-mode">Mood</Label>
        {children}
      </body>
    </html>
  );
}
