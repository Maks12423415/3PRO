import Link from "next/link";
export default function NavBar() {
  return (
    <nav className="space-x-5 items-center flex w-full">
      <Link href={"/strona1"}> Strona1 </Link>
      <Link href={"/strona2"}> Strona2 </Link>
    </nav>
  );
}
