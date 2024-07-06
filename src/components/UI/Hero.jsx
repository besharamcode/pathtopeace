import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import Icon from "./Icon";
import h1 from "../../assets/h-1.svg";

const Hero = () => {
  return (
    <section className="flex justify-between sm:flex-row flex-col-reverse items-center sm:mt-20 mt-8">
      <div className=" sm:max-w-[50%] sm:mt-0 mt-8">
        <h1 className="md:text-6xl text-4xl font-bold capitalize font-inclusive text-pretty md:leading-[4rem]">
          We<span className=""> need</span> to <br />{" "}
          <span className="text-sec">Connect</span> with Allah And{" "}
          <span className="">Make</span> Our{" "}
          <span className="text-sec">Lives </span>Better!
        </h1>
        <p className="mt-4 w-11/12">
          It is hoped that this Online Islamic Course will enable you to have a
          good understanding & become enlightened to the beautiful Teachings of
          Islam and words of Allah . Insha&apos;Allah (God Willing).
        </p>
        <div>
          <button className="bg-sec flex hover:scale-105 transition-transform items-center gap-2 px-4 font-rethink py-2 rounded-md mt-4">
            Join Course Now
            <div className="p-1 size-6 text-sec grid place-items-center rounded-full bg-white">
              <Icon icon={faArrowRight} />
            </div>
          </button>
        </div>
      </div>
      <div>
        <img src={h1} className="md:w-full sm:w-9/12 w-4/6 mx-auto" alt="" />
      </div>
    </section>
  );
};

export default Hero;
