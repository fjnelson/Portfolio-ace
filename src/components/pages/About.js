import React from "react";
import "./pages.css";
import VMXP from "../images/VMXP_Badge.png";

export default function About() {
  return (
    <div className="about-container">
      <div>
        <h1 className="about-header">Customer Success Champion</h1>
      </div>
      <br />
      <div>
        <img
          src={VMXP}
          alt="veeam sales Certification"
          className="veeam-badge"
        />
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
      <div className="about-container">
        <h2 className="about-header2">IT Starts with Customer Success</h2>
      </div>
      <div>
        <p className="about-paragraph">
          <span class="it-styled">IT</span> enthusiast with a passion for
          creating mind-blowing solutions, fueled by a diverse background in
          Customer Success, IT Project Management, IT Service Delivery, and
          Application Support. With my superpowers in Full Stack Web Development
          from the University of Oregon Coding Boot Camp, I have created
          real-world applications that are in use by industry professionals.{" "}
          <br /> <br />
          <span class="it-styled">Starts</span> off on an epic adventure to
          grow, learn, and bring the boom to dynamic, fast-paced,
          cross-functional development teams. Consider me a hero on the
          battlefield of collaboration, armed with strong communication skills
          that can bridge the gap between tech wizards and non-technical folks.
          I'm fluent in the language of trusted advisement, and I have an
          insatiable appetite for acquiring new powers. Quick, watch me snatch
          those new concepts and make them my own!
          <br /> <br />
          <span class="it-styled">With</span> an unshakable belief in the sacred
          mantra of "IT starts with Customer Success," I breathe fire and live
          by that code.
          <br /> <br />
          <span class="it-styled">Customer</span> satisfaction is the treasure
          that drives me. I embark on quests to understand the unique needs and
          desires of each customer, crafting tailored solutions that blow their
          minds and exceed their wildest expectations. By joining forces and
          using the power of collaboration, we'll create positive and productive
          interactions that transform ordinary moments into extraordinary
          adventures.
          <br /> <br />
          <span class="it-styled">Success</span> in the realm of IT demands an
          alchemical fusion of technical prowess and a customer-centric
          approach. I'm on a holy mission to achieve customer triumph by
          summoning high-quality products and services from the very depths of
          my expertise.  With these powers combined anything is possible.
          <br /> <br />
        </p>
      </div>
    </div>
  );
}
