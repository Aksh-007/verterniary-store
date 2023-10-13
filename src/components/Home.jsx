import "../styles/Home.css";
import rightImage from "../images/slider-img.png";
import aboutLogo from "../images/about.png";
import petCareImage from "../images/s-1.png";
import petGroomingImage from "../images/s-2.png";
import petEmergencyImage from "../images/s-3.png";
import stethoscope from "../images/tool.png";
import gallery1 from "../images/g-1.png";
import gallery2 from "../images/g-2.png";
import gallery3 from "../images/g-3.png";
import gallery4 from "../images/g-4.png";
import gallery5 from "../images/g-5.png";

import { Link } from "react-router-dom";
const Home = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="main">
        <div className="left">
          <h1>
            Professional <br />
            <span>Care For Your Pet</span>
          </h1>
          <p>
            &quot;Professional pet care ensures your beloved companion receives
            expert attention, from grooming and health checks to exercise and
            nutrition, ensuring their happiness and well-being throughout their
            life.&quot;
          </p>
          <div className="button-section">
            <button className="check-now">Buy Now</button>
            <button className="contact-us">Contact </button>
          </div>
        </div>
        <div className="right">
          <img src={rightImage} alt="image-right" />
        </div>
      </div>

      {/* About Section */}
      <div className="about-pet">
        <div className="about-left">
          <img src={aboutLogo} alt="about-logo" />
        </div>
        <div className="about-right">
          <h1>
            About Our Product <span>Quality</span>{" "}
          </h1>
          <p>
            &quot;In our pet veterinary store, product quality is our top
            priority. We source only the finest pet essentials, from food to
            medications, ensuring your furry friends receive the best care. Your
            pet&apos;s health and happiness are our utmost concern, and we stand
            by the excellence of every product we offer.&quot;
          </p>
          <button className="check-now about-btn">About More</button>
        </div>
      </div>

      {/* Service Section */}
      <div className="service-container">
        <div className="service">
          <h1>
            Our <span>Services</span>
          </h1>
          <div className="service-provided">
            <div className="our-service-card pet-care">
              <div className="service-provided-image">
                <img src={petCareImage} alt="pet-care" />
              </div>
              <h2>Pet Care</h2>
              <p>
                &quot;Discover top-quality pet care services at our veterinary
                store. From regular check-ups to specialized treatments, we
                provide the best care to keep your furry friends healthy and
                happy.&quot;
              </p>
            </div>
            <div className="our-service-card pet-gromming">
              <div className="service-provided-image">
                <img src={petGroomingImage} alt="pet-gromming" />
              </div>
              <h2>Pet Gromming</h2>
              <p>
                &quot;Elevate your pet&apos;s appearance and health with our
                expert pet grooming services. We offer professional grooming to
                keep your furry friend happy, healthy, and looking their
                best.&quot;
              </p>
            </div>
            <div className="our-service-card pet-emergency">
              <div className="service-provided-image">
                <img src={petEmergencyImage} alt="pet-care" />
              </div>
              <h2>Emergency</h2>
              <p>
                &quot;Be prepared for pet emergencies with our veterinary
                store&apos;s essential supplies. From first-aid kits to
                medications, we&apos;ve got you covered when your pet needs
                immediate care&quot;
              </p>
            </div>
            <div className="stethoscope">
              <img src={stethoscope} alt="stethoscope" />
            </div>
          </div>
          <button className="check-now service-explore">
            <Link to="/services" className="link">
              Explore More
            </Link>
          </button>
        </div>
      </div>

      {/* Gallery section started */}
      <div className="gallery-container">
        <div className="gallery">
          <h1>Our Gallery</h1>
          <div className="gallery-section">
            <div className="upper-section">
              <div>
                <img src={gallery1} alt="image1" />
              </div>
              <div className="imagetwo">
                <img src={gallery2} alt="image2" />
              </div>
            </div>
            <div className="lower-section">
              <div>
                <img src={gallery3} alt="" />
              </div>
              <div>
                <img src={gallery4} alt="" />
              </div>
              <div>
                <img src={gallery5} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
