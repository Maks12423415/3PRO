import Image from "next/image";
import NameList from "@/components/NameList";

export default function Home() {
  
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-5">
    <NameList color={"text-purple-500"} imie={"Maks"} ok/>
    <NameList color={"text-red-500"} imie={"Dawid"} />
    <NameList color={"text-red-500"} imie={"Jan kowalski"} />
    <NameList color={"text-yellow-500"} imie={"Szymon"} ok />
    </div>
  );
}
