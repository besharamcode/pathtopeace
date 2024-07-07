import ci1 from "../../assets/ci1.svg";

const WhatIsPathToPeace = () => {
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
      <div className="flex md:mt-60 sm:mt-40 mt-28 items-center tracking-wide flex-col md:flex-row">
        <div className="w-fit">
          <img
            src={ci1}
            className="md:ml-16 relative mx-auto -z-10 w-1/2 bg-box rounded-full p-8 drop-shadow-[1rem_1rem_0rem_#c084fc]"
            alt=""
          />
        </div>
        <div className="md:w-3/4 md:mt-0 mt-16">
          <p className="font-josefin md:text-lg">
            Let&apos;s Learn Somthing About Path To Peace
          </p>
          <h3 className="md:mt-8 mt-2 md:text-7xl text-5xl font-rethink w-fit">
            <p className="border-b-2 border-sec w-fit">What Is Path To</p>
            <p className="border-b-2 border-sec w-fit">Peace</p>
          </h3>
          <p className="md:mt-8 mt-3 leading-relaxed">
            This is Islamic course designed to teach you basic Islamic knowledge
            and Muslim beliefs. Learn tajweed, explore the beautiful teachings
            of Islam, and understand the words of Allah. Discover your purpose
            of existence by studying Islam from the comfort of your home through
            authentic sources (Quran and Hadith).
          </p>
        </div>
      </div>
    </section>
  );
};

export default WhatIsPathToPeace;
