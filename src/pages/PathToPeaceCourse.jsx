import q from "../assets/ci1.svg";
import b from "../assets/ci2.jpg";
import ci3 from "../assets/ci3.jpg";
import ci4 from "../assets/ci4.jpg";

const PathToPeaceCourse = () => {
  return (
    <section>
      {/* <div className="absolute right-0 bottom-0 w-full overflow-hidden rotate-180">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
            className="relative block w-[calc(100%+1.3px)] h-auto"
          >
            <path
              d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
              className="fill-box"
            ></path>
          </svg>
        </div> */}
      <div className="flex mt-28 items-center tracking-wide">
        <div className="w-[60%] ml-8">
          <p className="font-josefin text-lg">
            Let&apos;s Learn Somthing About Path To Peace
          </p>
          <h3 className="mt-8 text-7xl font-rethink w-fit">
            <p className="border-b-2 border-sec w-fit">What Is Path To</p>
            <p className="border-b-2 border-sec w-fit">Peace</p>
          </h3>
          <p className="mt-8 leading-relaxed">
            This Islamic course is designed to teach you basic Islamic knowledge
            and Muslim beliefs. Learn tajweed, explore the beautiful teachings
            of Islam, and understand the words of Allah. Discover your purpose
            of existence by studying Islam from the comfort of your home through
            authentic sources (Quran and Hadith).
          </p>
        </div>
        <div className="">
          <div className="w-[50%] relative -z-20 ml-auto mr-16">
            <img
              src={q}
              className="drop-shadow-[1rem_1rem_0rem_#c084fc]"
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="flex mt-60 items-center tracking-wide">
        <div className="w-[40%]">
          <img
            src={b}
            className="rounded-full relative -z-10 w-[70%] mx-auto drop-shadow-[-1rem_-1rem_0rem_#c084fc]"
            alt=""
          />
        </div>
        <div className="w-[50%] ml-auto pr-8">
          <h3 className="mt-8 text-7xl font-rethink w-fit ">
            <p className="border-b-2 border-sec w-fit">Section 1 </p>
            <p className="border-b-2 border-sec w-fit">Tajweed</p>
          </h3>
          <p className="mt-8 leading-relaxed">
            In this section, we will delve into the principles and practices of
            Tajweed, the science of correctly pronouncing the words of the
            Quran. Tajweed ensures that each letter is articulated from its
            proper origin and that the rules of pronunciation are adhered to,
            thereby enhancing the beauty and clarity of Quranic recitation.
          </p>
        </div>
      </div>
      <div className="flex mt-60 items-center tracking-wide">
        <div className="w-[60%] ml-8">
          <h3 className="mt-8 text-7xl font-rethink w-fit">
            <p className="border-b-2 border-sec w-fit">Section 2</p>
            <p className="border-b-2 border-sec w-fit">Translation of </p>
            <p className="border-b-2 border-sec w-fit">Quran</p>
          </h3>
          {/* <h3 className="mt-8 text-7xl font-rethink w-fit">
            <p className="border-b-2 border-sec w-fit">Section 3</p>
            <p className="border-b-2 border-sec w-fit">I.S.L.A.M.</p>
          </h3> */}
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
      <div className="flex mt-60 mb-36 items-center tracking-wide">
        <div className="w-[30%] relative -z-20 mr-16">
          <img
            src={ci4}
            className="rounded-full drop-shadow-[1rem_1rem_0rem_#c084fc]"
            alt=""
          />
        </div>
        <div className="w-[50%] ml-auto pr-8">
          <h3 className="mt-8 text-7xl font-rethink w-fit ">
            <p className="border-b-2 border-sec w-fit">Section 3</p>
            <p className="border-b-2 border-sec w-fit">I.S.L.A.M.</p>
          </h3>
          <p className="mt-8 leading-relaxed">
            In this section, we will delve into the principles and practices of
            Tajweed, the science of correctly pronouncing the words of the
            Quran. Tajweed ensures that each letter is articulated from its
            proper origin and that the rules of pronunciation are adhered to,
            thereby enhancing the beauty and clarity of Quranic recitation.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PathToPeaceCourse;
