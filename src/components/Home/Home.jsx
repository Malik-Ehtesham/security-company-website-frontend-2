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
        title={"Wer sind wir?"}
        image={About1}
        description={
          "Bei BKF sind wir mehr als nur ein Sicherheitsdienst – wir sind Ihre engagierten Partner im Schutz. Mit einem Bekenntnis zur Exzellenz liefern unsere erfahrenen Fachleute innovative Sicherheitslösungen, die auf Ihre einzigartigen Bedürfnisse zugeschnitten sind. Vertrauen Sie darauf, dass wir Standards neu definieren und umfassende Sicherheit in Wohn-, Unternehmens- und Veranstaltungsumgebungen bieten. Bei BKF steht Ihre Sicherheit an erster Stelle."
        }
      />
      <UniqueSection />
      <ServicesSection />
      <QuestionSection />
      <AboutCardRight
        title={"Einzugsgebiet"}
        image={MapImage}
        description={
          "In unserem Abschnitt Einzugsgebiet präsentieren wir stolz die umfangreichen Regionen, die von unseren Sicherheitsdienstleistungen abgedeckt werden. Unser Engagement für den Schutz erstreckt sich über das Rhein-Main-Gebiet und gewährleistet, dass Einzelpersonen, Wohnsitze und Unternehmen innerhalb dieses Gebiets von unseren umfassenden Sicherheitslösungen profitieren. Durch die strategische Definition unseres Einzugsgebiets streben wir danach, ein starkes und reaktionsschnelles Sicherheitsnetzwerk aufzubauen, das eine schnelle und effiziente Sicherung für unsere geschätzten Kunden ermöglicht. Erkunden Sie die Karte, um zu sehen, wie BKF als wachsamer Beschützer innerhalb dieser festgelegten Grenzen steht und Sicherheit bietet, wo es am wichtigsten ist."
        }
      />

      <CtaSection />
      <Footer />
    </div>
  );
};

export default Home;
