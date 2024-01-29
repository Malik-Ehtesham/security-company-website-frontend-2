import { useEffect } from "react";

import AboutUsSection from "../AboutUsSection/AboutUsSection";

import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import QuestionSection from "../QuestionSection/QuestionSection";
import UniqueSection from "../UniqueSection/UniqueSection";
import AboutQuestionSection from "../AboutQuestionSection/AboutQuestionSection";
import CtaSection from "../CtaSection/CtaSection";

const AboutUs = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <AboutUsSection />
      <UniqueSection />
      <AboutQuestionSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default AboutUs;
