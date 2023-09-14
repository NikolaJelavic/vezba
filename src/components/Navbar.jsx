import { Link } from "react-router-dom"

export default function Navbar() {
  return (
    <nav className="w-full bg-blue-600 flex p-5 ">
      <ul className="flex justify-around w-full">
        <Link to="/" className="text-stone-900 font-black hover:text-green-600 text-xl">Home</Link>
        <Link to="/one" className="text-stone-900 hover:text-green-600 font-black text-xl">One</Link>
        <Link to="/games" className="text-stone-900 hover:text-green-600 font-black text-xl">Games</Link>
      </ul>
    </nav>
  )
}
