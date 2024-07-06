import { NavLink } from "react-router-dom";
import { navLinks } from "../../constant/constant";
import { useEffect, useState } from "react";
import TextPurple from "./TextPurple";
import Icon from "./Icon";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  const [activeLink, setActiveLink] = useState(location.pathname);

  useEffect(() => {
    setActiveLink(location.pathname);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  return (
    <header className="px-[4vw] py-6 flex justify-between items-center shadow-lg sticky top-0 bg-blue">
      <NavLink
        to="/"
        className="font-josefin text-white md:text-2xl text-xl tracking-tight"
      >
        Path <TextPurple word="To" /> Peace
      </NavLink>
      <nav
        id="navbar"
        className="sm:flex sm:items-center sm:justify-evenly sm:gap-x-6 font-md text-md sm:bg-blue bg-box absolute transition-all -top-[50rem] sm:top-[unset] sm:static bg-bg md:bg-transparent w-full rounded-md left-1/2 sm:translate-x-0 -translate-x-1/2 sm:w-fit shadow-md sm:shadow-none"
      >
        {navLinks.map((link, i) => {
          return (
            <NavLink
              key={link.name}
              to={link.path}
              className={`text-white pb-1 text-center block w-fit mx-auto sm:my-0 my-8 font-rethink px-1 ${
                i !== 0 && "sm:ml-3"
              } ${
                activeLink === link.path
                  ? "font-medium border-b-2 border-purple-400"
                  : ""
              } hover:text-white`}
            >
              {link.name}
            </NavLink>
          );
        })}
        <button
          className="sm:hidden"
          onClick={() => {
            const nav = document.getElementById("navbar");
            nav.classList.add("-top-[50rem]");
            nav.classList.remove("top-[0%]");
          }}
        >
          <Icon
            className="text-2xl opacity-45 absolute top-8 right-5"
            icon={faXmark}
          />
        </button>
      </nav>
      <button
        className="sm:hidden block text-xl"
        onClick={() => {
          const nav = document.getElementById("navbar");
          nav.classList.remove("-top-[50rem]");
          nav.classList.add("top-[0%]");
        }}
      >
        <Icon icon={faBars} />
      </button>
    </header>
  );
};

export default Header;
