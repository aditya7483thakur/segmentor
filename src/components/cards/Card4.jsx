import React from "react";
import PropTypes from "prop-types";
import "./Card4.css";

const Card4 = ({
  imageurlfront,
  imageurlback,
  altText,
  className,
  ...rest
}) => {
  return (
    <div className={`card4 ${className}`} {...rest}>
      <div className="card4-inner">
        <div className="card4-front">
          <img src={imageurlfront} alt={altText} />
        </div>
        <div className="card4-back">
          <img src={imageurlback} alt={altText} />
        </div>
      </div>
    </div>
  );
};

Card4.propTypes = {
  imageurl: PropTypes.string,
  altText: PropTypes.string,
  className: PropTypes.string,
};

export { Card4 };
