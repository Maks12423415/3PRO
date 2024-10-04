"use client"
import { useState } from "react"


export default function Zadanie1(){

const [status, setStatus] = useState("start")

function handleStatus(){
    

    if(status == "stop")
        setStatus("start")
    else
    setStatus("stop")
}


    return(
<>


<button onClick={handleStatus}>Zmien status</button>
<h1>
{status}
</h1>



</>
    )
}
