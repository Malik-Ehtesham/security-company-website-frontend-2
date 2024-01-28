import { useEffect } from "react";
import CtaSection from "../CtaSection/CtaSection";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import ServicesPageSection from "../ServicesPageSection/ServicesPageSection";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="min-h-screen">
      <Header />
      <ServicesPageSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Services;
