// import context
import { useState } from "react";
// import the theme state from context 
import { useDarkTheme } from "../../context/theme.Context";

// adding smooth scroll option to the project
const Navbar = ({ smoothScrollTo, activeSection }) => {
  // use our theme context here!
  const { theme } = useDarkTheme();

  return (
    // navbar

    {/* setting the theme using state from context */}
    <div
      className={`navbar fixed top-0 left-0 w-full shadow-md ${
        theme ? "bg-black" : "bg-white"
      } z-10 transition duration-500 ease-out hover:ease-in`}
    >
      <div className="flex justify-between items-center m-5">
        <div
          className={`logo font-poppins text-[1.5rem] tracking-wide font-bold ${
            theme ? "text-gray-300" : "text-gray-600"
          } `}
        >
          <i className="fa-solid fa-code text-blue-500"></i> Janarthanan.
        </div>
        <div className="menu">
          <ul className="flex gap-7 text-[1.1150rem] font-medium">
            <li
              className={`cursor-pointer hover:text-primary hover:-translate-y-[5px] ${
                activeSection === "home"
                  ? "text-primary underline underline-offset-8"
                  : theme
                  ? "text-white"
                  : "text-black"
              }`}
              onClick={() => smoothScrollTo("home")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer hover:text-primary hover:-translate-y-[5px] ${
                activeSection === "skills"
                  ? "text-primary underline underline-offset-8"
                  : theme
                  ? "text-white"
                  : "text-black"
              }`}
              onClick={() => smoothScrollTo("skills")}
            >
              Skills
            </li>
            <li
              className={`cursor-pointer hover:text-primary hover:-translate-y-[5px] ${
                activeSection === "portfolio"
                  ? "text-primary underline underline-offset-8"
                  : theme
                  ? "text-white"
                  : "text-black"
              }`}
              onClick={() => smoothScrollTo("portfolio")}
            >
              Portfolio
            </li>
          </ul>
        </div>
        <div className="contact">
          <button
            className="py-3 px-3 font-semibold border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition duration-250 ease-out hover:ease-in"
            onClick={() => smoothScrollTo("form")}
          >
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
