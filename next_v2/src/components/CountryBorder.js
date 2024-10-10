"use client";

import { useState, useEffect } from "react";
import Country from "./Country";
import Link from "next/link"
export default function CountryBorder({countrys}){

    const [countries, setCountries] = useState(null)
    const [error, setError] = useState(false)
    const [minPopilation, setMinPopulation] = useState(0)
    const [maxPopulation, setMaxPopulation] = useState(0)

    useEffect(() => {
const getData = async ()=>{

try{

    const countriesData = [];

for(const country of countrys){
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${country}`)
        const Json = await response.json();
        countriesData.push(Json[0])
}
    
    setMinPopulation(Math.min(...countriesData.map(country=>country.population)))
    setMaxPopulation(Math.max(...countriesData.map(country=>country.population)))
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
                <Link key={index} href={`/RestCountries/${border.cca2}`} className={`${minPopilation === countries.population ? "border-red-500" : maxPopulation ? "border-green-500": "" }`}>
                    <Country  kraj={border} />
                </Link>
            )} 

        </>
    )
}