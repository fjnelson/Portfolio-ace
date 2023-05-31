import React from "react";
import "./pages.css";

export default function About() {
  return (
    <div className="about-container">
      <div>
        <h1 className="about-header">Customer Success Champion</h1>
      </div>
      <br />
      <div>
        <img
          src="https://images.credly.com/images/ff2a263e-e4ce-47fb-bb56-355465e38e56/twitter_thumb_201604_image.png"
          alt="ZoomInfo SalesOS Certification"
          className="credly-badge"
        />
        <img
          src="https://it-maniacs.com/wp-content/uploads/2021/04/mta-certificate.jpg"
          alt="Microsoft Certification"
          className="microsoft-badge"
        />
        <img
          src="https://images.credly.com/images/27e4a448-a682-47aa-9078-2e71c20f114d/Digital_Badges_-_WB_newlogo.png"
          alt="Six Sigma Certification"
          className="six-sigma-badge"
        />
        <img
          src="https://images.credly.com/images/63482325-a0d6-4f64-ae75-f5f33922c7d0/CompTIA_A_2Bce.png"
          alt="comptia Certification"
          className="comptia-badge"
        />
      </div>
      <div>
        <p className="about-paragraph">
          <span class="it-styled">IT</span> enthusiast with a passion for
          creating innovative solutions drawing on an extensive background of
          Customer Success, IT Project Management, IT Service Delivery, and
          Application Support experience in designing, developing, and deploying
          web applications. Earned a certificate in Full Stack Web Development
          from the University of Oregon Coding Boot Camp. <br /> <br />
          <span class="it-styled">The</span> goal is to continue growing,
          continue learning, and contribute to the success of dynamic,
          fast-paced, cross-functional development teams with a “Customer
          Champion” mentality. Effective individual contributor across strong
          sets of teams. Strong communication skills, interfacing with both
          technical and non-technical audiences. Fluent in front-end
          technologies and an avid learner. Able to pick up new concepts
          quickly.
          <br /> <br />
          <span class="it-styled">I</span> am a firm believer in "IT starts with
          Customer Success" and live/work/breathe by that model.
          <br /> <br />
        </p>
      </div>
    </div>
  );
}
