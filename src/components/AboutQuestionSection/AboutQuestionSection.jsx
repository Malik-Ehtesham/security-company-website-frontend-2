import QuestionAccordion from "../QuestionAccordion/QuestionAccordion";
// import "./AboutQuestionSection.css";
const AboutQuestionSection = () => {
  return (
    <div className=" flex justify-center flex-col items-center py-5">
      <div className="sm:w-5/6">
        <p className=" text-center text-3xl md:text-4xl lg:text-5xl font-black">
          Any <span className="text-sky-500">Questions?</span>
        </p>
        <p className=" text-center text-3xl md:text-4xl lg:text-5xl font-black">
          We have Answers!
        </p>
      </div>
      <div className="my-5 mt-10 flex flex-col justify-center items-center ">
        <QuestionAccordion
          question="What security services do you offer?"
          answer="We provide a comprehensive range of security services, including surveillance, access control, alarms, and security personnel for both residential and commercial needs."
        />
        <QuestionAccordion
          question="How can I request a security assessment for my property?"
          answer="Initiating a security assessment is simple. Utilize our contact form to request a consultation, and we'll promptly schedule an assessment. Our team will then recommend customized security solutions based on your unique requirements."
        />
        <QuestionAccordion
          question="What makes your security personnel different?"
          answer="Our security personnel stand out due to their rigorous training, selection based on expertise, professionalism, and a steadfast commitment to ensuring the safety of our clients. They form an integral part of our comprehensive security approach."
        />
        <QuestionAccordion
          question="Can I integrate existing security systems with your services?"
          answer="Certainly. We specialize in seamlessly integrating our security solutions with your current systems, ensuring enhanced functionality and a cohesive security infrastructure that aligns with your specific needs."
        />
        <QuestionAccordion
          question="Do you offer 24/7 monitoring services?"
          answer="Yes, our commitment to your safety extends around the clock. Our 24/7 monitoring services guarantee continuous protection, with swift responses to any potential security incidents."
        />
        <QuestionAccordion
          question="How do you handle emergency response situations?"
          answer="In emergency situations, our team follows detailed response plans, acting swiftly and efficiently to address the situation. We also coordinate seamlessly with local authorities when necessary, ensuring a comprehensive emergency response."
        />
        <QuestionAccordion
          question="Can I customize security packages to suit my needs?"
          answer="Absolutely. We understand that each client has unique security requirements. Our team collaborates closely with you to create personalized security packages that address your specific concerns and provide a tailored solution."
        />
        <QuestionAccordion
          question="What areas do you provide security services in?"
          answer="Our services extend to [list the areas/cities/regions you cover]. Feel free to contact us to inquire about our availability in your specific location and discuss your security needs."
        />
        <QuestionAccordion
          question="How do I get in touch with your team for more information?"
          answer="Getting in touch is convenient. You can reach us through our user-friendly contact form on the website, call our dedicated phone line, or visit our office during regular business hours. Our team is ready to assist with any inquiries or concerns."
        />
        <QuestionAccordion
          question="Are your services compliant with industry standards?"
          answer="Yes, we pride ourselves on adhering to the highest industry standards and regulations. Our security services are designed to meet or exceed the security requirements outlined by relevant authorities, ensuring utmost reliability and professionalism in every aspect of our offerings."
        />
      </div>
    </div>
  );
};

export default AboutQuestionSection;
