import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,

} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Pencil, Trash2 } from 'lucide-react';
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
  import { useState, useEffect } from 'react';
  import PocketBase from 'pocketbase';
import { Trigger } from "@radix-ui/react-dialog";




export default function DialogDemo({gra, onUpdate}) {
    const pb = new PocketBase('http://172.16.15.149:8080');
    const [dane, setDane] = useState({nazwa:gra.nazwa, cena:gra.cena, opis:gra.opis})

    const form = (e, nazwa)=>{
        setDane((prevDane=>{
            return(
           { ...prevDane, 
            [nazwa]:e.target.value
           }
        )}))
    }

    const handleZdjecie = (e)=>{

        console.log(e)
        setZdjecie(e.target.files[0])

    }

    const update = async ()=>{


        const formdata = new FormData()

        formdata.append('nazwa', dane.nazwa)
        formdata.append('cena', dane.cena)
        formdata.append('opis', dane.opis)
        //formdata.append('zdjecie', zdjecie)

        const record = await pb.collection('gry').update(gra.id, formdata);
        
        onUpdate(record)

    }


  return (
    <Dialog >
      <DialogTrigger asChild>
      <Button variant="ghost"><Pencil/></Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Edit game</DialogTitle>
          <DialogDescription>
            
          </DialogDescription>
        </DialogHeader>
        
    
      <Label htmlFor="email">Nazwa</Label>
      <Input defaultValue={gra.nazwa} onChange={(e)=>{form(e, "nazwa")}} type="text" id="nazwa" placeholder="Nazwa gry..." />

      <Label htmlFor="cena">Cena</Label>
      <Input defaultValue={gra.cena} onChange={(e)=>{form(e, "nazwa")}} type="number" id="cena" placeholder="Cena gry..." />

      <Label htmlFor="opis">Opis</Label>
      <Input defaultValue={gra.opis} onChange={(e)=>{form(e, "nazwa")}} type="text" id="opis" placeholder="Opis gry..." />

      {/* <Label htmlFor="zdjecie">Zdjecie</Label>
      <Input onChange={(e)=>{handleZdjecie(e)}} type="file" id="zdjecie" placeholder="Zdjecie gry..." /> */}
      
      
      

        <DialogFooter >
            <Trigger>
          <Button  onClick={update} type="submit">Save changes</Button>
          </Trigger>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
