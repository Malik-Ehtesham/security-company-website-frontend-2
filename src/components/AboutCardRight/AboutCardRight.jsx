/* eslint-disable react/prop-types */
import { useMediaQuery } from "react-responsive";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const AboutCardRight = (props) => {
  const isLg = useMediaQuery({ maxWidth: 1024 });
  return isLg ? (
    <div className=" flex justify-center">
      <div className="sm:w-5/6">
        <div className=" grid grid-cols-1  lg:grid-cols-2   lg:my-24">
          <div className="px-4  flex flex-col justify-center">
            <p className="text-3xl md:text-5xl font-black my-6">
              {props.title}
            </p>
            <p className="text-lg">{props.description}</p>
            <div>
              <Link
                to="/contactus"
                className="btn  btn-info text-white text-lg py-4 px-8 my-12"
              >
                Loslegen
              </Link>
            </div>
          </div>
          <div className="p-4 flex justify-center flex-col ">
            <Fade direction="left">
              <div>
                <img src={props.image} className="rounded-lg" />
              </div>
            </Fade>
          </div>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <div className="sm:w-5/6">
        <div className=" grid grid-cols-1  lg:grid-cols-2 lg:my-8">
          <div className="px-4 flex justify-center flex-col ">
            <Fade direction="left">
              <div>
                <img src={props.image} className="rounded-lg" />
              </div>
            </Fade>
          </div>
          <div className="p-4 pb-0 flex flex-col justify-center">
            <p className="text-3xl md:text-5xl  font-black my-6">
              {props.title}
            </p>
            <p className=" text-lg">{props.description}</p>
            <div>
              <Link
                to="/contactus"
                className="btn  btn-info text-white text-lg py-4 px-8 my-12"
              >
                Loslegen
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCardRight;
