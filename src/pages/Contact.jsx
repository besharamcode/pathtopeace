import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Subheading from "../components/UI/Subheading";
import { contactLinks } from "../constant/constant";

const Contact = () => {
  return (
    <section>
      <Subheading subheading={"contact us"} />
      {/* https://www.instagram.com/direct/t/17846087030622824/ */}
      <div className="mt-12">
        <div className="sm:w-3/5 md:px-10 mt-6 sm:mt-0 mx-auto">
          <form className="flex flex-col border py-6 px-8 ">
            <h3 className="text-2xl text-center font-rethink border-b-2 border-sec w-fit mx-auto  mb-6">
              Feedback
            </h3>
            <input
              name="name"
              className="change bg-transparent  border px-2 py-1 rounded mb-4 w-full"
              type="text"
              placeholder="Name"
            />

            <input
              name="subject"
              className="change bg-transparent  border px-2 py-1 rounded mb-4 w-full"
              type="text"
              placeholder="Subject"
            />

            <input
              name="email"
              className="change bg-transparent  border px-2 py-1 rounded mb-4 w-full"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="change bg-transparent  border px-2 py-1 rounded mb-4 resize-none  w-full"
              name="desc"
              id="desc"
              cols="30"
              rows="3"
              placeholder="Message"
            ></textarea>
            <button
              type="button"
              className="bg-sec py-2 rounded-md focus-visible:outline-none focus-visible:bg-white"
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
