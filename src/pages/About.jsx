import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import { CTA } from "../components";
import { experiences, skills } from "../constants";

import "react-vertical-timeline-component/style.min.css";

const About = () => {
  return (
    <section className="max-container">
      <h1 className="head-text">
        Hello, I'm{" "}
        <span className="font-semibold purple-gradient_text drop-shadow">
          {" "}
          Seyeon
        </span>{" "}
        👋
      </h1>

      <div className="mt-5 flex flex-col gap-3 text-slate-500">
        <p>
          UX Designer based in Toronto, specializing in Software Engineering and
          Digital Experience Design.
        </p>
      </div>

      {/* Photo, Introduction, and Resume Section */}
      <div className="flex flex-row mt-10 items-center">
        {/* Photo */}
        <div className="flex-1 flex justify-center items-start">
          <img
            src="/profile.jpeg" // Replace with the correct path to your photo
            alt="Seyeon"
            className="rounded-full max-w-[300px]" // Adjust as necessary
          />
        </div>

        {/* Introduction and Resume */}
        <div className="flex-1 ml-5">
          <p className="text-slate-500">
            UX Designer from Toronto with a background in Software Engineering and a passion for creating intuitive digital experiences.
          </p>
          {/* Resume Summary or Link */}
          <p className="mt-4 text-slate-500">
            My journey has been driven by a love for design that solves real problems, enhances usability, and delights users. I thrive on collaboration, bringing innovative solutions to complex challenges. Let's connect and create something impactful together.
          </p>
          {/* You can also add a downloadable link to your resume */}
          <a href="/resume.pdf" target="_blank" className="bg-purple-600 text-white hover:bg-purple-700 font-medium py-2 px-4 rounded mt-4 inline-block">
          Download My Resume
          </a>
        </div>
      </div>

      <div className="py-10 flex flex-col mt-10">
        <h3 className="subhead-text">My Skills</h3>

        <div className="mt-16 flex flex-wrap gap-12">
          {skills.map((skill) => (
            <div className="block-container w-20 h-20" key={skill.name}>
              <div className="btn-back rounded-xl" />
              <div className="btn-front rounded-xl flex justify-center items-center">
                <img
                  src={skill.imageUrl}
                  alt={skill.name}
                  className="w-1/2 h-1/2 object-contain"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="py-16">
        <h3 className="subhead-text">Work Experience</h3>
        <div className="mt-5 flex flex-col gap-3 text-slate-500">
          <p>
            I've worked as a UX Designer, leveling up my skills and teaming up
            with smart people. Here's the rundown:
          </p>
        </div>

        <div className="mt-12 flex">
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <VerticalTimelineElement
                key={experience.company_name}
                date={experience.date}
                iconStyle={{ background: experience.iconBg }}
                icon={
                  <div className="flex justify-center items-center w-full h-full">
                    <img
                      src={experience.icon}
                      alt={experience.company_name}
                      className="w-[60%] h-[60%] object-contain"
                    />
                  </div>
                }
                contentStyle={{
                  borderBottom: "8px",
                  borderStyle: "solid",
                  borderBottomColor: experience.iconBg,
                  boxShadow: "none",
                }}
              >
                <div>
                  <h3 className="text-black text-xl font-poppins font-semibold">
                    {experience.title}
                  </h3>
                  <p
                    className="text-black-500 font-medium text-base mt-100"
                    // style={{ margin: 0 }}
                  >
                    {experience.company_name}
                  </p>
                </div>

                <ul className="my-5 list-disc ml-5 space-y-2">
                  {experience.points.map((point, index) => (
                    <li
                      key={`experience-point-${index}`}
                      className="text-black-500/50 font-normal pl-1 text-sm"
                    >
                      {point}
                    </li>
                  ))}
                </ul>
              </VerticalTimelineElement>
            ))}
          </VerticalTimeline>
        </div>
      </div>

      <hr className="border-slate-200" />

      <CTA />
    </section>
  );
};

export default About;
