/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServicesCard = (props) => {
  return (
    <div
      className={`border-4 border-white rounded-lg w-80 min-[600px]:w-72 ${
        props.description
          ? "h-[40rem] min-[600px]:h-[43rem] : md:h-[54.2rem] lg:h-[44rem]"
          : "h-full"
      }  lg:w-96 shadow-lg mx-1`}
    >
      <img src={props.image} className="rounded-sm h-60 md:h-60 w-full" />
      <p className="font-bold mx-2 my-5 text-xl text-white">{props.title}</p>
      {props.description ? (
        <p className=" mx-2 my-5 text-sm leading-5 md:leading-normal md:text-base tracking-normal text-gray-200">
          {props.description}
        </p>
      ) : (
        <Link to="/services" className="">
          <button className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 border-2  border-gray-400 mb-4 bg-black py-3 hover:border-gray-500 hover:bg-gray-500 px-8 font-semibold  text-white hover:text-black rounded-lg  mx-2 text-lg">
            Mehr
          </button>
        </Link>
      )}
    </div>
  );
};

export default ServicesCard;
// border-2 border-white rounded-lg hover:bg-white
