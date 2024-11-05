"use client";

// Imports
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
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Switch } from "@/components/ui/switch";

export default function DB() {
  const [data, setData] = useState([]);
  const [zdjecie, setZdjecie] = useState(null);
  const [dane, setDane] = useState({ Marka: "", Model: "", Zdj: "" });

  const pb = new PocketBase("http://192.168.89.140:8080");

  // Fetch data from PocketBase
  useEffect(() => {
    const getData = async () => {
      try {
        const records = await pb
          .collection("cars")
          .getFullList({ sort: "-created" });
        setData(records);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  // Save new car
  const save = async () => {
    const form = new FormData();
    form.append("Model", dane.Model);
    form.append("Marka", dane.Marka);
    form.append("Zdj", zdjecie);

    try {
      const record = await pb.collection("cars").create(form);
      setData((prevData) => [record, ...prevData]);
    } catch (error) {
      console.log("Error saving data:", error);
    }
  };

  // Delete car
  const kill = async (id) => {
    try {
      await pb.collection("cars").delete(id);
      setData((prevData) => prevData.filter((item) => item.id !== id));
    } catch (error) {
      console.log(error);
    }
  };

  // Toggle status for a specific car
  const toggleStatus = async (car) => {
    try {
      const updatedCar = { ...car, Status: !car.Status };
      await pb.collection("cars").update(car.id, updatedCar);
      setData((prevData) =>
        prevData.map((item) => (item.id === car.id ? updatedCar : item))
      );
    } catch (error) {
      console.log("Error updating status:", error);
    }
  };

  return (
    <div className="w-full h-screen gap-10">
      <div className="flex flex-wrap space-x-10 p-10">
        {data.map((car) => (
          <Card key={car.id} className="w-[300px] h-[400px]">
            <CardHeader>
              <CardTitle>
                <Image
                  src={pb.files.getUrl(car, car.Zdj)}
                  alt={car.Zdj}
                  width={300}
                  height={200}
                  className="w-[300px] h-[200px]"
                />
              </CardTitle>
              <CardDescription className="justify-center items-center flex">
                {car.Model}
              </CardDescription>
            </CardHeader>
            <CardContent className="justify-center items-center flex">
              <p>{car.Marka}</p>
            </CardContent>
            <CardFooter className="justify-between">
              <Menubar>
                <MenubarMenu>
                  <MenubarTrigger>
                    <CircleEllipsis />
                  </MenubarTrigger>
                  <MenubarContent>
                    <MenubarItem className="justify-between">
                      Update <Pencil />
                    </MenubarItem>
                    <MenubarSeparator />
                    <MenubarItem
                      className="justify-between"
                      onClick={() => kill(car.id)}
                    >
                      Delete <Trash2 />
                    </MenubarItem>
                  </MenubarContent>
                </MenubarMenu>
              </Menubar>
              <Switch
                onClick={() => toggleStatus(car)}
                checked={car.Status ?? false}
              />
            </CardFooter>
          </Card>
        ))}
        {/* Add Card */}
        <Card className="w-[300px] h-[500]">
          <CardContent className="justify-center items-center flex h-[400px]">
            <Sheet>
              <SheetTrigger>
                <FilePlus size={180} />
              </SheetTrigger>
              <SheetContent side="bottom" className="h-[40vh]">
                <SheetHeader>
                  <SheetTitle className="w-full flex justify-center items-center">
                    Do you want to add a new car?
                  </SheetTitle>
                  <SheetDescription className="w-full flex justify-center items-center">
                    <Card className="flex flex-wrap w-[400px] gap-2">
                      <Label>Your Mark</Label>
                      <Input
                        onChange={(e) =>
                          setDane((prev) => ({
                            ...prev,
                            Marka: e.target.value,
                          }))
                        }
                        type="text"
                        placeholder="Marka..."
                      />
                      <Label>Your Model</Label>
                      <Input
                        onChange={(e) =>
                          setDane((prev) => ({
                            ...prev,
                            Model: e.target.value,
                          }))
                        }
                        type="text"
                        placeholder="Model..."
                      />
                      <Label>Your Image</Label>
                      <Input
                        onChange={(e) => setZdjecie(e.target.files[0])}
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
    </div>
  );
}
