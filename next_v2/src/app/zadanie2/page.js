"use client"
import { useState } from "react"
export default function BgChange(){
const  [mode , setMode] = useState("bg-white")

function handleColor(){
    setMode(mode === "bg-gray-400 text-black" ? "bg-black text-white" : "bg-gray-400 text-black");
}
return(


<div className={`${mode} flex h-screen justify-center items-center`}>

<button className="border-2" onClick={handleColor}>Zmien motyw</button>




</div>
)





}