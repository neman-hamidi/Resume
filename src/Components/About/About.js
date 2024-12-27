import React from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneForwardedIcon from "@mui/icons-material/PhoneForwarded";
import ContactMailIcon from "@mui/icons-material/ContactMail";
import { Form } from "react-bootstrap";
import "./About.css";

export default function About() {
  return (
    <div>
      <div className="pt-5">
        <p className="fs-2 fw-bold text-center">ارتباط با من</p>
        <p className="text-center">این متن ساختگی و فقط جهت نمایش میباشد</p>
        <div className="div-stable"></div>
      </div>
      <div className="container about">
        <div className="row">
          <div className="col-8">
            <Form>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="نام *" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="email" placeholder="پست الکترونیک *" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlInput1"
              >
                <Form.Control type="text" placeholder="موضوع" />
              </Form.Group>
              <Form.Group
                className="mb-3"
                controlId="exampleForm.ControlTextarea1"
              >
                <Form.Label>پیغام *</Form.Label>
                <Form.Control as="textarea" rows={3} />
              </Form.Group>
            </Form>
            <button className="btn btn-dark">ارسال</button>
          </div>
          <div className="col-4">
            <div className="bg-blog text-center p-3">
              <div>
                <LocationOnIcon />
                <h6>تهران، خ انقلاب</h6>
              </div>
              <div className="my-5">
                <PhoneForwardedIcon />
                <h6>09105679278</h6>
              </div>
              <div>
                <ContactMailIcon />
                <h6>contact@gmail.com</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3238.4755287237367!2d51.406780975300855!3d35.739115126792925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3f8e060ddacbb909%3A0x2297707295d2278b!2sTehran%20Province%2C%20Valiasr%20St%2C%20Iran!5e0!3m2!1sen!2s!4v1728676286395!5m2!1sen!2s"
        className="iframe-map"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}
