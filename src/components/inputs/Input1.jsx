import React, { forwardRef } from "react";
import "./Input1.css";

const Input1 = forwardRef(
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
      <div className={`form-control1 ${className}`}>
        <input
          className="input1 input-alt1"
          placeholder={placeholder}
          ref={ref}
          onChange={onChange}
          value={value}
          type="text"
          style={inputStyle}
          {...rest}
        />
        <span className="input-border1 input-border-alt1"></span>
      </div>
    );
  }
);

export { Input1 };
