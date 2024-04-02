import { Link } from "react-router-dom";

import { arrow } from "../assets/icons";

const HomeInfo = ({ currentStage }) => {
  if (currentStage === 1)
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Hi, I'm
          <span className="font-semibold mx-2 text-white">Seyeon Jo</span>
          👋
          <br />A UX Designer based in Toronto 🇨🇦
        </p>

        <Link to="/about" className="neo-brutalism-white neo-btn">
          Learn More
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>

      // <h1 className="sm:text-xl sm:leading-snug text-center neo-brutalism-purple py-4 px-8 text-white mx-5">
      //   Hi, I'm
      //   <span className="font-semibold mx-2 text-white">Seyeon Jo</span>
      //   👋
      //   <br />A UX Designer from Toronto!
      // </h1>
    );

  if (currentStage === 2) {
    return (
      <div className="info-box">
        <p className="font-medium text-center sm:text-xl">
          Worked with many projects <br /> and learned many skills along the way
        </p>

        <Link to="/projects" className="neo-brutalism-white neo-btn">
          Learn More
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>

      // <div className="info-box">
      //   <p className="font-medium sm:text-xl text-center">
      //     Do you want to learn more about me? <br /> If so, click below!
      //   </p>

      //   <Link to="/about" className="neo-brutalism-white neo-btn">
      //     Learn More
      //     <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      //   </Link>
      // </div>
    );
  }

  if (currentStage === 3) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Would you like to see my learning journey? <br /> Let's see! 👀
        </p>

        <Link to="/studies" className="neo-brutalism-white neo-btn">
          Learn More
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>

      // <div className="info-box">
      //   <p className="font-medium text-center sm:text-xl">
      //     Worked with many projects <br /> and learned many skills along the way
      //   </p>

      //   <Link to="/projects" className="neo-brutalism-white neo-btn">
      //     Learn More
      //     <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
      //   </Link>
      // </div>
    );
  }

  if (currentStage === 4) {
    return (
      <div className="info-box">
        <p className="font-medium sm:text-xl text-center">
          Would you like to be my friend? <br /> Let's connect! 🐰
        </p>

        <Link to="/contact" className="neo-brutalism-white neo-btn">
          Contact
          <img src={arrow} alt="arrow" className="w-4 h-4 object-contain" />
        </Link>
      </div>
    );
  }

  return null;
};

export default HomeInfo;
