/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const ServicesCard = (props) => {
  return (
    <div
      className={`border-4 border-sky-700 rounded-lg w-80 min-[600px]:w-72 ${
        props.description
          ? "h-[40rem] min-[600px]:h-[43rem] : md:h-[54.2rem] lg:h-[44rem]"
          : "h-full"
      }  lg:w-96 shadow-lg mx-1 hover:bg-slate-100`}
    >
      <img src={props.image} className="rounded-sm h-60 md:h-60 w-full" />
      <p className="font-bold mx-2 my-5 text-xl">{props.title}</p>
      {props.description ? (
        <p className=" mx-2 my-5 text-sm leading-5 md:leading-normal md:text-base tracking-normal">
          {props.description}
        </p>
      ) : (
        <Link
          to="/services"
          className=" btn btn-outline btn-info font-bold py-2 px-6 mx-2 mb-5 text-lg"
        >
          Mehr
        </Link>
      )}
    </div>
  );
};

export default ServicesCard;
// border-2 border-sky-700 rounded-lg hover:bg-sky-700
