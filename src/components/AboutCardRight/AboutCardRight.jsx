import { useMediaQuery } from "react-responsive";
import { Fade } from "react-awesome-reveal";
import { Link } from "react-router-dom";

const AboutCardRight = (props) => {
  const isLg = useMediaQuery({ maxWidth: 1024 });
  return isLg ? (
    <div className=" flex justify-center">
      <div className="sm:w-5/6">
        <div className=" grid grid-cols-1  lg:grid-cols-2   lg:my-24">
          <div className="p-4 py-12">
            <p className="text-3xl md:text-5xl font-black my-6">
              {props.title}
            </p>
            <p className="text-lg">{props.description}</p>
            <Link
              to="/pricing"
              className="btn  btn-info text-white text-lg py-4 px-8 my-12"
            >
              Get Started
            </Link>
          </div>
          <Fade direction="left">
            <div className="p-2 flex justify-center">
              <img src={props.image} className="rounded-lg" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  ) : (
    <div className="flex justify-center">
      <div className="sm:w-5/6">
        <div className=" grid grid-cols-1  lg:grid-cols-2 lg:my-24">
          <Fade direction="left">
            <div className="p-2 flex justify-center">
              <img src={props.image} className="rounded-lg" />
            </div>
          </Fade>
          <div className="p-4">
            <p className="text-3xl md:text-5xl  font-black my-6">
              {props.title}
            </p>
            <p className=" text-lg">{props.description}</p>

            <Link
              to="/pricing"
              className="btn  btn-info text-white text-lg py-4 px-8 my-12"
            >
              Get Started
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutCardRight;
