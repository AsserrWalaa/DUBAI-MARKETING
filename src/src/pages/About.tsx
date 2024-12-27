// src/pages/About.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "../style/global.css";

// translation imports
import { useTranslation } from "react-i18next";
import "../locales/en.json";
import "../locales/ar.json";

const About = () => {
  const { i18n } = useTranslation(); // i18n instance for language change

  return (
    <>
      <div className="hero-two">
        <div className="hero-content">
          <Navbar />
          <div className="heroText">
            <h1 className="text-center text-white">{i18n.t("About US")}</h1>
          </div>
        </div>
      </div>
      <div className="container py-5">
        <p className="text-start fw-bold text-secondary fs-4">
          {i18n.t(
            "At Dubai Hotel Service, we are dedicated to providing top-notch cleaning and sanitization services for hotels, serviced apartments, and furnished properties. Our mission is to create a clean, healthy, and welcoming environment for your guests, ensuring their satisfaction and comfort."
          )}
        </p>
        <h3 className="py-3">
          {i18n.t(
            "With a team of experienced professionals and a commitment to excellence, we specialize in:"
          )}
        </h3>
        <p className="py-2 text-secondary fw-bold fs-4"></p>
        <p className="py-2 text-secondary fw-bold fs-4">
          {i18n.t("Deep sanitization to maintain hygiene standards")}
        </p>
        <p className="py-2 text-secondary fw-bold fs-4">
          {i18n.t("Reliable and efficient service to meet your schedule")}
        </p>
        <p className="fs-3 py-3">
          {i18n.t(
            "We understand the importance of a spotless and hygienic space, and our goal is to help you maintain the highest standards of cleanliness. Partner with us for services that enhance your property's reputation and give your guests an unforgettable experience."
          )}
        </p>
      </div>
      <Footer />
    </>
  );
};

export default About;
