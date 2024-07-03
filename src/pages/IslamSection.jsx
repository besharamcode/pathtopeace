import ci4 from "../assets/ci4.jpg";

const IslamSection = () => {
  return (
    <section>
      <div className="flex mt-20 items-center tracking-wide">
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

export default IslamSection;
