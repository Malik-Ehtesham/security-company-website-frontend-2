import { Fade } from "react-awesome-reveal";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

const UniqueSection = () => {
  return (
    <div className="my-">
      <Fade direction="up">
        <p className="text-center text-3xl md:text-4xl lg:text-5xl font-black mb-5 p-0.5">
          Was uns <span className="text-sky-700">einzigartig macht</span>
        </p>

        <div className="py-12 flex bg-sky-700 bg-opacity-100 flex-col bg-sky- lg:justify-center lg:items-center px-5 ps-10 sm:ps-28 lg:ps-0">
          <div className="flex flex-col lg:flex-row lg:my-3 justify-around w-5/6">
            <p className="font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400" /> 24/7 Überwachung
            </p>
            <p className="font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400" />{" "}
              Überwachungslösungen
            </p>
            <p className="font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400" /> Zutrittskontrolle
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:my-3 lg:w-5/6 lg:justify-around">
            <p className="font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400 x" />{" "}
              Sicherheitslösungen
            </p>
            <p className="font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400" />{" "}
              Sicherheitsberatung
            </p>

            <p className="font-medium text-white text-xl lg:mx-5 my-1">
              <CheckCircleIcon className="text-yellow-400" />{" "}
              Sicherheitsdienstleistungen
            </p>
          </div>
          <div className="flex flex-col lg:flex-row lg:my-3 lg:w-5/6 lg:justify-around">
            <p className="font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400 x" />{" "}
              CCTV-Installation
            </p>
            <p className="font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400" /> Biometrische
              Sicherheit
            </p>
            <p className="font-medium text-white text-xl lg:mx-5 my-1">
              {" "}
              <CheckCircleIcon className="text-yellow-400" /> Alarmsysteme
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default UniqueSection;
