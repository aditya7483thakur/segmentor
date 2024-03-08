import React, { forwardRef } from "react";
import "./Input2.css";

const Input2 = forwardRef(
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
        placeholder={placeholder}
        ref={ref}
        onChange={onChange}
        value={value}
        style={inputStyle}
        className={`input2 ${className}`}
        {...rest}
      ></input>
    );
  }
);

export { Input2 };
