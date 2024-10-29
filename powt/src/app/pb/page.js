"use client"
import PocketBase from 'pocketbase';
import { useState, useEffect } from 'react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import Image from 'next/image';
  import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from '@/components/ui/button';


export default function pb(){
    const [data, setData] = useState([])
    const [dane, setDane] = useState({nazwa:null, cena:null, opis:null})
    

    const form = (e, nazwa)=>{
        setDane((prevDane=>{
            return(
           { ...prevDane, 
            [nazwa]:e.target.value
           }
        )}))
    }

    const zapisz = async ()=>{
        const record = await pb.collection('gry').create(dane);
        setData((prevData)=>{
            return(
                [ record, ...prevData]
            )
        })
    }


    const pb = new PocketBase('http://172.16.15.149:8080');

    useEffect(()=>{
        const getData = async () =>{

            try{
                // you can also fetch all records at once via getFullList
                const records = await pb.collection('gry').getFullList({
                sort: '-created',
                });
                
                console.log(records);
                setData(records)

            }catch(error){
                console.log(error);
            }




        }
getData();

    },[])


    return (
    
    <div className=' w-full h-screen'>
        <div className='flex flex-row justify-center flex-wrap   w-full h-[70vh]  gap-10 space-x-10 mt-5'>
     {data && data.map((gra)=> {  
     return(
     <Card key={gra.id} className="w-[300px] h-[400px]">
  <CardHeader>
    <CardTitle>{gra.nazwa}</CardTitle>
    <CardDescription className="text-justify">{gra.opis}</CardDescription>
  </CardHeader>
  <CardContent>
    <Image
    src={pb.files.getUrl(gra, gra.zdjecie )}
    alt={gra.zdjecie}
    width={300}
    height={200}
    
    />
  </CardContent>
  <CardFooter>
    Cena: {gra.cena}zł
  </CardFooter>
</Card>
     )}
)}
</div>
<div className='flex  w-full h-[30vh] justify-center items-center '>

<Card className="w-[500px] p-5 gap-3">
    <CardTitle>Dodaj grę!</CardTitle>
      <Label htmlFor="email">Nazwa</Label>
      <Input onChange={(e)=>{form(e, "nazwa")}} type="text" id="nazwa" placeholder="Nazwa gry..." />

      <Label htmlFor="cena">Cena</Label>
      <Input onChange={(e)=>{form(e, "cena")}} type="number" id="cena" placeholder="Cena gry..." />

      <Label htmlFor="opis">Opis</Label>
      <Input onChange={(e)=>{form(e, "opis")}} type="text" id="opis" placeholder="Opis gry..." />

      {/* <Label htmlFor="zdjecie">Zdjecie</Label>
      <Input type="file" id="zdjecie" placeholder="Zdjecie gry..." /> */}
      
      <Button onClick={zapisz}>Dodaj gre</Button>
      </Card>

</div>
    </div>
    )
}