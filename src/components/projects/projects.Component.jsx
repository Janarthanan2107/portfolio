import { projectsData } from "../../constant/constant";

const Projects = () => {
  return (
    <div className="projects">
      <div className="h-auto bg-bgShade p-24">
        <div className="heading mt-5 flex justify-between">
          <div>
            <p className="text-[1.2rem] font-bold text-headingColor">
              Recent Projects
            </p>
            <p className="text-[3rem] mt-2 font-bold text-headingColor">
              My Portfolio
            </p>
          </div>
          <div>
            <button className="py-3 px-4 font-semibold border border-primary rounded-md bg-primary text-white hover:bg-white hover:text-primary transition duration-250 ease-out hover:ease-in">
              Visit My Github
            </button>
          </div>
        </div>
        <div className="mt-5 flex justify-center items-center">
          <div className="skill-container grid grid-cols-3 items-center justify-center gap-8">
            {/* {projectsData.map((item) => {
              const { id, img, title, desc, link } = item;
              return (
                <div
                  className="card bg-white rounded-md hover:shadow-lg"
                  key={id}
                >
                  <img src={img} alt="project-img" className="rounded-md" />
                  <div className="p-3 flex flex-col gap-4">
                    <p className="text-[1.5rem] font-semibold">{title}</p>
                    <p className="line-clamp-4 text-gray-500">{desc}</p>
                    <span className="mb-3">
                      <a
                        href={link}
                        className="text-[0.9rem] font-semibold pb-2 underline underline-offset-8 text-gray-600 hover:text-primary"
                      >
                        View in Github
                        <i class="fa-solid fa-arrow-right -rotate-45 mx-1"></i>
                      </a>
                    </span>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;