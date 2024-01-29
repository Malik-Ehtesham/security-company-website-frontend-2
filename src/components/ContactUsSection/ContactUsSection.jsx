import ContactUsForm from "../ContactUsForm/ContactUsForm";

const ContactUsSection = () => {
  return (
    <div className="flex justify-center lg:pt-40 lg:pb-20">
      <div className="px-3 sm:px-0 sm:w-5/6 flex flex-col lg:grid lg:grid-cols-2 lg:gap-2">
        <div className="col-span-1 flex flex-col justify-center mt-5 lg:mt-10 mb-10">
          <p className="text-4xl font-black text-sky-500 mb-5">
            Get in Touch with BKF
          </p>
          <p className="text-lg ">
            Whether you have inquiries, require more information about our
            security services, or wish to discuss a customized solution for your
            specific needs, we are here to assist you. Please use the contact
            form to reach out to us. Our dedicated team will respond promptly to
            address your questions and provide the support you need. Thank you
            for considering BKF for your security requirements.
          </p>
        </div>
        <ContactUsForm />
      </div>
    </div>
  );
};

export default ContactUsSection;
