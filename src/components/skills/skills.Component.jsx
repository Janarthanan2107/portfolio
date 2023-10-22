// import context
import { useDarkTheme } from "../../context/theme.Context";
// data
import { skillsData } from "../../constant/constant";

// style
import "./skills.css"

const Skills = () => {
  // use our theme context here!
  const { theme } = useDarkTheme();
  return (
    <div className="skills relative" id="skills">
      <div
        className={`p-20 ${
          theme ? "bg-zinc-900" : "bg-white"
        } transition duration-500 ease-out hover:ease-in`}
      >
        {theme && (
          <span className="absolute -top-24 right-10 flex justify-end animated-bounce">
            <img
              src="assets/decor/software-development.png"
              alt="decor"
              className="h-[150px]"
            />
          </span>
        )}
        <div className="heading mt-5">
          <p
            className={`text-[1.2rem] font-bold ${
              theme ? "text-white" : "text-headingColor"
            } `}
          >
            My Skills
          </p>
          <p
            className={`text-[4rem] font-bold ${
              theme ? "text-white" : "text-headingColor"
            } `}
          >
            My Expertise
          </p>
        </div>
        <div className="h-[55vh] flex justify-center items-center">
          <div className="skill-container grid grid-cols-4 items-center justify-center gap-8">
            {skillsData.map((item) => {
              const { id, img, skill, desc } = item;
              return (
                <div
                  className="card bg-bgShade rounded-md p-5 h-80 min-h-full hover:border-b-[3.5px] hover:border-primary"
                  key={id}
                >
                  <img src={img} alt="frontend" />
                  <p className="text-[1.5rem] font-bold mt-2">{skill}</p>
                  <p className="text-gray-600 mt-2">{desc}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
