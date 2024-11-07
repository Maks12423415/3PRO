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
import Link from "next/link";

export default function Logowanie() {
  const pb = new PocketBase("http://172.16.15.149:8080");
  const [login, setLogin] = useState(null);
  const [password, setPassword] = useState(null);
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleLogin = (e) => {
    setLogin(e.target.value);
  };

  const handlePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleButton = async () => {
    console.log(login);
    console.log(password);

    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(login, password);
      console.log(authData);
      router.push("/pb");
    } catch (error) {
      console.error(error);
      setError(true);
      //   alert("Błąd logowania. Spróbuj ponownie.");
    }
  };

  return (
    <div className="w-full h-screen justify-center items-center flex">
      {pb.authStore.isValid ? (
        "Jesteś zalogowany"
      ) : (
        <div className="w-full h-screen justify-center items-center flex">
          <Card className="w-[400px] h-[600px] ">
            <CardHeader>
              <CardTitle>Login</CardTitle>
            </CardHeader>
            <CardContent>
              <Label>Username or email</Label>
              <Input type="text" onChange={(e) => handleLogin(e)} />
              <Label>Password</Label>
              <Input type="password" onChange={(e) => handlePassword(e)} />
            </CardContent>
            <CardFooter className="justify-between">
              <Button onClick={handleButton}>Login</Button>
              {error && <p className="text-red-500">Błędne dane logowania!</p>}
            </CardFooter>
            <Link href="/pb/login/rejestracja">
              Nie masz konta? Zarejestruj się!
            </Link>
          </Card>
        </div>
      )}
    </div>
  );
}
