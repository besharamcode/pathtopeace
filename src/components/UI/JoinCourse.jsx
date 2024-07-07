import { useForm } from "react-hook-form";
import Input from "./Input";
import Select from "./Select";
import { yupResolver } from "@hookform/resolvers/yup";
import { joinCourseSchema } from "../../utils/schema";

const JoinCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(joinCourseSchema) });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <section className="md:mt-60 sm:mt-40 mt-28" id="joincourse">
      <h3 className="mt-8 text-5xl border-b-2 border-sec font-rethink w-fit mx-auto">
        Join Path To Peace
      </h3>
      <div className="mt-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col py-6 px-8 md:w-8/12  mx-auto bg-box shadow rounded-lg"
        >
          <div className="grid sm:grid-cols-2 grid-cols-1 gap-x-10">
            <div>
              <Input label="name" register={register} required />
              {errors.name && (
                <p className="text-red-600 text-xs">{errors.name.message}</p>
              )}
            </div>
            <div>
              <Input label="age" register={register} required />
              {errors.age && (
                <p className="text-red-600 text-xs">{errors.age.message}</p>
              )}
            </div>
            <div>
              <Input label="email" register={register} required />
              {errors.email && (
                <p className="text-red-600 text-xs">{errors.email.message}</p>
              )}
            </div>
            <div>
              <Input label="whatsapp" register={register} required />
              {errors.whatsapp && (
                <p className="text-red-600 text-xs">
                  {errors.whatsapp.message}
                </p>
              )}
            </div>
            <div>
              <Select
                label="gender"
                options={["select", "female", "male", "other"]}
                {...register("gender")}
              />
              {errors.gender && (
                <p className="text-red-600 text-xs">{errors.gender.message}</p>
              )}
            </div>
            <div>
              <Select
                label="education"
                options={[
                  "No formal education",
                  "Primary education",
                  "Secondary education",
                  "Bachelor's degree",
                  "Master's degree",
                  "Doctorate or higher",
                ]}
                {...register("education")}
              />
              {errors.education && (
                <p className="text-red-600 text-xs">
                  {errors.education.message}
                </p>
              )}
            </div>
            <div>
              <Select
                label="occupation"
                options={["Student", "House Wife", "Employee", "Other"]}
                {...register("occupation")}
              />
              {errors.occupation && (
                <p className="text-red-600 text-xs">
                  {errors.occupation.message}
                </p>
              )}
            </div>
            <div>
              <Select
                label="language"
                options={["English", "Urdu"]}
                {...register("language")}
              />
              {errors.language && (
                <p className="text-red-600 text-xs">
                  {errors.language.message}
                </p>
              )}
            </div>
            <div>
              <Input label="city" register={register} required />
              {errors.city && (
                <p className="text-red-600 text-xs">{errors.city.message}</p>
              )}
            </div>
            <div>
              <Input label="state" register={register} required />
              {errors.state && (
                <p className="text-red-600 text-xs">{errors.state.message}</p>
              )}
            </div>
          </div>
          <button
            type="submit"
            className="bg-sec w-fit mx-auto px-8 mt-7 py-2 rounded-md focus-visible:outline-none focus-visible:bg-white"
          >
            Pay Rs.499
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinCourse;
