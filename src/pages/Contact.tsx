// src/pages/About.tsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import "react-bootstrap-icons";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "../style/global.css";

// translation imports
import { useTranslation } from "react-i18next";
import "../locales/en.json";
import "../locales/ar.json";

const ContactUS = () => {
  const { i18n } = useTranslation(); // i18n instance for language change

  return (
    <>
      <div className="hero-two">
        <div className="hero-content">
          <Navbar />
          <div className="heroText">
            <h1 className="text-center text-white ">{i18n.t("Contact Us")}</h1>
          </div>
        </div>
      </div>
      <div className="container py-5 mt-5">
        <div className="row gap-5">
          {/* Left section */}
          <div className="col-lg-4 col-12 data-left d-flex align-items-center">
            <div>
              <div className="data d-flex gap-5 py-4 px-5 rounded-2">
                <i className="bi bi-telephone my-2 fs-4 icon"></i>
                <div>
                  <h6>{i18n.t("Phone Number")}</h6>
                  <p>01256784581</p>
                </div>
              </div>
              <div className="data d-flex gap-5 py-4 px-5 rounded-2 mt-5">
                <i className="bi bi-envelope my-2 fs-4 icon"></i>
                <div>
                  <h6>{i18n.t("Email Address")}</h6>
                  <p>Dubaihotelservice@gmail.com</p>
                </div>
              </div>
              <div className="data d-flex gap-5 py-4 px-5 rounded-2 mt-5">
                <i className="bi bi-geo-alt-fill my-2 fs-4 icon"></i>
                <div>
                  <h6>{i18n.t("Location")}</h6>
                  <p>Dubai, 1244 Street</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right section */}
          <div className="col-lg-6 col-12 data-right container p-5">
            <h3 className="pb-5 text-center">{i18n.t("Send Message")}</h3>
            <Form>
              <Form.Group controlId="name">
                <Form.Label className="text-secondary">
                  {i18n.t("First Name")}
                </Form.Label>
                <Form.Control type="text" />
              </Form.Group>

              <Form.Group className="mb-5 mt-5" controlId="Phone">
                <Form.Label className="text-secondary">
                  {i18n.t("Phone Number")}
                </Form.Label>
                <Form.Control type="number" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="Massage.ControlTextarea1">
                <Form.Label className="text-secondary">
                  {i18n.t("Message")}
                </Form.Label>
                <Form.Control as="textarea" className="py-5" />
              </Form.Group>

              <Button
                type="submit"
                className="btn-lg w-100 text-white d-flex align-items-center justify-content-center my-5"
                style={{ backgroundColor: "#006F73", border: "none" }}>
                Send Message
              </Button>
            </Form>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default ContactUS;
