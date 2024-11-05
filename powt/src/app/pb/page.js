"use client";
import PocketBase from "pocketbase";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Pencil, ThumbsDown, ThumbsUp, Trash2 } from "lucide-react";
import EditItem from "@/components/EditItem";

export default function pb() {
  const [data, setData] = useState([]);
  const [dane, setDane] = useState({ nazwa: null, cena: null, opis: null });
  const [zdjecie, setZdjecie] = useState(null);

  const form = (e, nazwa) => {
    setDane((prevDane) => {
      return { ...prevDane, [nazwa]: e.target.value };
    });
  };

  const handleZdjecie = (e) => {
    console.log(e);
    setZdjecie(e.target.files[0]);
  };

  const zapisz = async () => {
    const formdata = new FormData();

    formdata.append("nazwa", dane.nazwa);
    formdata.append("cena", dane.cena);
    formdata.append("opis", dane.opis);
    formdata.append("zdjecie", zdjecie);

    const record = await pb.collection("gry").create(formdata);
    setData((prevData) => {
      return [record, ...prevData];
    });
  };

  const kill = async (id) => {
    try {
      const usun = await pb.collection("gry").delete(id);
      setData((prev) =>
        prev.filter((item) => {
          return item.id != id;
        })
      );
    } catch (err) {
      console.log(err);
    }
  };

  const pb = new PocketBase("http://192.168.89.140:8080"); //ip szkolne: http://172.16.15.149:8080, ip domowe: http://192.168.89.140:8080

  useEffect(() => {
    const getData = async () => {
      try {
        const records = await pb.collection("gry").getFullList({
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

  const updateItem = (item) => {
    console.log(item);

    var tmpDate = [...data];
    var index = null;

    for (let i in data) {
      if (item.id == tmpDate[i].id) {
        index = i;
      }
    }

    tmpDate[index] = item;

    setData(tmpDate);
  };

  const like = async (gra) => {
    const likes = await pb.collection("gry").update(gra.id, { "like+": 1 });

    updateItem(likes);
  };

  const dislike = async (gra) => {
    const likes = await pb.collection("gry").update(gra.id, { "dislike+": 1 });

    updateItem(likes);
  };

  return (
    <div className=" w-full h-screen">
      <div className="flex flex-row justify-center flex-wrap   w-full h-[70vh]  gap-10 space-x-10 mt-5">
        {data &&
          data.map((gra) => {
            return (
              <Card key={gra.id} className="w-[300px] h-[400px]">
                <CardHeader>
                  <CardTitle>{gra.nazwa}</CardTitle>
                  <CardDescription className="text-justify">
                    {gra.opis}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Image
                    src={pb.files.getUrl(gra, gra.zdjecie)}
                    alt={gra.zdjecie}
                    width={300}
                    height={200}
                  />
                  Cena: {gra.cena}zł
                </CardContent>
                <CardFooter className={"w-full flex justify-end"}>
                  <Button variant="ghost" onClick={() => like(gra)}>
                    {gra.like}
                    <ThumbsUp />
                  </Button>
                  <Button variant="ghost" onClick={() => dislike(gra)}>
                    {gra.dislike}
                    <ThumbsDown />
                  </Button>
                  <EditItem gra={gra} onUpdate={updateItem} />
                  <Button variant="ghost" onClick={() => kill(gra.id)}>
                    <Trash2 />
                  </Button>
                </CardFooter>
              </Card>
            );
          })}
      </div>
      <div className="flex  w-full h-[30vh] justify-center items-center ">
        <Card className="w-[500px] p-5 gap-3">
          <CardTitle>Dodaj grę!</CardTitle>
          <Label htmlFor="email">Nazwa</Label>
          <Input
            onChange={(e) => {
              form(e, "nazwa");
            }}
            type="text"
            id="nazwa"
            placeholder="Nazwa gry..."
          />

          <Label htmlFor="cena">Cena</Label>
          <Input
            onChange={(e) => {
              form(e, "cena");
            }}
            type="number"
            id="cena"
            placeholder="Cena gry..."
          />

          <Label htmlFor="opis">Opis</Label>
          <Input
            onChange={(e) => {
              form(e, "opis");
            }}
            type="text"
            id="opis"
            placeholder="Opis gry..."
          />

          <Label htmlFor="zdjecie">Zdjecie</Label>
          <Input
            onChange={(e) => {
              handleZdjecie(e);
            }}
            type="file"
            id="zdjecie"
            placeholder="Zdjecie gry..."
          />

          <Button onClick={zapisz}>Dodaj gre</Button>
        </Card>
      </div>
    </div>
  );
}
