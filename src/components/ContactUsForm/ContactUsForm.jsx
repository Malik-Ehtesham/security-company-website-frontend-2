import { useRef } from "react";
import { useForm } from "react-hook-form";
import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

const ContactUsForm = () => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const form = useRef();

  const sendEmail = () => {
    emailjs
      .sendForm(
        "service_urg84vl",
        "template_kwz9wpk",
        form.current,
        "2ENb1dKB2vl177E8V"
      )
      .then(
        (result) => {
          console.log("BOERTY");

          toast.success("Message Sent!", {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
          });

          setValue("user_name", "");
          setValue("user_email", "");
          setValue("message", "");
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="col-span-1">
      <form
        ref={form}
        className="bg-sky-500 p-4 py-8 rounded-lg"
        onSubmit={handleSubmit(sendEmail)}
      >
        <div className="flex  flex-col justify-between items-center xl:flex-row my-2">
          <input
            {...register("user_name", { required: true })}
            type="text"
            placeholder="Name"
            name="user_name"
            className="input input-bordered input-info w-full  m-1"
          />
          {errors.user_name && (
            <p className="font-bold text-center text-red-500 bg-white px-2 rounded-lg">
              Name is Required
            </p>
          )}
          <input
            {...register("user_email", { required: true })}
            type="email"
            placeholder="Email"
            name="user_email"
            className="input input-bordered input-info w-full m-1 "
          />
          {errors.user_email && (
            <p className="font-bold text-center text-red-500 bg-white px-2 rounded-lg">
              Email is Required
            </p>
          )}
        </div>
        <div className="mt-3 xl:mt-5 flex justify-center flex-col items-center">
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            name="message"
            className="textarea textarea-bordered textarea-lg w-full h-48  "
          ></textarea>
          {errors.message && (
            <p className="font-bold text-center text-red-500 bg-white px-2 rounded-lg  mt-2">
              Message is Required
            </p>
          )}
        </div>
        <div className="mt-5 ">
          <button className="btn btn-warning text-white w-full">
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
