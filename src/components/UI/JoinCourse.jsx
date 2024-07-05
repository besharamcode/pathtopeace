import { useForm } from "react-hook-form";
import Input from "./Input";
import Select from "./Select";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

const schema = yup
  .object({
    name: yup.string().required("Name is required"),
    age: yup
      .number()
      .typeError("Age must be a number")
      .positive("Age must be a positive number")
      .integer("Age must be an integer")
      .required("Age is required")
      .transform((value, originalValue) =>
        originalValue === "" ? undefined : value
      ),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    whatsapp: yup.string().matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Invalid Whatsapp number").required("WhatsApp number is required"),
    gender: yup
      .string()
      .oneOf(["female", "male", "other"], "Select a valid gender")
      .required("Gender is required"),
    education: yup.string().required("Education is required"),
    occupation: yup.string().required("Occupation is required"),
    language: yup.string().required("Language is required"),
    city: yup.string().required("City is required"),
    state: yup.string().required("State is required"),
  })
  .required();

const JoinCourse = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <section className="mt-60">
      <h3 className="mt-8 text-5xl border-b-2 border-sec font-rethink w-fit mx-auto">
        Join Path To Peace
      </h3>
      <div className="mt-16">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col py-6 px-8 w-8/12 mx-auto bg-box shadow rounded-lg"
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
            className="bg-sec w-fit mx-auto px-8 mt-2 py-2 rounded-md focus-visible:outline-none focus-visible:bg-white"
          >
            Pay Rs.499
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinCourse;
