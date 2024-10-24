"use client"
import { useState, useEffect } from "react";
import Image from "next/image";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card";
  import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



export default function(){
    const [data, setData] = useState(null)
    const [error, setError] = useState(false)



    const dataArray = []
    useEffect(() => {
        const fetchData = async () => {
            try{
                const response = await fetch(`https://api.thecatapi.com/v1/images/search?limit=10`)
                const json = await response.json()
                console.log(json)
                dataArray.push(...json)
                setData(dataArray)
            }catch(error){
                console.log(error)
                setError(true)
            }
        }
        fetchData()
    }, [])

return(
    <div className="flex justify-center items-center flex-wrap gap-5 ">
            <h1>{error && "Error"}</h1>



        {data && data.map((item, index)=>
        
        <Card
        key={index}
        className={
          "flex flex-col items-center justify-center gap-5 h-[250px] w-[200px]"
        }
      >
        <CardHeader>
          
          <CardTitle>Kot</CardTitle>
        </CardHeader>
        <CardContent >
        <Sheet>
        <SheetTrigger>
          <Image
            src={item.url}
            alt={"kot"}
            width={100}
            height={100}
            className="w-[100px] h-[100px]"
          />
          </SheetTrigger>
  <SheetContent side={"bottom"} className="flex h-[80vh] w-full justify-center items-center">
    <SheetHeader>
      <SheetTitle></SheetTitle>
      <SheetDescription>
      <Image
            src={item.url}
            alt={"kot"}
            width={item.width}
            height={100}
            className="max-h-[75vh] w-auto"
            
          />
      </SheetDescription>
    </SheetHeader>
  </SheetContent>
</Sheet>
        </CardContent>
        <CardFooter >
          
        </CardFooter>
      </Card>
    
    
    )}

    </div>
)




}