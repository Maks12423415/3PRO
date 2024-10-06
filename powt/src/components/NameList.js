"use client";
import { useState } from "react";

export default function NameList(imei, color, ok) {
  const nameList = [
    { imie: "Dawid Trynkiewicz" },
    { imie: "Anna Nowak" },
    { imie: "Jan" },
  ];

  var classname = "";

  if (ok) {
    classname = "pl-2 w-1/2 border-2 bg-green-500";
  } else {
    classname = "pl-2 w-1/2 border-2 bg-red-500";
  }

  return (
    <div className={"flex justify-center items-center"}>
      <ul>
        {nameList.map((osoba, index) => (
          <li
            className={"pl-2 h-[100px] w-[1/2] border-2 bg-green-500"}
            key={index}
            status={ok}
          >
            {osoba.imie}
          </li>
        ))}
      </ul>
    </div>
  );
}
