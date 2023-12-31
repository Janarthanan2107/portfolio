// import context
import { useDarkTheme } from "../../context/theme.Context";

const Footer = ({ smoothScrollTo, activeSection }) => {
  // use our theme context here!
  const { theme } = useDarkTheme();
  return (
    <div
      className={`footer h-[50vh] py-20 px-16 ${
        theme ? "bg-black" : "bg-bgShade"
      } z-10 transition duration-500 ease-out hover:ease-in`}
    >
      <div className="flex justify-between items-center border-b border-b-gray-500 pb-[3rem]">
        <div className="text-[2.5rem] text-blue-500">
          <i className="fa-solid fa-code"></i>
          <i className="fa-brands fa-dev"></i>
        </div>
        <div className="menu">
          <ul className="flex gap-7 text-[1.1150rem] font-medium">
            <li
              className={`cursor-pointer hover:text-primary hover:-translate-y-[5px] ${
                theme ? "text-white" : "text-black"
              }`}
              onClick={() => smoothScrollTo("home")}
            >
              Home
            </li>
            <li
              className={`cursor-pointer hover:text-primary hover:-translate-y-[5px] ${
                theme ? "text-white" : "text-black"
              }`}
              onClick={() => smoothScrollTo("skills")}
            >
              Skills
            </li>
            <li
              className={`cursor-pointer hover:text-primary hover:-translate-y-[5px] ${
                theme ? "text-white" : "text-black"
              }`}
              onClick={() => smoothScrollTo("portfolio")}
            >
              Portfolio
            </li>
            <li
              className={`cursor-pointer hover:text-primary hover:-translate-y-[5px] ${
                theme ? "text-white" : "text-black"
              }`}
              onClick={() => smoothScrollTo("form")}
            >
              Contact
            </li>
          </ul>
        </div>
        <div className="social-links">
          <ul className="flex gap-7 text-[1.5rem]">
            {/* <li
              className={`cursor-pointer hover:text-primary ${
                theme ? "text-white" : "text-black"
              }`}
            >
              <i className="fa-brands fa-facebook"></i>
            </li> */}
            <li
              className={`cursor-pointer hover:text-primary ${
                theme ? "text-white" : "text-black"
              }`}
            >
              <a
                href="https://www.instagram.com/ja_na_rth/?igshid=OGQ5ZDc2ODk2ZA%3D%3D"
                target="_blank"
              >
                <i className="fa-brands fa-instagram"></i>
              </a>
            </li>
            <li
              className={`cursor-pointer hover:text-primary ${
                theme ? "text-white" : "text-black"
              }`}
            >
              <a
                href="www.linkedin.com/in/janarthanan-v-fullstackdeveloper"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex justify-end pt-10">
        <ul className="flex gap-7 text-[0.9rem]">
          <li
            className={`cursor-pointer hover:text-primary ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Privacy Policy
          </li>
          <li
            className={`cursor-pointer hover:text-primary ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Terms of Service
          </li>
          <li
            className={`cursor-pointer hover:text-primary ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Cookies Settings
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
