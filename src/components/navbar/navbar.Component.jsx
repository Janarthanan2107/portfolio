// import context
import { useDarkTheme } from "../../context/theme.Context";

const Navbar = () => {
  // use our theme context here!
  const { theme } = useDarkTheme();
  return (
    <div
      className={`navbar fixed top-0 left-0 w-full shadow-md ${
        theme ? "bg-black" : "bg-white"
      } z-10 transition duration-500 ease-out hover:ease-in`}
    >
      <div className="flex justify-between items-center m-5">
        <div className={`logo font-poppins text-[1.5rem] tracking-wide font-bold ${theme ? "text-gray-300":"text-gray-600"} `}>
          <i className="fa-solid fa-code text-blue-500"></i> Janarthanan.
        </div>
        <div className="menu">
          <ul className="flex gap-7 text-[1.1150rem] font-medium">
            <li
              className={`cursor-pointer hover:text-primary hover:-translate-y-[5px] ${
                theme ? "text-white" : "text-black"
              }`}
            >
              Home
            </li>
            <li
              className={`cursor-pointer hover:text-primary hover:-translate-y-[5px] ${
                theme ? "text-white" : "text-black"
              }`}
            >
              Skills
            </li>
            <li
              className={`cursor-pointer hover:text-primary hover:-translate-y-[5px] ${
                theme ? "text-white" : "text-black"
              }`}
            >
              Portfolio
            </li>
          </ul>
        </div>
        <div className="contact">
          <button className="py-3 px-3 font-semibold border border-primary rounded-md text-primary hover:bg-primary hover:text-white transition duration-250 ease-out hover:ease-in">
            Contact Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
