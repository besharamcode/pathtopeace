import React from "react";

// eslint-disable-next-line react/prop-types, react/display-name
const Select = React.forwardRef(
  // eslint-disable-next-line react/prop-types
  ({ onChange, onBlur, name, label, options }, ref) => {
    return (
      <>
        <label className="capitalize" htmlFor="label">
          {label}
        </label>
        <select
          className="change bg-transparent border-b mb-4 w-full mt-2 focus-visible:outline-none focus:border-sec capitalize"
          name={name}
          ref={ref}
          onChange={onChange}
          onBlur={onBlur}
        >
          {/* eslint-disable-next-line react/prop-types */}
          {options.map((option) => {
            return (
              <option key={option} value={option} className="capitalize bg-box">
                {option}
              </option>
            );
          })}
        </select>
      </>
    );
  }
);

export default Select;
