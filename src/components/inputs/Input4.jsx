import React, { forwardRef } from "react";
import "./Input4.css";

const Input4 = forwardRef(
  (
    {
      placeholder = "Enter text...",
      value,
      onChange,
      textColour = "black",
      backgroundColour = "white",
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
        style={inputStyle}
        {...rest}
        className={`input4 ${className}`}
      ></input>
    );
  }
);

export { Input4 };
