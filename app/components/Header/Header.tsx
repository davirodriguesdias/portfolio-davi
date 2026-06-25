"use client";

import { FaGithub, FaLinkedin, FaBars } from "react-icons/fa";
import { useEffect, useState } from "react";

export default function Header() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const setScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", setScroll);

    return () => {
      window.removeEventListener("scroll", setScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 z-999 flex justify-between p-5 sm:p-11 sm:px-21 w-full font-semibold ${isVisible ? "bg-gray-900/80 backdrop-blur-sm" : "bg-transparent"}`}
    >
      <h1 className="text-2xl sm:text-4xl">
        <a href="#">Davi</a>
      </h1>

      <div className="sm:hidden">
        {/* paddind temporario  */}
        <button className="text-2xl cursor-pointer">
          <FaBars />
        </button>
      </div>

      <nav className="hidden sm:block">
        <ul className="flex text-xl gap-6">
          <li>
            <a href="#aboutSection">Sobre mim</a>
          </li>
          <li>
            <a href="#projects">Projetos</a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/davirodriguesdias"
              className="flex items-center gap-2"
            >
              <FaGithub size={25} />
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/davi-dias-1606b42b0/"
              className="flex items-center gap-2"
            >
              <FaLinkedin size={25} />
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
