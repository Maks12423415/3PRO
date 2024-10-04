import Link from "next/link";

export default function NavBar(){

return(



<nav className="flex items-center justify-center space-x-4">
    {[
        {href: "/", label: "Home", color: "text-blue-500" }, 
        {href: "/strona1", label: "Strona1", color: "text-red-500"},
        {href: "/zadanie1", label: "Zadanie1", color: "text-green-500"},
        {href: "/zadanie2", label: "Zadanie2", color: "text-yellow-500"  },
        {href: "/zadanie3", label: "Zadanie3 ", color: "text-purple-500"  },
        {href: "/zadanie4", label: "Zadanie4", color: "text-pink-500"   },
        {href: "/RestCountries", label: "RestCountries", color: "text-indigo-500"  }
    ].map((link => (
        <Link key={link.href} className={link.color} href={link.href}>{link.label}</Link>
    )))}


</nav>





)



}