import QuestionAccordion from "../QuestionAccordion/QuestionAccordion";
import { Link } from "react-router-dom";

const QuestionSection = () => {
  return (
    <div className="flex justify-center">
      <div className="sm:w-5/6">
        <div className="flex flex-col justify-between items-center lg:flex-row pb-5 lg:pb-10 lg:pt-10">
          <div className="p-4 flex justify-center flex-col items-center lg:items-start">
            <p className="text-center lg:text-start text-4xl md:text-5xl font-black">
              Haben Sie <span className="text-sky-700">Fragen?</span>
            </p>
            <p className="text-center lg:text-start text-4xl md:text-5xl font-black">
              Wir haben Antworten!
            </p>
            <p className="text-gray-900 text-center lg:text-start text-lg sm:text-xl mt-5">
              Finden Sie hier keine Antwort? Senden Sie uns einfach eine
              Nachricht für jede Anfrage.
            </p>
            <Link
              to="/contactus"
              className="btn btn-info text-white px-8 p-4 mt-8 text-lg"
            >
              Kontaktiere uns
            </Link>
          </div>
          <div className="lg:w-5/6 flex flex-col items-center">
            <QuestionAccordion
              question="Welche Sicherheitsdienstleistungen bieten Sie an?"
              answer="Unsere umfassenden Dienstleistungen umfassen Überwachung, Zugangskontrolle, Alarmanlagen und speziell geschultes Sicherheitspersonal. Ob für private oder geschäftliche Bedürfnisse, wir bieten maßgeschneiderte Lösungen für einen robusten Schutz."
            />
            <QuestionAccordion
              question="Bieten Sie 24/7 Überwachungsdienste an?"
              answer="Ja, unser Engagement für Ihre Sicherheit erstreckt sich rund um die Uhr. Unsere 24/7 Überwachungsdienste garantieren kontinuierlichen Schutz mit schnellen Reaktionen auf mögliche Sicherheitsvorfälle."
            />
            <QuestionAccordion
              question="Was macht Ihr Sicherheitspersonal besonders?"
              answer="Unser Sicherheitspersonal zeichnet sich durch rigoroses Training, Auswahl aufgrund von Fachkenntnissen, Professionalität und einem festen Engagement für die Sicherheit unserer Kunden aus. Sie sind ein integraler Bestandteil unserer umfassenden Sicherheitsstrategie."
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
