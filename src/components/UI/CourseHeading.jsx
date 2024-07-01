// eslint-disable-next-line react/prop-types
const CourseHeading = ({ heading }) => {
  return (
    <div>
      <h3 className="font-rethink font-bold mt-2 text-xl border-b-2 border-sec w-fit">
        {heading}
      </h3>
    </div>
  );
};

export default CourseHeading;
