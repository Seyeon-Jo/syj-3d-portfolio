import { NavLink } from "react-router-dom";
import { menu } from "../assets/icons";
import { useState } from "react";

import { AnimatePresence, motion } from "framer-motion";

const mobileNavContainerVariant = {
  hidden: { opacity: 0, y: "-20%" }, // 메뉴 바로 아래에서 시작
  show: {
    opacity: 1,
    y: 0, // 햄버거 메뉴 바로 아래로 이동
    transition: {
      type: "spring",
      stiffness: 50,
      damping: 10, // 애니메이션 동안의 속도 감소를 조절하여 더 부드러운 효과를 줌
    },
  },
  exit: {
    opacity: 0,
    y: "-20%", // 다시 메뉴 바로 위로 사라짐
    transition: {
      ease: "easeInOut",
      duration: 0.3,
    },
  },
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header className="header flex justify-between items-center px-4 py-2">
      <NavLink
        to="/"
        className="w-10 h-10 rounded-lg bg-white items-center justify-center flex font-bold shadow-md"
      >
        <p className="purple-gradient_text">SJ</p>
      </NavLink>

      {/* Hamburger menu icon */}
      <div className="relative md:hidden">
        <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <img src={menu} alt="Menu" className="w-9 h-9 mt-2" />
        </button>
      </div>

      {/* <nav
        className={`flex flex-col items-center justify-center md:flex-row text-lg gap-7 font-medium ${
          isMenuOpen
            ? "absolute top-full left-0 right-0 mx-auto w-full p-4 bg-slate-100"
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
      </nav> */}

      {/* Static nav for desktop */}
      <nav className="hidden md:flex flex-col md:flex-row items-center justify-center text-lg gap-7 font-medium">
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

      {/* Animated nav for mobile */}
      <AnimatePresence mode="wait">
        {isMenuOpen && (
          <motion.nav
            variants={mobileNavContainerVariant}
            initial="hidden"
            animate="show"
            exit="exit"
            className={`flex flex-col items-center justify-center md:flex-row text-lg gap-7 font-medium ${
              isMenuOpen
                ? "absolute top-full left-0 right-0 mx-auto w-full p-4 bg-slate-100"
                : "hidden md:flex md:bg-transparent"
            }`}
            onClick={closeMenu}
          >
            {/* Navigation Links */}
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
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
