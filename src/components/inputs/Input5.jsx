import React, { forwardRef } from "react";
import "./Input5.css";

const Input5 = forwardRef(
  (
    { placeholder = "Enter text...", value, onChange, className, ...rest },
    ref
  ) => {
    return (
      <input
        name="text"
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        value={value}
        type="text"
        {...rest}
        className={`input5 ${className}`}
      ></input>
    );
  }
);

export { Input5 };
