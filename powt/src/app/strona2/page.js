"use client";
import { useState, useEffect } from "react";
import PocketBase from "pocketbase";
import { useRouter } from "next/navigation";

export default function Strona2() {
  const pb = new PocketBase("http://172.16.15.149:8080");
  const [user, setUser] = useState(null);
  const router = useRouter();

  useEffect(() => {
    setUser(pb.authStore.model);
  }, []);

  return (
    <div>
      {pb.authStore.isValid ? <h1>Strona2</h1> : router.push("/strona1")}
    </div>
  );
}
