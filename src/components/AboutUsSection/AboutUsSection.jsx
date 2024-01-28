import About1 from "../../utils/images/aboutcards/about-2.jpg";

import AboutCardLeft from "../AboutCardLeft/AboutCardLeft";
import AboutCardRight from "../AboutCardRight/AboutCardRight";
const AboutUsSection = () => {
  return (
    <div className="flex justify-center ">
      <div className=" lg:mt-14 ">
        <AboutCardLeft
          title={"Who Are We?"}
          image={About1}
          description={
            "At BKF, we're more than just a security service – we're your dedicated partners in protection. With a commitment to excellence, our experienced professionals deliver innovative security solutions tailored to your unique needs. Trust us to redefine standards and provide comprehensive security across residential, corporate, and event environments. At BKF, your safety is our top priority"
          }
        />
        <AboutCardRight
          title={"Our Vision"}
          image={About1}
          description={
            "At BKF, our vision is to redefine security, envisioning a future where safety is a fundamental right. We aspire to be leaders in innovative and personalized security solutions, leveraging technology and unwavering commitment to protect what matters most to our clients. At BKF, we foresee a world where security seamlessly intertwines with daily existence, fostering an environment free from threats and concerns. Join us in shaping a safer and more secure future for all"
          }
        />
      </div>
    </div>
  );
};

export default AboutUsSection;
