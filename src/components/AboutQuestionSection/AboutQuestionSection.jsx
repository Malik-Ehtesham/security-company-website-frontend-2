import QuestionAccordion from "../QuestionAccordion/QuestionAccordion";
// import "./AboutQuestionSection.css";
const AboutQuestionSection = () => {
  return (
    <div className=" flex justify-center flex-col items-center py-5">
      <div className="sm:w-5/6">
        <p className=" text-center text-3xl md:text-4xl lg:text-5xl font-black">
          Any <span className="text-white">Fragen?</span>
        </p>
        <p className=" text-center text-3xl md:text-4xl lg:text-5xl font-black">
          Wir haben Antworten!
        </p>
      </div>
      <div className="my-5 mt-10 flex flex-col justify-center items-center ">
        <QuestionAccordion
          question="Welche Arten von Sicherheitsüberwachung bieten Sie an?"
          answer="Unsere Sicherheitsüberwachung umfasst Videoüberwachung, Alarmverfolgung, und intelligente Sicherheitstechnologien, die eine umfassende Sicherheitsabdeckung für private und gewerbliche Bedürfnisse bieten."
        />
        <QuestionAccordion
          question="Wie erfolgt die Beantragung einer Sicherheitsbewertung für mein Unternehmen?"
          answer="Die Beantragung einer Sicherheitsbewertung ist unkompliziert. Nutzen Sie unser Kontaktformular, um eine Beratung anzufordern, und wir werden schnellstmöglich eine Bewertung planen. Unsere Experten empfehlen dann maßgeschneiderte Sicherheitslösungen entsprechend Ihrer individuellen Anforderungen."
        />
        <QuestionAccordion
          question="Welche Qualifikationen haben Ihre Sicherheitsmitarbeiter?"
          answer="Unsere Sicherheitsmitarbeiter zeichnen sich durch umfassende Schulung, Fachkenntnisse, Professionalität und ein starkes Engagement für die Sicherheit unserer Kunden aus. Sie sind integraler Bestandteil unserer umfassenden Sicherheitskonzepte."
        />
        <QuestionAccordion
          question="Können Sie bestehende Sicherheitssysteme in meine Geschäftsumgebung integrieren?"
          answer="Selbstverständlich. Wir sind darauf spezialisiert, unsere Sicherheitslösungen nahtlos in bestehende Systeme zu integrieren, um eine verbesserte Funktionalität und eine durchgängige Sicherheitsinfrastruktur gemäß Ihren spezifischen Anforderungen zu gewährleisten."
        />
        <QuestionAccordion
          question="Bieten Sie Rund-um-die-Uhr Überwachungsdienste an?"
          answer="Ja, unser Engagement für Ihre Sicherheit gilt rund um die Uhr. Unsere 24/7 Überwachungsdienste sorgen für kontinuierlichen Schutz mit schnellen Reaktionen auf potenzielle Sicherheitsvorfälle."
        />
        <QuestionAccordion
          question="Wie reagieren Sie auf Notfallsituationen?"
          answer="In Notfallsituationen folgt unser Team detaillierten Reaktionsplänen, handelt schnell und effizient, um die Situation zu bewältigen. Wir arbeiten eng mit örtlichen Behörden zusammen, wenn erforderlich, um eine umfassende Notfallreaktion zu gewährleisten."
        />
        <QuestionAccordion
          question="Kann ich Sicherheitspakete nach meinen Anforderungen anpassen?"
          answer="Absolut. Wir erkennen an, dass jeder Kunde einzigartige Sicherheitsanforderungen hat. Unser Team arbeitet eng mit Ihnen zusammen, um personalisierte Sicherheitspakete zu erstellen, die Ihre spezifischen Anliegen ansprechen und maßgeschneiderte Lösungen bieten."
        />
        <QuestionAccordion
          question="In welchen Gebieten bieten Sie Sicherheitsdienste an?"
          answer="Unsere Dienstleistungen erstrecken sich über [Liste der Gebiete/Städte/Regionen, die abgedeckt werden]. Kontaktieren Sie uns für Informationen zur Verfügbarkeit an Ihrem Standort und um Ihre Sicherheitsbedürfnisse zu besprechen."
        />
        <QuestionAccordion
          question="Wie kann ich mit Ihrem Team für weitere Informationen in Kontakt treten?"
          answer="Die Kontaktaufnahme ist unkompliziert. Sie können uns über unser benutzerfreundliches Kontaktformular auf der Website erreichen, unsere dedizierte Telefonleitung anrufen oder während der regulären Geschäftszeiten unser Büro besuchen. Unser Team steht bereit, um bei Anfragen oder Anliegen zu helfen."
        />
        <QuestionAccordion
          question="Entsprechen Ihre Dienstleistungen den Branchenstandards?"
          answer="Ja, wir sind stolz darauf, uns an die höchsten Branchenstandards und Vorschriften zu halten. Unsere Sicherheitsdienstleistungen sind darauf ausgerichtet, die Sicherheitsanforderungen der relevanten Behörden zu erfüllen oder sogar zu übertreffen, um höchste Zuverlässigkeit und Professionalität in jeder Hinsicht unserer Angebote zu gewährleisten."
        />
      </div>
    </div>
  );
};

export default AboutQuestionSection;
