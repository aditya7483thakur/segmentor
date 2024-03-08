import React from "react";
import PropTypes from "prop-types";
import "./Card1.css";

const Card1 = ({ imageurl, altText = "Image..", className, ...rest }) => {
  return (
    <div className={`card1 ${className}`} {...rest}>
      <img src={imageurl} alt={altText} />
    </div>
  );
};

Card1.propTypes = {
  imageurl: PropTypes.string,
  altText: PropTypes.string,
  className: PropTypes.string,
};

export { Card1 };
