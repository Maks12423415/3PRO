"use client"
import { useState, useEffect } from "react"
import Country from "@/components/Country"

export default function RestCountries() {

const [data, setData] = useState(null)
const [error, setError] = useState(false)
const [loading, setLoading] = useState(true)

useEffect(()=>{
const getData = async()=> {

try{
const res = await fetch('https://restcountries.com/v3.1/all')
const dataJSON = await res.json()
setData(dataJSON)

}catch(error){
console.log(error)
setError(true)
}finally{
setLoading(false)
}

}


getData()

}, [])




    return(

<div className="flex justify-center items-center flex-wrap">

<h1>{error && "Nie udało sie pobrać danych"}</h1>
<h1>{loading && "Loading..."}</h1>

{data && data.map((country, index)=>

<Country key={index} kraj={country} />

)}

</div>


    )
}