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

export default function Log() {
  const pb = new PocketBase("http://192.168.89.140:8080");
  const [login, setLogin] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const router = useRouter();

  const handleButtonClick = async () => {
    console.log(login);
    console.log(password);
    setError(false);
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword(login, password);
      router.push("/strona1");
      console.log(authData);
    } catch (error) {
      console.log(error);
      setError(true);
    }
  };

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <Card className="w-[300px] h-[400px]">
        <CardHeader>
          <CardTitle>Login</CardTitle>
        </CardHeader>
        <CardContent>
          <Label>Username or email</Label>
          <Input type="text" onChange={(e) => setLogin(e.target.value)} />
          <Label>Password</Label>
          <Input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          {error && (
            <p className="text-red-500 mt-2">Invalid username or password</p>
          )}
        </CardContent>
        <CardFooter>
          <Button onClick={handleButtonClick}>Login</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
