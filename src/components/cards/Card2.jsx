import React from "react";
import PropTypes from "prop-types";
import "./Card2.css";

const Card2 = ({ imageurl, altText, className, ...rest }) => {
  return (
    <div className={`card2 ${className}`} {...rest}>
      <div className="card2-info">
        <img src={imageurl} alt={altText} />
      </div>
    </div>
  );
};

Card2.propTypes = {
  imageurl: PropTypes.string,
  altText: PropTypes.string,
  className: PropTypes.string,
};

export { Card2 };
