import React, { forwardRef } from "react";
import "./Input2.css";

const Input2 = forwardRef(
  (
    { placeholder = "Enter text...", value, onChange, className, ...rest },
    ref
  ) => {
    return (
      <input
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        value={value}
        className={`input2 ${className}`}
        {...rest}
      ></input>
    );
  }
);

export { Input2 };
