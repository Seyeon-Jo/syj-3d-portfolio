import { NavLink } from "react-router-dom";
import { menu } from "../assets/icons";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="purple-gradient_text">SJ</p>
      </NavLink>

      {/* Hamburger menu icon */}
      <div className="md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={menu} alt="Menu" className="w-9 h-9 mt-2" />
        </button>
      </div>

      <nav
        className={`flex flex-col md:flex-row text-lg gap-7 font-medium ${
          isMenuOpen
            ? "absolute top-full left-0 w-64 p-4 bg-purple-700"
            : "hidden md:flex md:bg-transparent"
        }`}
        onClick={closeMenu}
      >
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

export default Navbar;
