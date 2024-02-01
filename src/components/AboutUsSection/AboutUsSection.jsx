import About1 from "../../utils/images/aboutcards/about-6.jpg";
import About2 from "../../utils/images/aboutcards/about-1.jpg";

import AboutCardLeft from "../AboutCardLeft/AboutCardLeft";
import AboutCardRight from "../AboutCardRight/AboutCardRight";
const AboutUsSection = () => {
  return (
    <div className="flex justify-center ">
      <div className=" lg:mt-14 ">
        <AboutCardLeft
          title={"Wer sind wir?"}
          image={About1}
          description={
            "Bei All-In-1 sind wir mehr als nur ein Sicherheitsdienst – wir sind Ihre engagierten Partner im Schutz. Mit einem Bekenntnis zur Exzellenz liefern unsere erfahrenen Fachleute innovative Sicherheitslösungen, die auf Ihre einzigartigen Bedürfnisse zugeschnitten sind. Vertrauen Sie darauf, dass wir Standards neu definieren und umfassende Sicherheit in Wohn-, Unternehmens- und Veranstaltungsumgebungen bieten. Bei All-In-1 steht Ihre Sicherheit an erster Stelle."
          }
        />
        <AboutCardRight
          title={"Unsere Vision"}
          image={About2}
          description={
            "Bei All-In-1 ist unsere Vision, Sicherheit neu zu definieren und eine Zukunft zu gestalten, in der Sicherheit ein Grundrecht ist. Wir streben danach, führend in innovativen und personalisierten Sicherheitslösungen zu sein, indem wir Technologie und unerschütterliches Engagement nutzen, um das zu schützen, was für unsere Kunden am wichtigsten ist. Bei All-In-1 sehen wir eine Welt vor, in der Sicherheit nahtlos mit dem täglichen Leben verwoben ist und eine Umgebung ohne Bedrohungen und Sorgen fördert. Begleiten Sie uns dabei, eine sicherere und geschütztere Zukunft für alle zu gestalten."
          }
        />
      </div>
    </div>
  );
};

export default AboutUsSection;
