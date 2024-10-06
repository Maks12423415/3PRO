"use client";
import Image from "next/image";

export default function Country({ country }) {
  return (
    <div className="border-2 border-purple-500 p-4">
      <Image
        src={country.flags.png}
        alt={country.name.common}
        width={500}
        height={500}
        className="h-[100px] w-[200px]"
      />

      <h1>{country.name.common}</h1>
    </div>
  );
}
