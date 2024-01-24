/* eslint-disable react/prop-types */

const ServicesCard = (props) => {
  return (
    <div className="border-4 border-sky-500 rounded-lg w-64 md:w-80 shadow-lg mx-1 hover:bg-slate-100">
      <img src={props.image} className="rounded-sm h-44 md:h-52 w-full" />
      <p className="font-bold mx-2 my-5 text-xl">{props.title}</p>
      <button className=" btn btn-outline btn-info font-bold py-2 px-6 mx-2 mb-5 text-lg">
        More
      </button>
    </div>
  );
};

export default ServicesCard;
// border-2 border-sky-500 rounded-lg hover:bg-sky-500
