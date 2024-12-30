import { Container, Row, Col } from "react-bootstrap";
import footerLogo from "../assets/1-removebg-preview (3) 1.jpg";
import wp from "../assets/whtasapp.png";
import fb from "../assets/fb.png";
import ig from "../assets/ig.png";

// translation imports
import { useTranslation } from "react-i18next";
import "../locales/ar.json";
import "../locales/en.json";

const Footer = () => {
  const { i18n } = useTranslation(); // i18n instance for language change

  return (
    <footer className="py-5 mt-5">
      <Container>
        <Row className="mt-5 text-center text-sm-start">
          {/* Added text-center for small screens */}
          {/* Column 1 */}
          <Col md={3} sm={6} className="mx-auto">
            {/* Centered using mx-auto */}
            <img src={footerLogo} alt="footerLogo" width={130} height={130} />
          </Col>
          {/* Column 2 */}
          <Col md={3} sm={6} className="mb-3 mx-auto">
            {/* Centered using mx-auto */}
            <h6 className="text-secondary">{i18n.t("Make an Appointment")}</h6>
            <h6 className="text-secondary">
              {i18n.t("About Dubai Hotel Service")}
            </h6>
            <h6 className="text-secondary">{i18n.t("Why Choose Us")}</h6>
            <h6 className="text-secondary">{i18n.t("Service")}</h6>
            <h6 className="text-secondary">{i18n.t("Our Contact")}</h6>
          </Col>
          {/* Column 3 */}
          <Col md={3} sm={6} className="mb-3 mx-auto">
            {/* Centered using mx-auto */}
            <h5 className="text-dark">{i18n.t("Services")}</h5>
            <ul className="list-unstyled mt-3">
              <li>
                <h6 className="text-secondary">
                  {i18n.t("Property Cleaning")}
                </h6>
              </li>
              <li>
                <h6 className="text-secondary">
                  {i18n.t("Domestic Cleaning")}
                </h6>
              </li>
              <li>
                <h6 className="text-secondary">{i18n.t("Window Cleaning")}</h6>
              </li>
              <li>
                <h6 className="text-secondary">{i18n.t("House Cleaning")}</h6>
              </li>
              <li>
                <h6 className="text-secondary">{i18n.t("Office Cleaning")}</h6>
              </li>
            </ul>
          </Col>
          {/* Column 4 */}
          <Col md={3} sm={6} className="mb-3 mx-auto">
            {/* Centered using mx-auto */}
            <h5 className="text-dark">{i18n.t("Contact Us")}</h5>
            <ul className="list-inline mt-3">
              <li>
                <h6 className="text-secondary">T - 01258639562</h6>
              </li>
              <li>
                <h6 className="text-secondary">
                  E - Dubaihotelservice@gmail.com
                </h6>
              </li>
              <div className="d-flex justify-content-center mt-4">
                {/* Centered icons */}
                <img src={fb} alt="fb" className="me-3" />
                <a
                  href="https://wa.me/201066607106"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={wp}
                    alt="wp"
                    width="50"
                    className="mx-3 bg-success rounded-5"
                  />
                </a>
                <img src={ig} alt="ig" className="mx-3" />
              </div>
            </ul>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
