import React from "react";
import "./pages.css";
import oldHome from "../images/CSR/old-home.JPG";
import recommendations from "../images/CSR/recommendations.JPG";
import oldNavbar from "../images/CSR/old-navbar.jpg";
import oldFooter from "../images/CSR/old-footer.JPG";
import oldJobseekers from "../images/CSR/old-jobseekers.JPG";
import newHome from "../images/CSR/1-new-CSR-home.JPG";
import newServices from "../images/CSR/2-new-CSR-our-services.JPG";
import newEmployers from "../images/CSR/3-new-CSR-employers.JPG";
import newSeekers from "../images/CSR/4-new-CSR-job-seekers.JPG";

export default function CSR() {
  return (
    <div className="CSR-container">
      <div className="CSR-container-title">
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
      <div className="old-home-container">
        <img src={oldHome} alt="old home page"></img>
      </div>
      <p className="CSR-container-blog">
        But I did notice a few things right off the bat that we needed to
        update, critically. I put together a recommendations meeting and met
        with the site owner to go over my findings.
      </p>
      <div className="recommendations-container">
        <img src={recommendations} alt="recommendations to the owner"></img>
      </div>
      <div>
        <p className="CSR-container-blog">
          Next, I got to work. I received documentation on how to access the
          host, called uhost. I made myself familiar with the code and styling.
          But, I wasn't familiar with some of the scripting. The codebase was
          using a local application to set the navbar as well as what looked
          like HTML4.
        </p>
      </div>
      <div className="old-navbar-container">
        <img src={oldNavbar} alt="old nav bar"></img>
      </div>
      <div>
        <p className="CSR-container-blog">
          I started commenting out code that I didn't think I would need, just
          to have it there in case. Many of the links were broken. I researched
          current affiliates sites as well as current LikedIn and Facebook
          sites. I got updated PDF documents from the company owner and linked
          the new documents. I noticed the footer especially needed to be
          updated.
        </p>
      </div>
      <div className="old-footer-container">
        <img src={oldFooter} alt="old footer"></img>
      </div>
      <p className="CSR-container-blog">
        The footer had broken links going to two Facebook pages. It also had a
        link to Google Maps that opens in a new tab.
      </p>
      <p className="CSR-container-blog">
        The site also had a form for the user to imput information, which is
        great! But it was so tiny on the screen.
      </p>
      <div className="old-jobseekers-container">
        <img src={oldJobseekers} alt="old jobseekers"></img>
      </div>
      <p className="CSR-container-blog">
        What it looks like today:
      </p>
      <div className="new-site-container">
        <div>
        <img src={newHome} alt="new home page"></img></div>
        <div>
        <img src={newServices} alt="new services page"></img></div>
        <div>
        <img src={newEmployers} alt="new employers page"></img></div>
        <div>
        <img src={newSeekers} alt="new job seekers page"></img></div>
      </div>
    </div>
  );
}
