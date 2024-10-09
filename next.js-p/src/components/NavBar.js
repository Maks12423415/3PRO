import Link from "next/link"
export default function NavBar(){

return(
    <nav className="flex space-x-4 justify-center items-center">
<Link href="/">Home</Link>
<Link href="/RestCountries">RestCountries</Link>
    </nav>
)



}