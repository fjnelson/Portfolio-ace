import React from "react";
import "./pages.css";
import LOR3Image from '../images/John-Nelson-Letter-of-Recommendation-from-CSR.JPG';

const LOR1 = () => {
  return (
    <div>
      <img src={LOR3Image} 
      alt="John Nelson Letter of Recommendation from Jacquie Bartow"
      className="responsive-image"
      />
    </div>
  );
};

export default LOR1;