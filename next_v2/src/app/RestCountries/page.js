"use client"
import Country from "@/components/country";
import { useEffect, useState } from "react";


export default function RestCountries(){

    const [data, setData] = useState(null)
    const [error, setError] = useState(false)
    const [loading, setLoading] = useState(true)
    
useEffect(()=> {
const getData = async () => {
try{
const response = await fetch("https://restcountries.com/v3.1/all")
const dataJson = await response.json()
setData(dataJson)
console.log(dataJson)
}catch(error){
console.log(error)
setError(true)
}
finally{

setLoading(false)
    }
}
getData()
}
,[])


return(
<div className="flex flex-wrap gap-2 w-full h-screen justify-center items-center">


<h1>{loading && "Loading..."}</h1>
<h1>{error && "Nie udało się pobrać danych"}</h1>
{/* <h1>{data && data[0].name.common}</h1> */}
{data && data.map((kraj, index) =>
     <Country  key={index} kraj={kraj} />
     )  }



</div>



)


}