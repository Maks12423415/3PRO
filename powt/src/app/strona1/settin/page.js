"use client";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "src/components/ui/input";
import { useState } from "react";
import { Button } from "src/components/ui/button";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

export default function Setting() {
  const pb = new PocketBase("http://192.168.89.140:8080");
  const [avatar, setAvatar] = useState(null);
  const router = useRouter();

  const changeAvatar = async () => {
    if (!avatar) {
      console.warn("No avatar selected");
      return;
    }

    const formData = new FormData();
    formData.append("avatar", avatar);

    try {
      const record = await pb
        .collection("users")
        .update(pb.authStore.model.id, formData);
      console.log("Avatar updated:", record);

      router.push("/strona1");
    } catch (error) {
      console.error("Error updating avatar:", error);
    }
  };

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
          <Button onClick={changeAvatar}>Update</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
