"use client";

import { useState, useEffect } from "react";
import Country from "./Country";
import Link from "next/link"
export default function CountryBorder({countrys}){

    const [countries, setCountries] = useState(null)
    const [error, setError] = useState(false)

    useEffect(() => {
const getData = async ()=>{

try{

    const countriesData = [];

for(const country of countrys){
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${country}`)
        const Json = await response.json();
        countriesData.push(Json[0])
}
    setCountries(countriesData)

    
}catch(error){
    setError(true)
    console.log(error)
}

}
    getData()

}, [countrys])

    return(
        <>

            {error && <h1>Nie udało się pobrać danych</h1>}

            {countries != null && countries.map((border, index)=>
                <Link key={index} href={`/RestCountries/${border.cca2}`}>
                    <Country key={index} kraj={border} />
                </Link>
            )} 

        </>
    )
}