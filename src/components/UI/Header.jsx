import { NavLink } from "react-router-dom";
import { navLinks } from "../../constant/constant";
import { useEffect, useState } from "react";
import TextPurple from "./TextPurple";

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
        className="font-josefin text-white text-2xl tracking-tight"
      >
        Path <TextPurple word="To" /> Peace
      </NavLink>
      <div>
        {navLinks.map((link, i) => {
          return (
            <NavLink
              key={link.name}
              to={link.path}
              className={`text-white pb-1 font-rethink px-1 ${i !== 0 && "ml-3"} ${
                activeLink === link.path
                  ? "font-medium border-b-2 border-purple-400"
                  : ""
              } hover:text-white`}
            >
              {link.name}
            </NavLink>
          );
        })}
      </div>
    </header>
  );
};

export default Header;
