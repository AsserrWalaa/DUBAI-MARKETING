// fixed components
import Hero from "../components/HeroSection";
import Footer from "../components/Footer";

// images imports
import kitchen from "../assets/Frame 16.png";
import washing from "../assets/washing.png";
import compelete from "../assets/compelete.png";
import changing from "../assets/changing.png";
import Wash from "../assets/Wash.png";
import Professional from "../assets/Professional.png";
import Coordinating from "../assets/Coordinating.png";
import Cleaning from "../assets/Cleaning.png";
import CompleteCleaning from "../assets/Complete cleaning .png";
import room1 from "../assets/1.png";
import room2 from "../assets/2.png";
import room3 from "../assets/3.png";
import room4 from "../assets/4.png";
import room5 from "../assets/5.png";
import room6 from "../assets/6.png";
import room7 from "../assets/7.png";
import why from "../assets/Why Choose Us.png";
import WhatsappButton from "../assets/whtasapp.png";
import Call from "../assets/call.png";

// bootstrap imports
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap";
import { Card } from "react-bootstrap";

// appointmet
import AppointmentForm from "../components/Appointment";

// translation imports
import { useTranslation } from "react-i18next";
import "../locales/en.json";
import "../locales/ar.json";

const sections = [
  {
    id: "professional",
    image: Professional, // Replace with the actual import or path
    textKey: "professional_tools",
  },
  {
    id: "coordinating",
    image: Coordinating, // Replace with the actual import or path
    textKey: "coordinating_place",
  },
  {
    id: "cleaning",
    image: Cleaning, // Replace with the actual import or path
    textKey: "cleaning_bathrooms",
  },
  {
    id: "completeCleaning",
    image: CompleteCleaning, // Replace with the actual import or path
    textKey: "complete_cleaning",
  },
];

const Home = () => {
  const { i18n } = useTranslation(); // i18n instance for language change

  return (
    <>
      <Hero />
      {/* Why will you choose our services? */}
      <div className="text-center">
        <h1 className="text-dark p-5">
          {i18n.t("Why will you choose our services?")}
        </h1>
      </div>
      {/* pics */}
      <section className="pt-5 d-flex justify-content-center flex-wrap container">
        <div className="row justify-content-center w-100">
          {/* Left Section */}
          <div className="col-12 col-md-6 col-lg-8 mb-4 d-flex flex-column align-items-center">
            <div className="d-flex gap-2 justify-content-center w-100">
              {/* First Row */}
              <div className="kitchen d-flex flex-column align-items-center w-100">
                <img
                  src={kitchen}
                  alt="kitchen"
                  className="img-fluid"
                  width={300}
                />
                <p className="pt-3 text-dark text-center">
                  {i18n.t("kitchen_cleaning")}
                </p>
              </div>
              <div className="washing d-flex flex-column align-items-center w-100">
                <img
                  src={washing}
                  alt="washing"
                  className="img-fluid"
                  width={300}
                />
                <p className="pt-3 text-dark text-center">
                  {i18n.t("washing_dishes")}
                </p>
              </div>
            </div>
            <div className="d-flex gap-2 justify-content-center w-100">
              {/* Second Row */}
              <div className="changing d-flex flex-column align-items-center w-100">
                <img
                  src={changing}
                  alt="changing"
                  className="img-fluid"
                  width={300}
                />
                <p className="pt-3 text-dark text-center">
                  {i18n.t("changing_sheets")}
                </p>
              </div>
              <div className="Wash d-flex flex-column align-items-center w-100">
                <img src={Wash} alt="Wash" className="img-fluid" width={300} />
                <p className="pt-3 text-dark text-center">
                  {i18n.t("wash_surfaces")}
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
            <div className="compelete d-flex flex-column align-items-center mb-3">
              <img
                src={compelete}
                alt="compelete"
                className="img-fluid"
                width={300}
              />
              <p className="pt-3 text-center text-dark">
                {i18n.t("complete_sterilization")}
              </p>
            </div>
          </div>
        </div>
        {/* two */}
        <div className="row justify-content-center pt-3 gap-5 d-flex">
          {sections.map((section) => (
            <div
              key={section.id}
              className="col-12 col-sm-12 col-md-6 col-lg-3 d-flex justify-content-center">
              <Card style={{ width: "18rem" }} className="border-0">
                <Card.Img variant="top" src={section.image} />
                <Card.Body className="text-center">
                  <Card.Text className="text-dark">
                    {i18n.t(section.textKey)}
                  </Card.Text>
                </Card.Body>
              </Card>
            </div>
          ))}
        </div>
      </section>
      {/* end of section */}
      {/* Our Service Gallery*/}
      <div className="text-center ">
        <h1 className="text-dark pb-5 pt-5">{i18n.t("Our Service Gallery")}</h1>
      </div>
      <section className="container pt-5">
        <div className="row justify-content-center">
          {/* Left Section */}
          <div className="col-12 col-md-6 col-lg-8 mb-4 d-flex flex-column align-items-center">
            <div className="d-flex flex-wrap gap-3 justify-content-center">
              {/* First Row */}
              <div className="room">
                <img src={room1} alt="room" width={300} />
              </div>
              <div className="room">
                <img src={room2} alt="room" width={300} />
              </div>
            </div>
            <div className="d-flex flex-wrap gap-3 justify-content-center mt-3">
              {/* Second Row */}
              <div className="room">
                <img src={room5} alt="room" width={300} />
              </div>
              <div className="room">
                <img src={room6} alt="room" width={300} />
              </div>
            </div>
            <div className="d-flex flex-wrap gap-3 justify-content-center mt-3">
              {/* Third Row */}
              <div className="room">
                <img src={room3} alt="room" width={300} />
              </div>
              <div className="room">
                <img src={room4} alt="room" width={300} />
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="col-12 col-md-6 col-lg-4 mb-4 d-flex justify-content-center align-items-center">
            <div className="room">
              <img src={room7} alt="room" width={300} />
            </div>
          </div>
        </div>
      </section>

      {/* end of section */}
      <section className="container w-100">
        <div>
          <img src={why} alt="why" className="col-12" />
        </div>
      </section>
      {/* end of section */}
      {/* end of section */}
      {/* Start form section */}
      <AppointmentForm />
      {/* end of section */}
      {/* list of services */}
      <section className="container">
        <div>
          <h2>
            {i18n.t(
              "Here is a list of services the company provides to transform ordinary apartments into luxury hotel-level accommodations"
            )}
          </h2>
        </div>
        <div className="service pt-5">
          <h3> {i18n.t("1- Cleaning and Changing Upholstery")}</h3>
          <p className="fs-4 text-secondary pt-4">
            {i18n.t(
              "Cleaning all surfaces and furniture using specialized cleaning tools and products to disinfect the entire apartment."
            )}
          </p>
          <p className="fs-4 text-secondary pt-1">
            {i18n.t(
              "Deep cleaning of upholstery including cushions, bed covers, and curtains to maintain a fresh scent and a healthy environment"
            )}
          </p>
          <p className="fs-4 text-secondary pt-1">
            {i18n.t(
              "Arranging beds and organizing rooms in a way that resembles luxurious hotels."
            )}
          </p>
        </div>
        <div className="service pt-5">
          <h3> {i18n.t("2- Comprehensive Cleaning and Disinfection")}</h3>
          <p className="fs-4 text-secondary pt-4">
            {i18n.t(
              "Cleaning and sterilizing all surfaces, ensuring they are spotless and sanitized"
            )}
          </p>
          <p className="fs-4 text-secondary pt-1">
            {i18n.t(
              "Using advanced tools to get rid of germs, bacteria, and viruses."
            )}
          </p>
          <p className="fs-4 text-secondary pt-1">
            {i18n.t(
              "Full disinfection of kitchens, bathrooms, and common areas to ensure the well-being of the inhabitants."
            )}
          </p>
        </div>
        <div className="service pt-5">
          <h3> {i18n.t("3- Cleaning the Kitchen and Appliances")}</h3>
          <p className="fs-4 text-secondary pt-4">
            {i18n.t(
              "Cleaning all electrical appliances such as the refrigerator, oven, and microwave, both inside and out."
            )}
          </p>
          <p className="fs-4 text-secondary pt-1">
            {i18n.t("Washing kitchenware and cleaning work surfaces carefully")}
          </p>
        </div>
        <div className="service pt-5">
          <h3> {i18n.t("4- Cleaning and Disinfecting Bathrooms")}</h3>
          <p className="fs-4 text-secondary pt-4">
            {i18n.t(
              "Comprehensive cleaning of bathrooms, including disinfecting sinks, toilets, and showers using specialized products."
            )}
          </p>
          <p className="fs-4 text-secondary pt-1">
            {i18n.t(
              "Removing limescale and stubborn stains from surfaces and mirrors to make the bathroom look shiny and clean."
            )}
          </p>
          <p className="fs-4 text-secondary pt-1">
            {i18n.t(
              "Providing luxurious products such as new towels and toiletries to create a feeling of comfort"
            )}
          </p>
        </div>
        <div className="service pt-5">
          <h3> {i18n.t("5- Interior Styling and Beautification")}</h3>
          <p className="fs-4 text-secondary pt-4">
            {i18n.t(
              "Rearranging furniture and organizing rooms in a comfortable and appealing way to ensure simplicity and comfort in design."
            )}
          </p>
          <p className="fs-4 text-secondary pt-1">
            {i18n.t(
              "Adding luxurious touches such as decorative cushions, premium rugs, and appropriate lighting to enhance the luxurious atmosphere of the apartment"
            )}
          </p>
          <p className="fs-4 text-secondary pt-1">
            {i18n.t(
              "Providing luxurious products such as new towels and toiletries to create a feeling of comfort"
            )}
          </p>
        </div>
        <div className="service pt-5">
          <h3>{i18n.t("6- Scenting the Apartment with Luxurious Products")}</h3>
          <p className="fs-4 text-secondary pt-4">
            {i18n.t(
              "Using luxurious, natural air fresheners to scent the apartment with a refreshing fragrance that lasts for a long time."
            )}
          </p>
        </div>
      </section>
      {/* end of section */}
      {/* fixed buttons */}
      <div className="fixed-buttons">
        <button className="border-0 rounded-5 bg-transparent z-3">
          <img src={WhatsappButton} alt="" />
        </button>
        <button className="border-0 rounded-5  z-3">
          <img src={Call} alt="" />
        </button>
      </div>
      {/* Footer section */}
      <Footer />
    </>
  );
};

export default Home;
