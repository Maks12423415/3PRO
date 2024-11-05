"use client";

//imports
import { useState, useEffect } from "react";
import CarCard from "src/components/CarCard";
import PocketBase from "pocketbase";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "src/components/ui/button";
import { FilePlus, Trash2, Pencil, CircleEllipsis } from "lucide-react";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import { Form } from "react-hook-form";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Switch } from "@/components/ui/switch";

export default function DB() {
  const [data, setData] = useState([]);
  const [zdjecie, setZdjecie] = useState(null);
  const [dane, setDane] = useState({ Marka: null, Model: null, Zdj: null });

  //set image
  const handleZdjecie = (e) => {
    setZdjecie(e.target.files[0]);
  };

  //from
  const saveForm = (e, Marka) => {
    setDane((prevDane) => {
      return { ...prevDane, [Marka]: e.target.value };
    });
  };

  // set pb
  const pb = new PocketBase("http://172.16.15.149:8080");

  // Fetch data from pocketbase
  useEffect(() => {
    const getData = async () => {
      try {
        const records = await pb.collection("cars").getFullList({
          sort: "-created",
        });
        console.log(records);
        setData(records);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  //save function
  const save = async () => {
    const form = new FormData();
    form.append("Model", dane.Model);
    form.append("Marka", dane.Marka);
    form.append("Zdj", zdjecie);

    const record = await pb.collection("cars").create(form);

    setData((prevData) => {
      return [record, ...prevData];
    });
  };

  const handleSwitch = async () => {
    setData((prevData) => {
      return [record, ...prevData];
    });
  };

  return (
    <div className="w-full h-screen gap-10">
      <div className="flex flex-wrap space-x-10 p-10">
        {data &&
          data.map((car) => {
            return (
              <Card key={car.id} className={"w-[300px] h-[400px]"}>
                <CardHeader>
                  <CardTitle>
                    <Image
                      src={pb.files.getUrl(car, car.Zdj)}
                      alt={car.Zdj}
                      width={300}
                      height={200}
                    />
                  </CardTitle>
                  <CardDescription
                    className={"justify-center items-center flex"}
                  >
                    {car.Model}
                  </CardDescription>
                </CardHeader>
                <CardContent className={"justify-center items-center flex"}>
                  <p>{car.Marka}</p>
                </CardContent>
                <CardFooter className="justify-between">
                  <Menubar>
                    <MenubarMenu>
                      <MenubarTrigger>
                        <CircleEllipsis />
                      </MenubarTrigger>
                      <MenubarContent>
                        <MenubarItem>
                          <Pencil />
                        </MenubarItem>
                        <MenubarSeparator />
                        <MenubarItem>
                          <Trash2 />
                        </MenubarItem>
                      </MenubarContent>
                    </MenubarMenu>
                  </Menubar>
                  <Switch onClick={handleSwitch} />
                </CardFooter>
              </Card>
            );
          })}
        {/* add card */}
        <Card className={"w-[300px] h-[500]"}>
          <CardContent className={"justify-center items-center flex h-[400px]"}>
            <Sheet>
              <SheetTrigger>
                <FilePlus size={180} />
              </SheetTrigger>
              <SheetContent side={"bottom"} className="h-[40vh]">
                <SheetHeader>
                  <SheetTitle className="w-full flex justify-center items-center">
                    Do you want to add new car?
                  </SheetTitle>
                  <SheetDescription className="w-full flex justify-center items-center">
                    <Card className="flex    flex-wrap w-[400px] gap-2">
                      <Label htmlFor="email">Your Mark</Label>
                      <Input
                        onChange={(e) => {
                          saveForm(e, "Marka");
                        }}
                        type="text"
                        placeholder="Marka..."
                      />
                      <Label htmlFor="email">Your Model</Label>
                      <Input
                        onChange={(e) => {
                          saveForm(e, "Model");
                        }}
                        type="text"
                        placeholder="Model..."
                      />
                      <Label htmlFor="email">Your image</Label>
                      <Input
                        onChange={(e) => {
                          handleZdjecie(e, "Zdj");
                        }}
                        type="file"
                      />
                      <Button onClick={save}>Save</Button>
                    </Card>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </CardContent>
        </Card>
      </div>
      <div></div>
    </div>
  );
}
