import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Subheading from "../components/UI/Subheading";
import { contactLinks } from "../constant/constant";
import Input from "../components/UI/Input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { contactSchema } from "../utils/schema";
import Textarea from "../components/UI/Textarea";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(contactSchema) });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <section>
      <Subheading subheading={"contact us"} />
      {/* https://www.instagram.com/direct/t/17846087030622824/ */}
      <div className="mt-12">
        <div className="sm:w-3/5 md:px-10 mt-6 sm:mt-0 mx-auto">
          <form
            className="flex flex-col bg-box py-6 px-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <h3 className="text-2xl text-center font-rethink border-b-2 border-sec w-fit mx-auto  mb-6">
              Feedback
            </h3>
            <Input label="name" register={register} required />
            {errors.name && (
              <p className="text-red-600 text-xs">{errors.name.message}</p>
            )}
            <Input label="subject" register={register} required />
            {errors.subject && (
              <p className="text-red-600 text-xs">{errors.subject.message}</p>
            )}
            <Input label="email" register={register} required />
            {errors.email && (
              <p className="text-red-600 text-xs">{errors.email.message}</p>
            )}
            <Textarea
              label="message"
              className="h-28"
              register={register}
              required
            />
            {errors.message && (
              <p className="text-red-600 text-xs">{errors.message.message}</p>
            )}
            <button
              type="button"
              className="bg-sec py-2 mt-8 rounded-md focus-visible:outline-none focus-visible:bg-white"
            >
              Submit
            </button>
          </form>
          <div className="contact-info-box w-full pl-[0.30rem] h-full my-8 ">
            <div className="icons flex gap-8 items-center justify-center">
              {contactLinks.map((link, i) => {
                return (
                  <a
                    key={i}
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-xl border-2 border-sec sm:text-2xl text-white grid place-items-center sm:size-16 size-10 rounded-full hover:bg-transparent hover:scale-125 transition-transform"
                  >
                    <FontAwesomeIcon icon={link.icon} />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
