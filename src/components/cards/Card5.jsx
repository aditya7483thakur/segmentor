<div className="book">
  <p>Hello</p>
  <div className="cover">
    <p>Hover Me</p>
  </div>
</div>;

import React from "react";
import PropTypes from "prop-types";
import "./Card5.css";

const Card5 = ({
  imageurlfront,
  imageurlback,
  altText = "Image..",
  className,
  ...rest
}) => {
  return (
    <div className={`book5 ${className}`} {...rest}>
      <img src={imageurlfront} alt={altText} />
      <div className="cover5">
        <img src={imageurlback} alt={altText} />
      </div>
    </div>
  );
};

Card5.propTypes = {
  imageurl: PropTypes.string,
  altText: PropTypes.string,
  className: PropTypes.string,
};

export { Card5 };
