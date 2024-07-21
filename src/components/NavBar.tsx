// NavBar.tsx
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-xl font-bold">
          <Link to="/" className="flex items-center">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNggEtagHz85kQ5Y2FQPwNAFOY93sAVu7B_w&s"
              alt="Pokédex"
              className="w-8 h-8 mr-2"
            />
            Pokédex
          </Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:underline">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
