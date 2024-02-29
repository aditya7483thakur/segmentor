import React, { forwardRef } from "react";
import "./Input4.css";

const Input4 = forwardRef(
  ({ placeholder, value, onChange, className, ...rest }, ref) => {
    return (
      <input
        name="text"
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        value={value}
        type="text"
        {...rest}
        className={`input4 ${className}`}
      ></input>
    );
  }
);

export { Input4 };
