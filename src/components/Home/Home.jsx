import AboutCardLeft from "../AboutCardLeft/AboutCardLeft";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import HomeSection from "../HomeSection/HomeSection";
import ServicesSection from "../ServicesSection/ServicesSection";

import About1 from "../../utils/images/aboutcards/about-2.jpg";
import UniqueSection from "../UniqueSection/UniqueSection";

const Home = () => {
  return (
    <div className=" min-h-screen ">
      <div className="home-page min-h-screen ">
        <Header />
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
      <Footer />
    </div>
  );
};

export default Home;
