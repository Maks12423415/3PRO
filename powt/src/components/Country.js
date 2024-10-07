"use client";
import Image from "next/image";

export default function Country({ kraj }) {
  return (
    <div className="border-2 border-purple-600 p-4">
      <Image
        src={kraj.flags.png}
        alt={kraj.name.common}
        width={300}
        height={200}
        className="w-[300px] h-[200px]"
      />
      <h1>{kraj.name.common}</h1>
    </div>
  );
}
