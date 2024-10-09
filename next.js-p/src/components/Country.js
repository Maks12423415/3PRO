"use client"
import Image from "next/image"
export default function Country({kraj}){


return(

<div className="border-4 p-4 border-purple-400">

<Image 
src={kraj.flags.png}
alt={kraj.name.common}
width = {200}
height = {100}
className="w-[200px] h-[100px]"

/>


<h1>{kraj.name.common}</h1>



</div>



)


}