/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const AboutCardLeft = (props) => {
  return (
    <div className="flex justify-center lg:pt-24 mb-12">
      <div className="sm:w-5/6">
        <div className=" grid grid-cols-1 gap-2  lg:grid-cols-2   ">
          <div className="p-4 pb-0 flex flex-col justify-center  ">
            <p className="text-3xl md:text-5xl text-white  font-black my-5">
              {props.title}
            </p>
            <p className=" text-lg text-gray-200">{props.description}</p>
            <div>
              <Link to="/contactus" className="  ">
                <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 bg-gray-400 py-3 my-8 hover:bg-gray-500 px-8 font-semibold  text-black rounded-lg  text-lg">
                  Loslegen
                </button>
              </Link>
            </div>
          </div>
          <div className="p-4 flex justify-center flex-col">
            <Fade direction="right">
              <div>
                <img src={props.image} className="rounded-lg h-full w-full" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCardLeft;
