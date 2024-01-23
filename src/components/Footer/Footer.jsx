import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

import LogoImage from "../../utils/images/icons/logo.jpg";

const Footer = () => {
  return (
    <footer className=" footer-bg bg-sky-500 p-10 pb-0  ">
      <div className="border-b-2 border-white">
        <div className="flex justify-around flex-col lg:flex-row  pb-5 md:px-16 lg:px-0">
          <div>
            <Fade direction="left">
              <img src={LogoImage} className="w-28 h-28 rounded-full mb-10" />
              <p className="text-white text-lg lg:w-96">
                Empowering a safer world through cutting-edge security solutions
                and unwavering commitment to safeguarding lives and assets.
              </p>
            </Fade>
          </div>
          <div className="flex flex-col  md:flex-row justify-between sm:w-96 mt-10">
            <Fade direction="up">
              <div className="flex flex-col mb-6 md:mb-0">
                <header className="text-xl  text-white font-bold  mb-4">
                  Links
                </header>
                <Link
                  to="/"
                  className="link link-hover text-white hover:text-yellow-400 my-2"
                >
                  Home
                </Link>
                <Link
                  to="/"
                  className="link link-hover text-white hover:text-yellow-400 my-2"
                >
                  About Us
                </Link>
                <Link
                  to="/"
                  className="link link-hover text-white hover:text-yellow-400 my-2"
                >
                  Security Services
                </Link>{" "}
                <Link
                  to="/"
                  className="link link-hover text-white hover:text-yellow-400 my-2"
                >
                  Career
                </Link>{" "}
                <Link
                  to="/"
                  className="link link-hover text-white hover:text-yellow-400 my-2"
                >
                  Contact Us
                </Link>
              </div>
            </Fade>
            <Fade direction="up">
              <div className="flex flex-col">
                <header className="text-xl text-white font-bold mb-4">
                  Company
                </header>
                <Link
                  to="/"
                  className="link link-hover text-white hover:text-yellow-400
                my-2"
                >
                  Terms and Conditions
                </Link>
                <Link
                  to="/"
                  className="link link-hover text-white hover:text-yellow-400
                my-2"
                >
                  Privacy policy
                </Link>
                <Link
                  to="/"
                  className="link link-hover text-white hover:text-yellow-400
                my-2"
                >
                  FAQs
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </div>
      <p className="text-center text-white text-xl py-5">
        Copyright ©2023 BKF.com
      </p>
    </footer>
  );
};

export default Footer;
