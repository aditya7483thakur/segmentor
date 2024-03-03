import React, { forwardRef } from "react";
import "./Input3.css";

const Input3 = forwardRef(
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
        className={`input3 ${className}`}
      ></input>
    );
  }
);

export { Input3 };
