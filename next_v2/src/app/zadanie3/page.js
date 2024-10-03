"use client"
import { useState } from "react"


export default function InputChange(){
const [bgColor, setBgColor] = useState("bg-black-200")
const [inputValue, setInputValue] = useState("")

const handleChange = () => {
    setBgColor(inputValue)
}   



return(

<div  className={`${bgColor} h-screen w-full`}>
<input className="text-red-500" type="text" onChange={(e)=>setInputValue(e.target.value)} placeholder="bg-color" />
<button onClick={handleChange}>Zmien</button>


</div>





)

}

