import HandShakeImage from "../../utils/images/careercards/handshake.jpg";

import AboutCardLeft from "../AboutCardLeft/AboutCardLeft";

const CareerSection = () => {
  return (
    <div className="xl:py-16 2xl:py-20">
      <AboutCardLeft
        image={HandShakeImage}
        title="Starten Sie Ihre Karriere mit uns"
        description="BKF sucht engagierte Sicherheitsmitarbeiter mit Section 34a-Schulung und erfolgreich bestandenem Kompetenztest. Wenn Sie interessiert sind, senden Sie bitte Ihre Bewerbungsunterlagen an info@bkf.com. Wir bieten eine wettbewerbsfähige Vergütung, die Branchenstandards übertrifft."
      />
    </div>
  );
};

export default CareerSection;
