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
import HTTPS from "../images/CSR/HTTPS.JPG";

export default function CSR() {
  return (
    <div className="CSR-container">
      <div className="CSR-container-title">
        <h1
          style={{
            backgroundImage: "linear-gradient(to right, #00C9FF , #92FE9D)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Minor Web Update for CSR-jobs.com
        </h1>
      </div>
      <div className="anchor-new-site">
        <a href="#new-site-container" className="new-site-link">
          Check out the new site!
        </a>
        <a href="/LOR-3" className="new-site-link">
          View my letter of recommendation from the project
        </a>
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
        The owner also let me know that they had complaints about the site
        before, that the pictures were not as diverse as to represent the
        entirety of the workforce. So, I was able to change the pictures to be
        more diverse.
      </p>
      <p className="CSR-container-blog">
        The site was also using HTTP, which means it was unsecure. I worked with
        uhost on adding an SSL Certificate and creating a redirect to HTTPS.
      </p>
      <div className="CSR-container-title">
        <h2
          style={{
            backgroundImage: "linear-gradient(to right, #00C9FF , #92FE9D)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          What the website looks like today:
        </h2>
      </div>
      <div className="HTTPS-container">
        <img src={HTTPS} alt="new address bar"></img>
      </div>
      <div id="new-site-container" className="new-site-container">
        <div className="new-site-container-images">
          <img src={newHome} alt="new home page"></img>
        </div>
        <div className="new-site-container-images">
          <img src={newServices} alt="new services page"></img>
        </div>
        <div className="new-site-container-images">
          <img src={newEmployers} alt="new employers page"></img>
        </div>
        <div className="new-site-container-images">
          <img src={newSeekers} alt="new job seekers page"></img>
        </div>
      </div>
      <p className="CSR-container-blog">
        After the new site went live, the customer let me know they wanted one
        thing touched up - rather than the open opportunities to be on the main
        page, they wanted the open opportunities in the footer on all pages.
        Easy fix.
      </p>
    </div>
  );
}
