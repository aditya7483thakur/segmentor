import React, { forwardRef } from "react";
import "./Input5.css";

const Input5 = forwardRef(
  (
    {
      placeholder = "Enter text...",
      value,
      textColour = "black",
      backgroundColour = "white",
      onChange,
      className,
      ...rest
    },
    ref
  ) => {
    const inputStyle = {
      color: textColour,
      backgroundColor: backgroundColour,
    };

    return (
      <input
        name="text"
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        value={value}
        type="text"
        {...rest}
        style={inputStyle}
        className={`input5 ${className}`}
      ></input>
    );
  }
);

export { Input5 };
