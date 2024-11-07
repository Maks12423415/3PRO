"use client";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import Link from "next/link";
import PocketBase from "pocketbase";
import { useEffect, useState } from "react";

export default function Login({ onLogin }) {
  const pb = new PocketBase("http://172.16.15.149:8080");
  const [user, setUser] = useState(null);

  useEffect(() => {
    setUser(pb.authStore.model);
  }, []);

  const login = async () => {
    try {
      const authData = await pb
        .collection("users")
        .authWithPassword("test", "12345678");
      console.log(authData);
      console.log(pb.authStore);
      //   console.log(pb.authStore.isValid);
      //   console.log(pb.authStore.token);
      //   console.log(pb.authStore.model.id);
      setUser(pb.authStore.model);
      onLogin(pb.authStore.model);
    } catch (error) {
      console.error(error);
      alert("Błąd logowania. Spróbuj ponownie.");
    }
  };

  const logout = async () => {
    // "logout" the last authenticated account
    pb.authStore.clear();
    console.log(pb.authStore);
    setUser(null);
    onLogin(null);
  };

  return (
    <div className="m-5">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <div className="w-[100px]">
            <Avatar className="w-[100px] h-auto">
              <AvatarImage src={pb.files.getUrl(user, user?.avatar)} />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            {user ? <p>Zalogowany </p> : <p>Niezalogowany</p>}
          </div>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>My Account</DropdownMenuLabel>
          <DropdownMenuSeparator />
          {!user && (
            <Link href={"/pb/login"}>
              <DropdownMenuItem>Login</DropdownMenuItem>
            </Link>
          )}
          {user && <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
