import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

import { logo } from "../assets/images";

const NavLinks = () => {
  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="purple-gradient_text">SJ</p>
      </NavLink>
      <nav className="flex text-lg gap-7 font-medium">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? "text-purple-600" : "text-black"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/projects"
          className={({ isActive }) =>
            isActive ? "text-purple-600" : "text-black"
          }
        >
          Projects
        </NavLink>
        <NavLink
          to="/studies"
          className={({ isActive }) =>
            isActive ? "text-purple-600" : "text-black"
          }
        >
          Learning
        </NavLink>
      </nav>
    </header>
  );
};

const Navbar = () => {
  return (
    <nav>
      <div>
        <NavLinks />
      </div>
      <div>
        <button></button>
      </div>
    </nav>
  );
};

export default Navbar;
