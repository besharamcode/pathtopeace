import Subheading from "../components/UI/Subheading";
import c1 from "../assets/ci3.jpg";
import CourseHeading from "../components/UI/CourseHeading";
import { NavLink } from "react-router-dom";

const Course = () => {
  return (
    <section className="mb-8">
      <Subheading subheading={"Course"} />
      <div className="flex items-center gap-x-8 gap-y-4 mt-8">
        <div className="max-w-[25%] p-4 bg-box rounded-lg relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-sec text-white px-3 py-1 rounded-bl-md shadow-md z-50">
            <p>Rs. 499</p>
          </div>
          <div>
            <img
              src={c1}
              alt=""
              className="rounded-lg hover:scale-105 transition"
            />
          </div>
          <CourseHeading heading="Path To Peace" />
          <p className="mt-2 text-slate-300 leading-tight">
            This Islamic course is designed to teach you basic Islamic knowledge
            and Muslim beliefs. Learn tajweed, explore the beautiful teachings
            of Islam, and understand the words of Allah. Discover your purpose
            of existence by studying Islam from the comfort of your home through
            authentic sources (Quran and Hadith).
          </p>
          <NavLink
            to="/course/pathtopeace"
            className="bg-sec px-4 font-medium text-white text-sm font-rethink block w-fit py-2 rounded-md mt-4"
          >
            Learn More
          </NavLink>
        </div>
      </div>
    </section>
  );
};

export default Course;
