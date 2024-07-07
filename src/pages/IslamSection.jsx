import ci4 from "../assets/ci4.jpg";
import { islamTopics } from "../constant/constant";

const IslamSection = () => {
  return (
    <section>
      <div className="mt-20 tracking-wide">
        <div className="md:w-[30%] sm:w-4/6 w-4/5 relative -z-20 mx-auto">
          <img
            src={ci4}
            className="rounded-full drop-shadow-[1rem_1rem_0rem_#c084fc]"
            alt=""
          />
        </div>
        <div>
          <h3 className="md:mt-8 mt-16 md:text-7xl text-5xl font-rethink w-fit ">
            <p className="border-b-2 border-sec w-fit">Section 3</p>
            <p className="border-b-2 border-sec w-fit">I.S.L.A.M.</p>
            <p className="text-base mt-2 font-medium">
              (I sincerely love Allah Subhana wa Ta&apos;ala and His Messenger)
            </p>
          </h3>
          <p className="mt-8 leading-relaxed mb-8">
            In this section, we embark on a thorough journey to understand the
            essence of Islam, delving into its core beliefs, practices, and
            teachings.
          </p>
          <ul>
            {islamTopics.map((topic, i) => {
              return (
                <li className="list-inside list-disc mb-4" key={i}>
                  <span className="font-semibold">{topic.topic}</span>:{" "}
                  <span>{topic.desc}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default IslamSection;
