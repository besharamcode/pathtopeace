import Subheading from "../components/UI/Subheading";
import TextPurple from "../components/UI/TextPurple";

const Contact = () => {
  return (
    <section>
      <Subheading subheading={"contact us"} />
      {/* https://www.instagram.com/direct/t/17846087030622824/ */}
      <div className="flex justify-between items-center mt-12 md:flex-row flex-col">
        <div className="contact-info-box w-full pl-[0.30rem] h-full">
          <h3 className="text-xl text-center mb-4 ">
            Connect through our socials
          </h3>
          <div className="icons flex gap-4 items-center justify-center">
            <a
              href="https://www.instagram.com/direct/t/17846087030622824/"
              target="_blank"
              rel="noreferrer"
              className="text-xl sm:text-2xl  text-white grid place-items-center sm:size-12 size-10 rounded-full hover:bg-transparent hover: hover:border-2 hover:"
            >
              {/* <FontAwesomeIcon icon={faInstagram} /> */}
            </a>
            <a
              href="https://www.linkedin.com/in/fazilath-ar-368851293/"
              target="_blank"
              rel="noreferrer"
              className="text-xl sm:text-2xl  text-white grid place-items-center sm:size-12 size-10 rounded-full hover:bg-transparent hover: hover:border-2 hover:"
            >
              {/* <FontAwesomeIcon icon={faLinkedin} /> */}
            </a>
            <a
              href="mailto:fazilathar856@gmail.com"
              target="_blank"
              rel="noreferrer"
              className="text-xl sm:text-2xl  text-white grid place-items-center sm:size-12 size-10 rounded-full hover:bg-transparent hover: hover:border-2 hover:"
            >
              {/* <FontAwesomeIcon icon={faEnvelope} /> */}
            </a>
          </div>
        </div>
        <div className="sm:w-11/12 md:px-10 mt-6 sm:mt-0">
          <form className="flex flex-col border py-6 px-8 ">
            <h3 className="text-xl text-center mb-6">
              I Did <TextPurple word={"Something"} /> For You?
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
        </div>
      </div>
    </section>
  );
};

export default Contact;
