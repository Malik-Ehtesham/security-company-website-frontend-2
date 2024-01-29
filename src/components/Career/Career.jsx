import React, { useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import CareerSection from "../CareerSection/CareerSection";
import CtaSection from "../CtaSection/CtaSection";
import QuestionSection from "../QuestionSection/QuestionSection";

const Career = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Header />
      <CareerSection />
      <QuestionSection />
      <CtaSection />
      <Footer />
    </div>
  );
};

export default Career;
