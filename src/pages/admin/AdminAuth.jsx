import { useForm } from "react-hook-form";
import Input from "../../components/UI/Input";
import Subheading from "../../components/UI/Subheading";
import { yupResolver } from "@hookform/resolvers/yup";
import { adminAuthSchema } from "../../utils/schema";

const AdminAuth = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(adminAuthSchema) });

  const onSubmit = (data) => {
    alert(JSON.stringify(data));
  };
  return (
    <section>
      <Subheading subheading={"Admin Authentication"} />
      <div className="mt-12">
        <form
          className="flex flex-col bg-box py-6 px-8 sm:w-3/5 mx-auto"
          onSubmit={handleSubmit(onSubmit)}
        >
          <h3 className="text-2xl text-center font-rethink border-b-2 border-sec w-fit mx-auto  mb-6">
            Who Are You?
          </h3>
          <Input label="email" register={register} required />
          {errors.email && (
            <p className="text-red-600 text-xs">{errors.email.message}</p>
          )}
          <Input label="passwordKey" register={register} required />
          {errors.passwordKey && (
            <p className="text-red-600 text-xs">{errors.passwordKey.message}</p>
          )}
          <Input label="password" register={register} required />
          {errors.password && (
            <p className="text-red-600 text-xs">{errors.password.message}</p>
          )}
          <button
            type="button"
            className="bg-sec py-2 mt-8 rounded-md focus-visible:outline-none focus-visible:bg-white"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default AdminAuth;
