import { Link } from "react-router-dom";
import "./HomeSection.css";
import { TypeAnimation } from "react-type-animation";

const HomeSection = () => {
  return (
    <div className="sm:flex sm:justify-center">
      <div className="sm:w-5/6">
        <div className="flex flex-col  my-20 lg:my-52 2xl:my-56 p-5 px-5 sm:px-0">
          <p className="text-4xl min-[500px]:text-4xl xl:text-6xl  font-black text-white">
            Ihre Sicherheit, unsere Priorität
          </p>
          <p className="text-3xl min-[500px]:text-4xl xl:text-6xl  font-bold sm:font-black text-gray-400 xl:text-black">
            <TypeAnimation
              preRenderFirstString={true}
              sequence={[
                500,
                "Für Sicherheit über Grenzen hinweg sorgen", // initially rendered starting point
                1000,
                "Erhöhung der Sicherheitsstandards",
                1000,
                "Ihre vertrauenswürdige Sicherheitslösung",
                500,
              ]}
              speed={25}
              repeat={Infinity}
            />
          </p>
          <div>
            <Link
              to="/contactus"
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 bg-gray-400 py-4 md:py-5 my-8 hover:bg-gray-500 px-8 font-semibold  text-black rounded-lg  text-lg"
            >
              Loslegen
            </Link>
            <Link
              to="/aboutus"
              className="btn btn-outline   text-white  rounded-lg  md:btn-lg my-6  mx-4"
            >
              Erfahren Sie mehr
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
