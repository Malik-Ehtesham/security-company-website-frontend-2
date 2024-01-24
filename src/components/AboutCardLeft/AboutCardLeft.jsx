import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

const AboutCardLeft = (props) => {
  return (
    <div className="flex justify-center mt-20 mb-16">
      <div className="sm:w-5/6">
        <div className=" grid grid-cols-1  lg:grid-cols-2   ">
          <div className="p-4 py-10 lg:py-0 2xl:py-10">
            <p className="text-3xl md:text-5xl  font-black my-5">
              {props.title}
            </p>
            <p className=" text-lg">{props.description}</p>
            <Link
              to="/pricing"
              className="btn  btn-info text-white text-lg py-4 px-8 my-8"
            >
              Get Started
            </Link>
          </div>
          <Fade direction="right">
            <div className="p-2 flex justify-center lg:my-14 xl:my-0">
              <img src={props.image} className="rounded-lg" />
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
};

export default AboutCardLeft;
