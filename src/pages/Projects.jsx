import { Link } from "react-router-dom";

import { CTA } from "../components";
import { projects } from "../constants";
import { arrow } from "../assets/icons";

const Projects = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="drop-shadow font-semibold">
          Projects
        </span>
      </h1>

      <p className="text-slate-500 mt-4 leading-relaxed">
        I have worked on various projects such as school assignments,
        hackathons, and group projects. Through these experiences, I have
        learned a lot, and below are some of the projects I have worked on.
      </p>

      <div className="flex flex-wrap my-20 gap-16">
        {projects.map((project) => (
          <div className="lg:w-[400px] w-full" key={project.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${project.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={project.iconUrl}
                  alt="threads"
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {project.name}
              </h4>
              <p className="mt-2 text-slate-500">{project.description}</p>
              <div className="mt-5 flex items-center gap-2 font-poppins">
                <Link
                  to={project.caseLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn font-semibold text-black-600"
                >
                  Learn More
                </Link>
                <img
                  src={arrow}
                  alt="arrow"
                  className="w-4 h-4 object-contain"
                />
             {/* Github link will be on case study page like figma link
                <Link
                  to={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn font-semibold text-black-600"
                >
                  Github
                </Link> */}
              </div>
            </div>
          </div>
        ))}
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default Projects;
