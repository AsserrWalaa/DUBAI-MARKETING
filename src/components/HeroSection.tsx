// src/pages/Home.tsx
import Navbar from "./Navbar";
import hero1 from "../assets/cleaning service-amico 1.png";
import "../style/global.css";
import { useTranslation } from "react-i18next";

const Hero = () => {
  const { i18n } = useTranslation(); // i18n instance for language change
  return (
    <>
      <Navbar />
      <div className="d-flex flex-wrap container ">
        <div className="heroText col-12 col-md-6 d-flex flex-column justify-content-center align-items-start">
          <h1 className="textPrimary my-3">
            {i18n.t("A unique hotel experience for your apartment")}
          </h1>
          <h2 className="pt-3 mt-1 " style={{ color: "#676767" }}>
            {i18n.t("Health and cleanliness")}
          </h2>
          <a
            href="tel:+201066607106"
            className="w-50 fs-3 px-4 mt-3 rounded-3 border-3 bg-transparent callUs text-decoration-none">
            <button className="w-100 h-100 border-0 bg-transparent">
              {i18n.t("Call Us")}
            </button>
          </a>
        </div>
        <div className="hero col-12 col-md-6">
          <img src={hero1} alt="" className="img-fluid d-none d-md-block" />
        </div>
      </div>
    </>
  );
};

export default Hero;
