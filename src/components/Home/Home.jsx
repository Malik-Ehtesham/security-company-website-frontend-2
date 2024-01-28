import AboutCardLeft from "../AboutCardLeft/AboutCardLeft";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomeSection from "../HomeSection/HomeSection";
import ServicesSection from "../ServicesSection/ServicesSection";

import About1 from "../../utils/images/aboutcards/about-2.jpg";
import MapImage from "../../utils/images/map/map.jpg";
import UniqueSection from "../UniqueSection/UniqueSection";
import QuestionSection from "../QuestionSection/QuestionSection";
import AboutCardRight from "../AboutCardRight/AboutCardRight";
import CtaSection from "../CtaSection/CtaSection";
import { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className=" min-h-screen ">
      <div className="home-page min-h-screen ">
        <Header page="Home" />
        <HomeSection />
      </div>
      <AboutCardLeft
        title={"Who Are We?"}
        image={About1}
        description={
          "At BKF, we're more than just a security service – we're your dedicated partners in protection. With a commitment to excellence, our experienced professionals deliver innovative security solutions tailored to your unique needs. Trust us to redefine standards and provide comprehensive security across residential, corporate, and event environments. At BKF, your safety is our top priority"
        }
      />
      <UniqueSection />
      <ServicesSection />
      <QuestionSection />
      <AboutCardRight
        title={"Catchment Area"}
        image={MapImage}
        description={
          "In our Catchment Area section, we proudly present the expansive regions covered by our security services. Our commitment to safeguarding extends across Rhine-Main Area, ensuring that individuals, residences, and businesses within this territory benefit from our comprehensive security solutions. By strategically defining our catchment area, we strive to establish a strong and responsive security network, enabling swift and efficient protection for our valued clients. Explore the map to see how BKF stands as a vigilant guardian within these designated boundaries, providing peace of mind and security where it matters most."
        }
      />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;
