// import context
import { useDarkTheme } from "../../context/theme.Context";

// data's
import { projectsData } from "../../constant/constant";

// styles
import "./project.css";

const Projects = () => {
  // use our theme context here!
  const { theme } = useDarkTheme();
  return (
    <div className="projects">
      <div
        className={`h-auto pt-24 px-24 pb-20 ${
          theme ? "bg-zinc-900" : "bg-bgShade"
        } transition duration-500 ease-out hover:ease-in`}
      >
        <div className="heading flex justify-between">
          <div>
          <p
            className={`text-[1.2rem] font-bold ${
              theme ? "text-white" : "text-headingColor"
            } `}
          >
              Recent Projects
            </p>
            <p className={`text-[4rem] font-bold ${
              theme ? "text-white" : "text-headingColor"
            } `}>
              My Portfolio
            </p>
          </div>
          <div>
            <a href="https://github.com/Janarthanan2107" target="_blank">
              <button className="py-3 px-4 font-semibold border border-primary rounded-md bg-primary text-white hover:bg-white hover:text-primary transition duration-250 ease-out hover:ease-in">
                <i className="fa-brands fa-github mr-2"></i>Visit My Github
              </button>
            </a>
          </div>
        </div>
        <div className="mt-5 flex justify-center items-center">
          <div className="skill-container grid grid-cols-3 items-center justify-center gap-8">
            {projectsData.map((item) => {
              const { id, img, title, desc, live, link } = item;
              return (
                <div
                  className="card bg-white rounded-md hover:shadow-lg"
                  key={id}
                >
                  <div className="project-img-container">
                    <div className="project-img">
                      <img src={img} alt="project-img" className="rounded-md" />
                      <div className="details">
                        <a href={live}>
                          <button className="py-2 px-4 font-semibold border border-primary rounded-md bg-primary text-white hover:bg-white hover:text-primary transition duration-250 ease-out hover:ease-in">
                            Project live
                            <i className="fa-solid fa-arrow-right -rotate-45 mx-1"></i>
                          </button>
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 flex flex-col gap-4">
                    <p className="text-[1.5rem] font-semibold">{title}</p>
                    <p className="line-clamp-4 text-gray-500">{desc}</p>
                    <span className="mb-3">
                      <a
                        href={link}
                        className="text-[0.9rem] font-semibold pb-2 underline underline-offset-8 text-gray-600 hover:text-primary"
                      >
                        View in Github
                        <i className="fa-solid fa-arrow-right -rotate-45 mx-1"></i>
                      </a>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
