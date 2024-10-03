
"use client";
import { useState } from "react"


export default function Strona1(){
    const [licznik, setLicznik] = useState(0)


function handleClick(){
    
        setLicznik(licznik + 1);
    
}

function dishandleClick(){
    setLicznik(licznik - 1);
}

return(
    <div className="gap-10 space-x-4">
    
    <h1>Hello World</h1>

    <button className="text-blue-500" onClick={handleClick}>Dodaj 1</button>
    <button className="text-red-500" onClick={dishandleClick}>Odejmij 1</button>
    <p className="flex justify-center items-center border-2 w-10">{licznik}</p>
    </div>
)



}