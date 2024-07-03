import ci3 from "../assets/ci3.jpg";

const Translation = () => {
  return (
    <section>
      <div className="flex mt-16 items-center tracking-wide">
        <div className="w-[60%] ml-8">
          <h3 className="mt-8 text-7xl font-rethink w-fit">
            <p className="border-b-2 border-sec w-fit">Section 2</p>
            <p className="border-b-2 border-sec w-fit">Translation of </p>
            <p className="border-b-2 border-sec w-fit">Quran</p>
          </h3>
          <p className="mt-8 leading-relaxed">
            In this section, we will explore the meanings and interpretations of
            the Quran through its translation. Understanding the Quran in your
            native language allows you to grasp the profound messages, guidance,
            and wisdom that Allah has conveyed to humanity. By learning the
            translation of the Quran, you will gain deeper insights into its
            teachings and be able to connect more meaningfully with the words of
            Allah, enriching your spiritual journey and enhancing your practice
            of Islam.
          </p>
        </div>
        <div className="w-[30%] relative -z-20 ml-auto mr-16">
          <img
            src={ci3}
            className="rounded-full drop-shadow-[1rem_1rem_0rem_#c084fc]"
            alt=""
          />
        </div>
      </div>
    </section>
  );
};

export default Translation;
