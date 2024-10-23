"use client";
import Image from "next/image";
import { useState, useEffect } from "react";

export default function Gold() {
  const [gold, setGold] = useState(null);
  const [error, setError] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await fetch(
          `https://api.nbp.pl/api/cenyzlota/last/30?format=json`
        );
        const JSON = await res.json();
        setGold(JSON);
      } catch (error) {
        setError(true);
        console.log(error);
      }
    };
    getData();
  }, []);

  // Obliczanie zmiany ceny
  const calculateChange = (currentPrice, previousPrice) => {
    return (currentPrice - previousPrice).toFixed(2); // Zwracamy różnicę z dwoma miejscami po przecinku
  };

  return (
    <div className="flex justify-center items-center flex-wrap gap-4 h-screen w-full ">
      <h1 className="text-2xl font-bold">{error && "Error"}</h1>
      {gold &&
        gold.map((items, index) => {
          // Sprawdzenie, czy poprzedni element istnieje
          const previousItem = gold[index - 1];

          return (
            <div
              className="flex flex-col border-2 h-[150px] w-[200px] justify-center items-center rounded-lg p-4 "
              key={index}
            >
              <h1 className="text-xl font-bold">{items.cena} zł</h1>
              <p className="text-gray-400">{items.data}</p>
              <div className="flex items-center mt-4">
                {/* Sprawdzenie, czy poprzedni element istnieje i porównanie */}
                {previousItem && items.cena > previousItem.cena ? (
                  <>
                    <Image
                      src="https://cdn-icons-png.flaticon.com/128/10893/10893970.png"
                      alt="stocks icon"
                      width={30}
                      height={30}
                    />
                    <span className="text-green-500 ml-2">
                      +{calculateChange(items.cena, previousItem.cena)}
                    </span>
                  </>
                ) : (
                  previousItem && (
                    <>
                      <Image
                        src="https://cdn-icons-png.flaticon.com/128/10893/10893978.png"
                        alt="graph icon"
                        width={30}
                        height={30}
                      />
                      <span className="text-red-500 ml-2">
                        {calculateChange(items.cena, previousItem.cena)}
                      </span>
                    </>
                  )
                )}
              </div>
            </div>
          );
        })}
    </div>
  );
}
