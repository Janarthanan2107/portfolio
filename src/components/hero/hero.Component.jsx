// import context
import { useDarkTheme } from "../../context/theme.Context";

const Hero = () => {
  // use our theme context here!
  const { theme } = useDarkTheme();
  return (
    <div className="hero">
      <div
        className={`h-screen p-20 ${
          theme ? "bg-zinc-900" : "bg-bgShade"
        }  grid grid-cols-2 justify-center items-center gap-10 transition duration-500 ease-out hover:ease-in`}
      >
        <div className="hero-content font-semibold flex flex-col">
          <p className={`text-[1.2rem] ${theme ? "text-white" : "text-black"}`}>
            Hey, I'm Janarthanan
          </p>
          <p
            className={`text-[4rem] font-bold ${
              theme ? "text-white" : "text-black"
            }`}
          >
            Full Stack <span className="text-primary">Developer</span>
          </p>
          <p className="text-[1.2rem] text-gray-500">
            With a love for crafting responsive and user-centric web
            applications, I'm dedicated to building digital solutions that stand
            out and reflect my diverse portfolio of innovative projects,
            delivering results that matter.
          </p>
          <div className="contact-container mt-5">
            <button className="py-3 px-4 font-semibold border border-primary rounded-md bg-primary text-white hover:bg-white hover:text-primary transition duration-250 ease-out hover:ease-in">
              Get in touch
            </button>
          </div>
        </div>
        <div className="hero-img flex justify-center">
          <img
            src="/assets/dev-pic/dp.jpg"
            alt="dev-pic"
            className="rounded-[50%] shadow-lg shadow-indigo-500/50"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
