/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

// import CtaImage from "../../utils/Images/cta/cta-screen.png";
import CtaImage from "../../utils/images/aboutcards/about-1.jpg";
import ContactAnimation from "../ContactAnimation/ContactAnimation";

const CtaSection = () => {
  return (
    <div className=" flex  flex-col lg:flex-row justify-center items-center my-10">
      <div className="sm:w-5/6">
        <div className="lg:grid lg:grid-cols-12">
          <div className="flex flex-col  items-center lg:items-start justify-center px-4 lg:col-span-7">
            <p className=" text-center lg:text-start  text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight">
              Ready to
              <span className="text-sky-500 block">Secure your World?</span>
            </p>
            <p className="text-gray-700  text-lg sm:text-xl lg:text-lg xl:text-xl text-center lg:text-start  my-8 sm:w-3/5">
              Discover top-tier security for your home, business, or events with
              BKF. Contact us for a personalized assessment, and let's create a
              customized security plan just for you. Click below to prioritize
              safety today!
            </p>
            <div className="flex flex-col sm:flex-row items-center">
              <Link
                to="/contactus"
                className="btn btn-info text-white p-4 px-8 my-2 text-lg sm:me-4"
              >
                Get Started
              </Link>
              <Link
                to="/aboutus"
                className="btn btn-info btn-outline p-4 px-8  my-2 text-lg sm:mx-4"
              >
                Learn More
              </Link>
            </div>
          </div>
          <div className=" justify-center hidden lg:flex lg:col-span-5">
            <Fade direction="up">
              <ContactAnimation />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
