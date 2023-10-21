// data
import { skillsData } from "../../constant/constant";

const Skills = () => {
  return (
    <div className="skills">
      <div className="h-screen bg-white p-24">
        <div className="heading mt-5">
          <p className="text-[1.2rem] font-bold text-headingColor">My Skills</p>
          <p className="text-[4rem] font-bold text-headingColor">My Expertise</p>
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
