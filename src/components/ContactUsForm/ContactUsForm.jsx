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
        "service_dl5vngo",
        "template_nho43uu",
        form.current,
        "PJjfhBNaeGAwrNW6k"
      )
      .then(
        (result) => {
          toast.success("Nachricht gesendet!", {
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
        className="bg-sky-700 p-4 py-8 rounded-lg"
        onSubmit={handleSubmit(sendEmail)}
      >
        <div className="flex  flex-col justify-between items-center xl:flex-row my-2">
          <div className="w-full m-1 flex flex-col items-center ">
            <input
              {...register("user_name", { required: true })}
              type="text"
              placeholder="Name"
              name="user_name"
              className="input input-bordered input-info w-full  "
            />
            {errors.user_name && (
              <p className="font-bold text-center text-red-500 bg-white px-2 rounded-lg mt-1">
                Name ist erforderlich
              </p>
            )}
          </div>
          <div className="w-full m-1  flex flex-col items-center ">
            <input
              {...register("user_email", { required: true })}
              type="email"
              placeholder="Email"
              name="user_email"
              className="input input-bordered input-info w-full  "
            />
            {errors.user_email && (
              <p className="font-bold text-center text-red-500 bg-white px-2 rounded-lg mt-1">
                Email ist erforderlich
              </p>
            )}
          </div>
        </div>
        <div className="mt-3 xl:mt-5 flex justify-center flex-col items-center">
          <textarea
            {...register("message", { required: true })}
            placeholder="Nachricht"
            name="message"
            className="textarea textarea-bordered textarea-lg w-full h-48  "
          ></textarea>
          {errors.message && (
            <p className="font-bold text-center text-red-500 bg-white px-2 rounded-lg  mt-2">
              Nachricht ist erforderlich
            </p>
          )}
        </div>
        <div className="mt-5 ">
          <button className="btn btn-warning text-white w-full">
            Nachricht senden
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUsForm;
