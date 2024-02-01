import QuestionAccordion from "../QuestionAccordion/QuestionAccordion";
import { Link } from "react-router-dom";

const QuestionSection = () => {
  return (
    <div className="flex justify-center">
      <div className="sm:w-5/6">
        <div className="flex flex-col justify-between items-center lg:flex-row pb-5 lg:pb-10 lg:pt-10">
          <div className="p-4 flex justify-center flex-col items-center lg:items-start">
            <p className="text-center lg:text-start text-4xl md:text-5xl font-black text-white">
              Haben Sie <span className="text-gray-500">Fragen?</span>
            </p>
            <p className="text-center lg:text-start text-4xl md:text-5xl font-black text-white">
              Wir haben Antworten!
            </p>
            <p className="text-white text-center lg:text-start text-lg sm:text-xl mt-5">
              Finden Sie hier keine Antwort? Senden Sie uns einfach eine
              Nachricht für jede Anfrage.
            </p>
            <Link
              to="/contactus"
              className="transition ease-in-out hover:-translate-y-1 hover:scale-110 duration-300 bg-gray-400 py-3 my-8 hover:bg-gray-500 px-8 font-semibold  text-black rounded-lg  text-lg"
            >
              Kontaktiere uns
            </Link>
          </div>
          <div className="lg:w-5/6 flex flex-col items-center">
            <QuestionAccordion
              question="Welche Sicherheitslösungen bieten Sie an?"
              answer="Unsere umfassenden Dienstleistungen umfassen Überwachung, Zugangskontrolle, Alarmanlagen und speziell geschultes Sicherheitspersonal. Ob für private oder geschäftliche Bedürfnisse, wir bieten maßgeschneiderte Lösungen für einen robusten Schutz."
            />
            <QuestionAccordion
              question="Bieten Sie Rund-um-die-Uhr Überwachungsdienste an?"
              answer="Ja, unser Engagement für Ihre Sicherheit gilt rund um die Uhr. Unsere 24/7 Überwachungsdienste garantieren kontinuierlichen Schutz mit schnellen Reaktionen auf mögliche Sicherheitsvorfälle."
            />
            <QuestionAccordion
              question="Was macht Ihr Sicherheitspersonal besonders?"
              answer="Unser Sicherheitspersonal zeichnet sich durch rigoroses Training, Auswahl nach Fachkenntnissen, Professionalität und ein festes Engagement für die Sicherheit unserer Kunden aus. Sie sind ein integraler Bestandteil unserer umfassenden Sicherheitsstrategie."
            />
            <QuestionAccordion
              question="Wie gehen Sie mit Notfallsituationen um?"
              answer="In Notfallsituationen folgt unser Team detaillierten Reaktionsplänen, handelt schnell und effizient, um die Situation zu bewältigen. Wir koordinieren auch nahtlos mit den örtlichen Behörden, wenn erforderlich, um eine umfassende Notfallantwort zu gewährleisten."
            />
            <QuestionAccordion
              question="Entsprechen Ihre Dienstleistungen den Branchenstandards?"
              answer="Ja, wir sind stolz darauf, uns an die höchsten Branchenstandards und -vorschriften zu halten. Unsere Sicherheitsdienstleistungen sind darauf ausgelegt, die Sicherheitsanforderungen der relevanten Behörden zu erfüllen oder zu übertreffen, um höchste Zuverlässigkeit und Professionalität in allen Aspekten unserer Angebote zu gewährleisten."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
