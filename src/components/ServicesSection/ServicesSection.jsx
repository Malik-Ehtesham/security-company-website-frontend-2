import Service1 from "../../utils/images/servicecards/service-1.jpg";
import Service2 from "../../utils/images/servicecards/service-2.jpg";
import Service3 from "../../utils/images/servicecards/service-3.jpg";
import ServicesCard from "../ServicesCard/ServicesCard";

const ServicesSection = () => {
  return (
    <div className="flex justify-center my-10 p-2 sm:p-0">
      <div className="sm:w-5/6">
        <div>
          <p className=" text-center text-3xl sm:text-5xl font-bold my-2">
            <span className="text-sky-500"> Security</span> Services
          </p>
          <p className="text-center  text-lg sm:text-xl font-medium tracking-wide mb-10 p-8 sm:p-0">
            Welcome to BKF, where security meets simplicity. Our commitment is
            clear: your safety. Our tailored solutions, backed by a dedicated
            team, ensure a protective shield around what matters most to you.
            Explore peace of mind with BKF – where security is not just a
            service; it's our mission.
          </p>
        </div>
        <div className="flex justify-around  flex-wrap overflow-auto gap-y-5  items-center py-5">
          <ServicesCard title={"Property Protection"} image={Service1} />
          <ServicesCard title={"Fire Watch"} image={Service2} />
          <ServicesCard title={"Guarding"} image={Service3} />
        </div>
        <div className="flex justify-center my-5">
          <button className="btn text-white rounded-full  btn-lg btn-info ">
            See More
          </button>
        </div>
      </div>
    </div>
  );
};

export default ServicesSection;
