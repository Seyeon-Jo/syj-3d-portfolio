import { Link } from "react-router-dom";

import { CTA } from "../components";
import { studies } from "../constants";
import { arrow } from "../assets/icons";

const Studies = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        My{" "}
        <span className="drop-shadow purple-gradient_text font-semibold">
          Learning
        </span>
      </h1>
      <p className="text-slate-500 mt-4 leading-relaxed">
        I share insights and discoveries from my ongoing learning journey.
        Explore a variety of topics, from programming languages to design
        principles, as I document my growth and exploration in the world of
        technology and beyond.
      </p>
      <div className="flex flex-wrap my-20 gap-16">
        {studies.map((study) => (
          <div className="lg:w-[400px] w-full" key={study.name}>
            <div className="block-container w-12 h-12">
              <div className={`btn-back rounded-xl ${study.theme}`} />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={study.iconUrl}
                  alt={study.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>

            <div className="mt-5 flex flex-col">
              <h4 className="text-2xl font-poppins font-semibold">
                {study.name}
              </h4>
              <p className="mt-2 text-slate-500">{study.description}</p>
              <div className="mt-5 text-purple-600 flex items-center gap-2 font-poppins">
                <Link
                  to={study.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className=" font-semibold text-black-600"
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
                  to={study.githubLink}
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
      <CTA />{" "}
      {/* This assumes that CTA is generic and not specific to projects */}
    </section>
  );
};

export default Studies;
