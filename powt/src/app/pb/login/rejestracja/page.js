"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useState } from "react";
import { Button } from "src/components/ui/button";
import { Input } from "src/components/ui/input";
import { Label } from "src/components/ui/label";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

export default function Logowanie() {
  const pb = new PocketBase("http://172.16.15.149:8080");
  const [error, setError] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const [dane, setDane] = useState({
    username: null,
    email: null,
    name: null,
    password: null,
    passwordConfirm: null,
  });
  const router = useRouter();

  const handleRegistr = (e, username) => {
    setDane((prevDane) => ({ ...prevDane, [username]: e.target.value }));
  };

  const zapisz = async () => {
    const form = new FormData();
    form.append("username", dane.username);
    form.append("email", dane.email);
    form.append("name", dane.name);
    form.append("password", dane.password);
    form.append("passwordConfirm", dane.passwordConfirm);
    form.append("avatar", avatar);

    try {
      const record = await pb.collection("users").create(form);
      alert("Rejestracja przebiegła pomyslnie!");
      router.push("/pb/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleFile = (e) => {
    setAvatar(e.target.files[0]);
  };

  return (
    <div className="w-full h-screen justify-center items-center flex">
      {pb.authStore.isValid ? (
        "Jesteś zalogowany"
      ) : (
        <div className="w-full h-screen justify-center items-center flex">
          <Card className="w-[400px] h-[600px] ">
            <CardHeader>
              <CardTitle>Register</CardTitle>
            </CardHeader>
            <CardContent>
              <Label>Username </Label>
              <Input
                type="text"
                onChange={(e) => handleRegistr(e, "username")}
              />
              <Label>Email </Label>
              <Input type="text" onChange={(e) => handleRegistr(e, "email")} />
              <Label>Name (opcional) </Label>
              <Input type="text" onChange={(e) => handleRegistr(e, "name")} />
              <Label>Password</Label>
              <Input
                type="password"
                onChange={(e) => handleRegistr(e, "password")}
              />
              <Label>Confirm Password</Label>
              <Input
                type="password"
                onChange={(e) => handleRegistr(e, "passwordConfirm")}
              />
              <Label>Avatar</Label>
              <Input type="file" onChange={(e) => handleFile(e)} />
            </CardContent>
            <CardFooter className="justify-between">
              <Button onClick={zapisz}>Login</Button>
              {error && <p className="text-red-500">Błędne dane logowania!</p>}
            </CardFooter>
          </Card>
        </div>
      )}
    </div>
  );
}
