import React from "react";
import "./pages.css";
import oldHome from '../images/CSR/old-home.JPG'

export default function CSR() {
  return (
    <div>
      <div className="CSR-container">
        <h1>Minor Web Update for CSR-jobs.com</h1>
      </div>
      <div>
        <p className="CSR-container-blog">
          I was contacted by the owner of CSR-Personnel to do a minor-update to
          their company website. I accepted the role and got to work. The first
          thing I did was I checked out the old site. It didn't look half bad
          already.
        </p>
      </div>
      <div className='old-home-container'>
      <img src= {oldHome} alt="old home page"></img>
      </div>
    </div>
  );
}
