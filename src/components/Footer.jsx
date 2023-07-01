import React from "react";

const Footer = ({ length }) => {
  //Simply return the number of words on the page
  const words = 40;
  return (
    <div className="footer">
      <h3>{length} characters</h3>
    </div>
  );
};

export default Footer;
