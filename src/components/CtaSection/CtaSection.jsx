/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";
import { Fade } from "react-awesome-reveal";

// import CtaImage from "../../utils/Images/cta/cta-screen.png";
import CtaImage from "../../utils/images/aboutcards/about-1.jpg";
import ContactAnimation from "../ContactAnimation/ContactAnimation";

const CtaSection = () => {
  return (
    <div className=" flex  flex-col lg:flex-row justify-center items-center my-10">
      <div className="sm:w-5/6">
        <div className="lg:grid lg:grid-cols-12">
          <div className="flex flex-col  items-center lg:items-start justify-center px-4 lg:col-span-7">
            <p className=" text-center text-white lg:text-start  text-3xl md:text-4xl lg:text-4xl xl:text-5xl font-black leading-tight">
              Bereit zu
              <span className="text-yellow-400 block">
                Sichern Sie Ihre Welt?
              </span>
            </p>
            <p className="text-white text-lg sm:text-xl lg:text-lg xl:text-xl text-center lg:text-start  my-8 sm:w-3/5">
              Entdecken Sie mit All-In-1 erstklassige Sicherheit für Ihr
              Zuhause, Ihr Unternehmen oder Ihre Veranstaltungen. Kontaktieren
              Sie uns für eine individuelle Bewertung und lassen Sie uns einen
              maßgeschneiderten Sicherheitsplan speziell für Sie erstellen.
              Klicken Sie unten, um der Sicherheit noch heute Priorität
              einzuräumen!
            </p>
            <div className="flex flex-col sm:flex-row items-center">
              <Link
                to="/contactus"
                className="btn btn-warning  text-black rounded-lg  p-4 px-8 my-2 text-lg sm:me-4"
              >
                Loslegen
              </Link>
              <Link
                to="/aboutus"
                className="btn btn-warning  text-black rounded-lg  btn-outline p-4 px-8  my-2 text-lg sm:mx-4"
              >
                Erfahren Sie mehr
              </Link>
            </div>
          </div>
          <div className=" justify-center hidden lg:flex lg:col-span-5">
            <Fade direction="up">
              <ContactAnimation />
            </Fade>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CtaSection;
