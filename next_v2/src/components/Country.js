"use client";
import Image from "next/image";

export default function Country({ kraj }) {
  return (
    <div className="border-2 border-purple-500 p-4">
      {/* Wyświetlanie flagi kraju */}
      <Image
        src={kraj.flags.png}
        alt={kraj.name.common}
        width={500}
        height={500}
        className="h-[100px] w-[200px]"
      />

      {/* Wyświetlanie nazwy kraju */}
      <h1>{kraj.name.common}</h1>
    </div>
  );
}
