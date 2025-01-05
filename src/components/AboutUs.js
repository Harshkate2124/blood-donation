import React from "react";
import "./AboutUs.css";

function AboutUs() {
  return (
    <div className="about-container">
      <section className="about-header">
        <h1>About Us</h1>
        <p>
          Every drop counts. Our mission is to create a world where blood
          donation is accessible to all, making it easier for donors to save
          lives.
        </p>
      </section>

      <section className="about-content">
        <div className="mission">
          <h2>Our Mission</h2>
          <p>
            We are on a mission to make blood donation simple, effective, and
            life-saving. Our platform bridges the gap between donors and
            recipients, ensuring that every drop donated can change someone's
            life. With a focus on transparency, convenience, and trust, we aim
            to empower donors and healthcare organizations to work together for
            a healthier, safer future.
          </p>
        </div>

        <div className="vision">
          <h2>Our Vision</h2>
          <p>
            Our vision is a world where no life is lost due to lack of blood.
            We envision a future where blood is always available for patients in
            need. Through innovative campaigns, education, and strategic
            partnerships with healthcare organizations, we are committed to
            making this vision a reality.
          </p>
        </div>

        <div className="team">
          <h2>Meet Our Team</h2>
          <div className="team-members">
            <div className="team-member">
              <img src="path-to-image-1" alt="Founder" />
              <h3>Harshal Kate</h3>
              <p>Founder & CEO</p>
            </div>
            <div className="team-member">
              <img src="path-to-image-2" alt="Co-Founder" />
              <h3>John Smith</h3>
              <p>Co-Founder & Operations Lead</p>
            </div>
            <div className="team-member">
              <img src="path-to-image-3" alt="Marketing Head" />
              <h3>Emily Davis</h3>
              <p>Head of Marketing</p>
            </div>
          </div>
        </div>
      </section>

      <section className="cta">
        <h2>Join Us in Saving Lives</h2>
        <p>
          Be part of our life-saving community. Whether you're donating, 
          volunteering, or raising awareness, your contribution matters. Let's
          work together to ensure that no patient is ever without the blood
          they need. Join us today.
        </p>
        <a href="/donate" className="donate-link">
          Become a Donor
        </a>
      </section>
    </div>
  );
}

export default AboutUs;
