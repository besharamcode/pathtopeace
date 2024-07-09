import { NavLink } from "react-router-dom";
import { contactLinks, footerLinks } from "../../constant/constant";
import Icon from "./Icon";

const Footer = () => {
  return (
    <footer className="border-t border-box py-2 h-10 text-center md:text-sm text-xs text-slate-500 mt-16">
      <div className="icons flex gap-8 items-center justify-center m-8">
        {contactLinks.map((link, i) => {
          return (
            <a
              key={i}
              href={link.link}
              target="_blank"
              rel="noreferrer"
              className="text-xl border-2 border-sec sm:text-2xl text-white grid place-items-center sm:size-16 size-10 rounded-full hover:bg-transparent hover:scale-125 transition-transform"
            >
              <Icon icon={link.icon} />
            </a>
          );
        })}
      </div>
      <div className="links mb-8 flex justify-evenly flex-wrap gap-4 md:w-1/2 w-9/12 mx-auto font-inclusive">
        {footerLinks.map((link, i) => {
          return (
            <NavLink key={i} to={link.link} className="">
              {link.title}
            </NavLink>
          );
        })}
      </div>
      <p className="">&copy; www.pathtopeace.in || All right reserved</p>
    </footer>
  );
};

export default Footer;
