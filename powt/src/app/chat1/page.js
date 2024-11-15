"use client";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";
import { Badge } from "@/components/ui/badge";
import { Card } from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import { Send } from "lucide-react";

export default function Chat() {
  const pb = new PocketBase("http://172.16.15.149:8080");
  const [data, setData] = useState(null);
  const [message, setMessage] = useState(null);
  const USER_ID = "mif3cox2cdt9r4j";
  useEffect(() => {
    const getData = async () => {
      try {
        const resultList = await pb.collection("chat").getList(1, 50, {
          filter: "",
        });
        setData(resultList.items);
        console.log(resultList.items);
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    // Subskrypcja do zdarzeń w PocketBase, gdy nowe wiadomości się dodają do kolekcji chat
    pb.collection("chat").subscribe(
      "*",
      function (e) {
        console.log(e.action);
        console.log(e.record);

        if (e.action == "create") {
          setData((prevData) => [e.record, ...prevData]);
        }
      },
      {
        /* other options like expand, custom headers, etc. */
      }
    );
    return () => {
      pb.collection("chat").unsubscribe(); // remove all subscriptions in the collection
    };
  }, []);

  const generateClassname = (id) => {
    const moje = "w-full flex justify-end";
    const inne = "w-full flex justify-start";

    if (id == USER_ID) {
      return moje;
    } else {
      return inne;
    }
  };

  const handelText = (e) => {
    setMessage(e.target.value);
  };

  const handleSend = async () => {
    const data = {
      text: message,
      user_id: USER_ID,
    };

    const record = await pb.collection("chat").create(data);
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
      <Card className="w-[50%] h-[50%]">
        {data &&
          data
            .map((message) => (
              <div className={generateClassname(message.user_id)}>
                <Badge className="text-xl my-1  " key={message.id}>
                  {message.text}
                </Badge>
              </div>
            ))
            .reverse()}
      </Card>
      <div className="h-[50%] flex">
        <Input
          onChange={(e) => {
            handelText(e);
          }}
        />
        <Button onClick={handleSend}>
          <Send />
        </Button>
      </div>
    </div>
  );
}
