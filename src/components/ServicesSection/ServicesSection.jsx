import { Link } from "react-router-dom";
import Service1 from "../../utils/images/servicecards/service-4.jpg";
import Service2 from "../../utils/images/servicecards/service-11.jpg";
import Service3 from "../../utils/images/servicecards/service-10.jpg";
import ServicesCard from "../ServicesCard/ServicesCard";

const ServicesSection = () => {
  return (
    <div className="flex justify-center mt-10  p-2 sm:p-0">
      <div className="sm:w-5/6">
        <div>
          <p className="text-center text-3xl sm:text-5xl font-bold text-white my-2">
            <span className="text-gray-500">Sicherheits</span>
            -Dienstleistungen
          </p>
          <p className="text-center text-lg sm:text-xl font-medium tracking-wide mb-10 p-8 sm:p-0 text-gray-200">
            Herzlich willkommen bei All-In-1, wo Sicherheit auf Einfachheit
            trifft. Unser Engagement ist klar: Ihre Sicherheit. Unsere
            maßgeschneiderten Lösungen, unterstützt von einem engagierten Team,
            gewährleisten einen Schutzschild um das, was für Sie am wichtigsten
            ist. Erkunden Sie die Gelassenheit mit All-In-1 – hier ist
            Sicherheit nicht nur ein Service; es ist unsere Mission.
          </p>
        </div>

        <div className="flex justify-around  flex-wrap overflow-auto gap-y-5  items-center py-5">
          <ServicesCard title={"Eigentumsschutz"} image={Service1} />
          <ServicesCard title={"Feueruhr"} image={Service2} />
          <ServicesCard title={"Bewachung"} image={Service3} />
        </div>
        <div className="flex justify-center my-5">
          <Link
            to="/services"
            className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300  bg-gray-400 py-5 my-8 hover:bg-gray-500 px-8 font-semibold  text-black   text-lg rounded-full  "
          >
            Mehr sehen
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
