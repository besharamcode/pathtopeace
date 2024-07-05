// eslint-disable-next-line react/prop-types
const Input = ({ label, register, required }) => {
  return (
    <>
      <label htmlFor={label} className="capitalize mt-2 block">
        {label}
      </label>
      <input
        className="change bg-transparent border-b w-full focus-visible:outline-none focus:border-sec"
        {...register(label, { required })}
      />
    </>
  );
};

export default Input;
