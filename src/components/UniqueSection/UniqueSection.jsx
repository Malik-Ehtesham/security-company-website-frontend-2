import { Fade } from "react-awesome-reveal";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const UniqueSection = () => {
  return (
    <div className="my-">
      <Fade direction="up">
        <p className=" text-center text-3xl md:text-4xl lg:text-5xl font-black mb-5">
          What Make Us <span className="text-sky-500">Unique</span>
        </p>

        <div className=" py-12 flex bg-sky-500 bg-opacity-100 flex-col bg-sky- lg:justify-center lg:items-center px-5 ps-10 sm:ps-28 lg:ps-0">
          <div className="flex flex-col lg:flex-row lg:my-3 justify-around w-5/6">
            <p className=" font-medium text-white text-xl lg:mx-5 my-1">
              <CheckCircleIcon className="text-yellow-400 " /> Security Services
            </p>
            <p className=" font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400" /> Surveillance
              Solutions
            </p>
            <p className=" font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400" /> Access Control
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:my-3 lg:w-5/6 lg:justify-around">
            <p className=" font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400 x" /> Safety Solutions
            </p>
            <p className=" font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400 " /> Security
              Consulting
            </p>
            <p className=" font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400 " /> 24/7 Monitoring
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:my-3 lg:w-5/6 lg:justify-around">
            <p className=" font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400 x" /> CCTV
              Installation
            </p>
            <p className=" font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400 " /> Biometric
              Security
            </p>
            <p className=" font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400 " /> Alarm Systems
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default UniqueSection;
