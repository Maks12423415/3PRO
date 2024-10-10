"use client"
import { useState, useEffect } from "react"
import Image from "next/image"
import CountryBorder from "@/components/CountryBorder"

export default function Info({params}){
    const [kraj, setKraj] = useState({})
    const [pobieranie,setPobieranie] = useState(true)
    const [error, setError] = useState(false)
  

    useEffect(()=>{
    const getData = async ()=>{
        
try{
const res = await fetch(`https://restcountries.com/v3.1/alpha/${params.Info}`)
const dataJSON = await res.json()
console.log(dataJSON)
setKraj(dataJSON[0])

if(/40[4|0]/.test(res.status)){;//if zapisany za pomocą regex - jeśli jest 400 lub 404 zmienia wartość errora na true
setError(true)
}

}catch(error){
setError(true)
console.log(error)

}finally{
    setPobieranie(false)
}



    }
    getData()    



    },[])


    return(
<div    >
{error && <h1>Nie udało się pobrać danych</h1>}

    {pobieranie && <h1>Pobieranie danych...</h1>}



{kraj?.cca2 !=null && 
    <div className={" justify-center items-center border-2 border-purple-500 p-4 h-[400px] w-[400px]"}>
<Image src={kraj.flags.png} alt={ kraj.name.common} width={200} height={100} className={"w-[500px] h-[200px]"} /><br/>

<h1>Name: {kraj.name.common}({kraj.cca2})</h1><br/>
<h2>Capital: { kraj.capital}</h2><br/>

<h2>Population: {kraj.population}</h2>

</div>
    }<br/>


    {
        kraj?.borders  && 
        <div className={"flex justify-center items-center space-x-4"}>
            
                <CountryBorder countrys={kraj.borders}  />
            
        </div>
    }
    
</div>
        
    )
}