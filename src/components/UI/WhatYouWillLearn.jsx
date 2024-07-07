import { NavLink } from "react-router-dom";
import { whatYouWillLearnData } from "../../constant/constant";

const WhatYouWillLearn = () => {
  return (
    <section className="md:mt-60 sm:mt-40 mt-28">
      <div>
        <h3 className="mt-8 text-5xl border-b-2 border-sec font-rethink w-fit mx-auto">
          What You Will Learn
        </h3>
        <div className="md:mt-24 mt-16">
          <div className="flex gap-x-8 justify-evenly items-center md:flex-row flex-col">
            {whatYouWillLearnData.map((data) => {
              return (
                <NavLink
                  to={data.to}
                  key={data.image}
                  className="relative md:max-w-80 w-2/3 md:mt-0 mb-20 learning-box "
                >
                  <div className="text-container transition-all absolute -z-10 bg-[#000000dc] rounded-full w-full h-full">
                    <h4 className="text-center text-4xl transition-all absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 font-josefin">
                      {data.name}
                    </h4>
                  </div>
                  <img
                    src={data.image}
                    className="rounded-full relative transition-all -z-20 mx-auto drop-shadow-[-1rem_-.3rem_0rem_#c084fc]"
                    alt={data.name}
                  />
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
