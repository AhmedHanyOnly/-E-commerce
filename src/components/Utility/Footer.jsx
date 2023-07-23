import React from "react";
import { Col, Row } from "react-bootstrap";
import { AiOutlinePhone } from "react-icons/ai";
import { SlSocialFacebook } from "react-icons/sl";
import { SlSocialTwitter } from "react-icons/sl";
import { SlSocialInstagram } from "react-icons/sl";
const Footer = () => {
  return (
    <div className="bg-footer">
      <Row className="  ">
        <Col sm="6">
          <div className="d-flex justify-content-center">
            <p>الشروط و الاحكام</p>
            <p>سياسة الخصوصية</p>
            <p>اتصل بنا</p>
          </div>
        </Col>
        <Col sm="6" className="d-flex justify-content-center">
          <div className="d-flex ">
            <AiOutlinePhone className="text-light fs-4 mt-2 "/>
            <p className="p-0 my-2 mx-1"  >01069441618</p>
          </div>
          <SlSocialFacebook className="text-light fs-4 mt-2 mx-2 i-facebook"/>
          <SlSocialTwitter className="text-light fs-4 mt-2 mx-2 i-twitter"/>
          <SlSocialInstagram className="text-light fs-4 mt-2 mx-2 i-insta" />
        </Col>
      </Row>
    </div>
  );
};

export default Footer;
