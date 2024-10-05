import Link from "next/link"; // Import komponentu Link do nawigacji między stronami

export default function NavBar() {
  return (
    <nav className="flex items-center justify-center space-x-4 p-6">
      {/* Tworzymy tablicę obiektów z danymi linków: adres (href), etykieta (label) i kolor (color) */}
      {[
        { href: "/", label: "Home", color: "text-blue-500" }, // Link do strony głównej
        { href: "/strona1", label: "Strona1", color: "text-red-500" }, // Link do strony 1
        { href: "/zadanie1", label: "Zadanie1", color: "text-green-500" }, // Link do zadania 1
        { href: "/zadanie2", label: "Zadanie2", color: "text-yellow-500" }, // Link do zadania 2
        { href: "/zadanie3", label: "Zadanie3", color: "text-purple-500" }, // Link do zadania 3
        { href: "/zadanie4", label: "Zadanie4", color: "text-pink-500" }, // Link do zadania 4
        {
          href: "/RestCountries",
          label: "RestCountries",
          color: "text-indigo-500",
        }, // Link do strony z Rest Countries
      ].map((link) => (
        // Mapujemy przez tablicę i tworzymy linki dynamicznie. Dla każdego elementu:
        <Link key={link.href} className={link.color} href={link.href}>
          {link.label} {/* Ustawiamy tekst etykiety linku */}
        </Link>
      ))}
    </nav>
  );
}
