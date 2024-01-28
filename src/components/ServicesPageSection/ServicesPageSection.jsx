import { Fade } from "react-awesome-reveal";
import Service1 from "../../utils/images/servicecards/service-1.jpg";
import Service2 from "../../utils/images/servicecards/service-2.jpg";
import Service3 from "../../utils/images/servicecards/service-3.jpg";
import ServicesCard from "../ServicesCard/ServicesCard";

const ServicesPageSection = () => {
  return (
    <div className="flex justify-center lg:pt-24  ">
      <div className="sm:w-5/6">
        <Fade direction="left">
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
        </Fade>
        <div className="flex justify-around  flex-wrap overflow-auto gap-y-5  items-center py-5">
          <ServicesCard
            title={"Property Protection"}
            image={Service1}
            description="Ensure the safety and security of your property with our comprehensive Property Protection services. At BKF, we prioritize safeguarding your assets. Our expert team employs cutting-edge technologies and strategic solutions to mitigate risks and deter potential threats. From residential properties to commercial estates, our tailored approach ensures a vigilant and responsive security presence. Trust us to protect what matters most to you, providing peace of mind for property owners and occupants alike."
          />
          <ServicesCard
            title={"Fire Watch"}
            image={Service2}
            description="Elevate your fire safety measures with our comprehensive Fire Watch Service at BKF. Our dedicated team of trained professionals provides vigilant monitoring to mitigate potential fire risks during temporary periods of heightened vulnerability. With a commitment to safeguarding your assets, our service offers a reliable layer of protection. Trust BKF to stand guard, offering a professional Fire Watch Service to enhance the safety of your premises."
          />
          <ServicesCard
            title={"Guarding"}
            image={Service3}
            description="Guarding with precision and vigilance, our security personnel at BKF stand as unwavering sentinels, dedicated to safeguarding your premises and assets. Meticulously trained and highly professional, our guards provide a visible deterrent to potential threats and ensure a secure environment. Whether it's securing your business, residence, event, or construction site, our guarding service is your frontline defense. Trust BKF for a robust guarding service that goes beyond expectations."
          />{" "}
          <ServicesCard
            title={"Patrol duty"}
            image={Service1}
            description="
            Engage in the proactive defense of your premises with our Patrol Duty service. Our highly trained security personnel conduct vigilant patrols, ensuring a visible and deterrent presence. Whether safeguarding residential areas, commercial spaces, or event venues, our patrols are tailored to prevent security breaches and respond swiftly to any emerging threats. With a focus on prevention, our Patrol Duty service plays a pivotal role in maintaining a secure environment. Choose a proactive approach to security with BKF."
          />
          <ServicesCard
            title={"Construction site monitoring"}
            image={Service2}
            description="Our Construction Site Monitoring service is your vigilant eye on the job. At BKF, we understand the unique security challenges of construction sites. Our comprehensive monitoring solutions provide real-time surveillance, access control, and risk management. With advanced technologies and expert personnel, we ensure the safety of your construction site. Partner with us to fortify your construction project with robust security, allowing you to focus on progress with peace of mind."
          />
          <ServicesCard
            title={"Door Man"}
            image={Service3}
            description="
            Elevate the security of your establishment with our premium Doorman service. Our courteous and professional doormen are not just guardians of entry; they are the embodiment of a welcoming and secure environment. Trained to provide a seamless blend of hospitality and security, our doormen ensure that every entry is controlled, every guest is greeted with respect, and your premises are protected. Trust us to stand at the forefront, safeguarding your premises with the utmost professionalism."
          />{" "}
          <ServicesCard
            title={"Personal Protection"}
            image={Service1}
            description="Your safety is our priority. Our personal protection service at BKF is designed to provide you with a dedicated layer of security in various situations. Whether you're a high-profile individual, a public figure, or simply someone seeking added peace of mind, our trained professionals are committed to ensuring your safety. Trust BKF for a reliable and confidential personal protection service tailored to your unique needs."
          />
          <ServicesCard
            title={"Hostesses"}
            image={Service2}
            description="
            Our hostesses service is designed to elevate your events and create a lasting impression on your guests. Our team of skilled and professional hostesses is committed to providing top-notch hospitality, ensuring a seamless and delightful experience for your attendees. From warm greetings to efficient event coordination, our hostesses contribute to the overall success of your occasion. Choose our hostess service for events that leave a lasting positive impression."
          />
          <ServicesCard
            title={"Reception services"}
            image={Service3}
            description="Our Reception Services redefine first impressions, offering a seamless and professional welcome to your guests and clients. At BKF, we understand the importance of a positive initial encounter. From managing visitor registrations to handling inquiries with courtesy and precision, our reception services aim to elevate the hospitality standards of your establishment. Trust us to be the face of your business, ensuring a welcoming atmosphere that leaves a lasting impression."
          />
        </div>
      </div>
    </div>
  );
};

export default ServicesPageSection;
