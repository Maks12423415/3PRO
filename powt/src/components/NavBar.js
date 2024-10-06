import Link from "next/link";

export default function Navar() {
  return (
    <div className={"flex space-x-4 justify-center items-center "}>
      {[
        { href: "/", label: "Home" },
        { href: "/Strona1", label: "Strona1" },
        { href: "/Strona2", label: "Strona2" },
        { href: "/Strona3", label: "Strona3" },
        { href: "/Strona4", label: "Strona4" },
        { href: "/ReastCountries", label: "ReastCountries" },
      ].map((link) => (
        <Link href={link.href} key={link.label}>
          {link.label}
        </Link>
      ))}
    </div>
  );
}
