"use client";
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { HoverCard, HoverCardTrigger, HoverCardContent } from "@/components/ui/hover-card";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
  } from "@/components/ui/dialog"
export default function Start4(){

const [liczba, setLiczba] = useState(0)

const handleDodaj = () => {
    setLiczba(liczba + 1)
}

const handleOdejmij = () => {
    setLiczba(liczba - 1 )
}

const zeruj= ()=>{
    setLiczba(0)
}


    return(
        <div className="flex justify-center items-center h-screen w-full flex-col space-x-4">
            <HoverCard>
                <HoverCardTrigger>
                    
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
      {liczba}
    </h1>
    <HoverCardContent>Licznik to: {liczba}</HoverCardContent>
    </HoverCardTrigger>
    </HoverCard>
    <div className="flex justify-center items-center  space-x-4">
<Button onClick={handleDodaj}>Dodaj 1</Button>
<Button onClick={handleOdejmij}>Odejmij 1</Button>


<Dialog>
  <DialogTrigger asChild><Button >Setting</Button></DialogTrigger>// asChild informuje że trigerem nie będzie teksty tylko jakiś inny element jsx
  <DialogContent>
    <DialogHeader className={"justify-center items-center"}>
      <DialogTitle>Are you absolutely sure?</DialogTitle>
      <DialogDescription>
      <Button onClick={zeruj}>Zeruj</Button>
      </DialogDescription>
    </DialogHeader>
  </DialogContent>
</Dialog>
</div>
</div>

    )
}