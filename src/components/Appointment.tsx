import React, { useState } from "react";
import { Row, Form, Button } from "react-bootstrap";
import { Whatsapp } from "react-bootstrap-icons"; // Importing the WhatsApp icon
// trasnlation imports
import { useTranslation } from "react-i18next";
import "../locales/ar.json";
import "../locales/en.json";

const AppointmentForm = () => {
  const { i18n } = useTranslation(); // i18n instance for language change
  // Form data state
  const [phoneNumber, setPhoneNumber] = useState(""); // Phone number as string

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!phoneNumber) {
      alert("Please enter a valid phone number");
      return;
    }

    // Format the WhatsApp message with the phone number
    const message = `*Appointment Details*\n\nPhone Number: ${phoneNumber}`;

    // URL encode the message to handle special characters
    const encodedMessage = encodeURIComponent(message);

    // Send the message to the fixed phone number +201090009330
    const whatsappUrl = `https://wa.me/+201090009330?text=${encodedMessage}`;

    // Open WhatsApp with the pre-filled message
    window.open(whatsappUrl, "_blank");
  };

  return (
    <>
      <section className="Appointment my-5 py-5">
        <div className="form">
          <div className="container form-content">
            <div className="p-5">
              <h1 className="text-center text-white p-4">
                {i18n.t("Appointment Your Service")}
              </h1>
            </div>
            {/* Phone Number Field */}
            <Row className="mt-4">
              <Form.Label className="text-light phone">
                {i18n.t("Phone Number")}
              </Form.Label>
              <Form.Control
                type="tel"
                value={phoneNumber}
                onChange={(e) => setPhoneNumber(e.target.value)}
                placeholder="Enter phone number with country code"
              />
            </Row>
            {/* Submit button */}
            <Row>
              <Button
                type="submit"
                className="btn-lg w-100 text-white d-flex gap-2 align-items-center justify-content-center my-5"
                style={{ backgroundColor: "#006F73" }}
                onClick={handleSubmit} // Trigger WhatsApp message on submit
              >
                Send <Whatsapp className="ms-3 text-success" size={20} />
              </Button>
            </Row>
          </div>
        </div>
      </section>
    </>
  );
};

export default AppointmentForm;
