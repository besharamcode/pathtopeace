// eslint-disable-next-line react/prop-types
const Input = ({ label, register, required, className }) => {
  return (
    <>
      <label htmlFor={label} className="text-slate-500 capitalize mt-2 block">
        {label}
      </label>
      <input
        className={`change bg-transparent border-b w-full focus-visible:outline-none focus:border-sec ${className}`}
        {...register(label, { required })}
      />
    </>
  );
};

export default Input;
