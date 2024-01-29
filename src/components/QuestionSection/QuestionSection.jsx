import QuestionAccordion from "../QuestionAccordion/QuestionAccordion";

import { Link } from "react-router-dom";

const QuestionSection = () => {
  return (
    <div className="flex justify-center">
      <div className=" sm:w-5/6 ">
        <div className="flex flex-col justify-between items-center lg:flex-row   pb-5 lg:pb-10 lg:pt-10">
          <div className="p-4 flex justify-center flex-col items-center lg:items-start">
            <p className=" text-center lg:text-start text-4xl md:text-5xl font-black  ">
              Any <span className="text-sky-500"> Questions?</span>
            </p>
            <p className=" text-center lg:text-start text-4xl md:text-5xl font-black  ">
              We have Answers!
            </p>
            <p className="text-gray-900 text-center lg:text-start text-lg sm:text-xl mt-5">
              Don’t find your answer here? Just send us a message for any query.
            </p>
            <Link
              to="/contactus"
              className="btn btn-info text-white px-8 p-4 mt-8 text-lg"
            >
              Contact Us
            </Link>
          </div>
          <div className="lg:w-5/6 flex flex-col items-center">
            <QuestionAccordion
              question="What security services do you offer?"
              answer="Our comprehensive services encompass surveillance, access control, alarm installations, and dedicated security personnel. Whether for residential or commercial needs, we provide tailored solutions for robust protection."
            />
            <QuestionAccordion
              question="Do you offer 24/7 monitoring services?"
              answer="Yes, our commitment to your safety extends around the clock. Our 24/7 monitoring services guarantee continuous protection, with swift responses to any potential security incidents."
            />
            <QuestionAccordion
              question="What makes your security personnel different?"
              answer="Our security personnel stand out due to their rigorous training, selection based on expertise, professionalism, and a steadfast commitment to ensuring the safety of our clients. They form an integral part of our comprehensive security approach."
            />
            <QuestionAccordion
              question="How do you handle emergency response situations?"
              answer="In emergency situations, our team follows detailed response plans, acting swiftly and efficiently to address the situation. We also coordinate seamlessly with local authorities when necessary, ensuring a comprehensive emergency response."
            />
            <QuestionAccordion
              question="Are your services compliant with industry standards?"
              answer="Yes, we pride ourselves on adhering to the highest industry standards and regulations. Our security services are designed to meet or exceed the security requirements outlined by relevant authorities, ensuring utmost reliability and professionalism in every aspect of our offerings.




              "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuestionSection;
