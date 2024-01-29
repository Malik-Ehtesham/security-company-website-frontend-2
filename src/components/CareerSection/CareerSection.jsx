import HandShakeImage from "../../utils/images/careercards/handshake.jpg";

import AboutCardLeft from "../AboutCardLeft/AboutCardLeft";

const CareerSection = () => {
  return (
    <div className="xl:py-16 2xl:py-20">
      <AboutCardLeft
        image={HandShakeImage}
        title="Start Your Career With Us"
        description="BKF is seeking committed security personnel with Section 34a training and successful completion of a competency test. If you're interested, kindly submit your application documents to info@bkf.com. We provide competitive compensation that surpasses industry standards"
      />
    </div>
  );
};

export default CareerSection;
