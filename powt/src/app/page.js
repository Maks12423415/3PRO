import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="space-x-5 justify-center items-center flex h-screen">
      <Link href="/pb">PB</Link>
      <Link href="/pbv2">PBv2</Link>
    </div>
  );
}
