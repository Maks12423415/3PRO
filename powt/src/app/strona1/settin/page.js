"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "src/components/ui/input";
import { useState, useEffect } from "react";
import { Button } from "src/components/ui/button";


useEffect(()=>{
    try{
        const record = await pb.collection('users').update('RECORD_ID', data);
    }catch(error){
        console.log(error)
    }

},[])


export default function Setting() {
  const [avatar, setAvatar] = useState(null);



  return (
    <div>
      <Card>
        <CardHeader>
          <CardTitle>Zmień avatar</CardTitle>
        </CardHeader>
        <CardContent>
          <Input type="file" onChange={(e) => setAvatar(e.target.files[0])} />
        </CardContent>
        <CardFooter>
            <Button>Update</Button>        
            </CardFooter>
      </Card>
    </div>
  );
}
