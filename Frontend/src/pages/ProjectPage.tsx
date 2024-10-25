import { useEffect } from "react";
import { allProjects } from "../utils/data";

const ProjectPage = () => {
  useEffect(() => {
    const scroller = document.getElementById("root");
    scroller?.scroll(0, 0);
  }, []);

  return (
    <div className="h-[100vh bg-[#c5c5c5] w-full">
      <h2 className="text-[3rem] font-bold pt-[7rem] xxl:pt-[9rem] px-4 text-center">
        All Projects
      </h2>

      <div className="columns-[3_350px] w-[90%] mx-auto py-[4rem]">
        {allProjects.map((element, index) => {
          return (
            <div className="relative" key={index}>
              <img
                src={element.url}
                alt={element.name}
                className="w-[800px] mb-[1em] rounded-md"
              />
              
              <div className="absolute z-10 bottom-[0%] bg-[#000000BF] w-full text-white flex justify-center items-center h-[2.5em]">{element.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProjectPage;
