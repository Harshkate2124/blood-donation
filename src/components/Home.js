import React from "react";
import "./Home.css";

function Home() {
  return (
    <div className="home-container">
      <header className="hero-section">
        <br></br>
        <br></br>
        <p className="hero-subtitle">
          Your small act of kindness can save a life. Become a hero today!
        </p>
        <a href="/donate" className="hero-button">
          Donate Now
        </a>
      </header>

      <section className="about-section">
        <h2>Why Blood Donation Matters</h2>
        <p>
          Every year, millions of lives are saved thanks to the generosity of blood donors. Donating blood is a simple and safe way to give back to your community and help those in critical need.
        </p>
      </section>

      <section className="stats-section">
        <h2>Donation Impact</h2>
        <div className="stats-grid">
          <div className="stat-item">
            <h3>3000+</h3>
            <p>Lives Saved</p>
          </div>
          <div className="stat-item">
            <h3>1500+</h3>
            <p>Donors Registered</p>
          </div>
          <div className="stat-item">
            <h3>700+</h3>
            <p>Hospitals Supported</p>
          </div>
        </div>
      </section>

      <section className="how-to-donate">
        <h2>Steps to Donate</h2>
        <ol>
          <li>Confirm your eligibility for donation.</li>
          <li>Find a nearby blood donation center and book your appointment.</li>
          <li>Prepare for donation by staying hydrated and eating a healthy meal beforehand.</li>
        </ol>
        <a href="/donate" className="donate-link">
          Explore the Donation Process
        </a>
      </section>

      <footer className="footer">
        <p>
          Become a lifesaver. Stay connected with us on social media or reach out for more details on how you can help.
        </p>
      </footer>
    </div>
  );
}

export default Home;
