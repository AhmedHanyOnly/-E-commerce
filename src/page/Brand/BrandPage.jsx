import React from "react";
import { Container, Row } from "react-bootstrap";
import SubTitle from "../../components/Utility/SubTitle";
import Brand from "../../components/Brand/Brand";

import brand from "../../images/brand1.png";
import brand2 from "../../images/brand2.png";
import brand3 from "../../images/brand3.png";
import Pagination from "../../components/Utility/Pagination";
const BrandPage = () => {
  return (
    <Container style={{ minHeight: "calc(100vh - 174px)" }}>
      <SubTitle title="اشهر الشركات" />
      <Row className="d-flex justify-content-around my-2 mx-1">
        <Brand img={brand} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand} />
        <Brand img={brand2} />
        <Brand img={brand3} />
        <Brand img={brand} />
        <Brand img={brand2} />
        <Brand img={brand3} />
      </Row>
      <Pagination/>
    </Container>
  );
};

export default BrandPage;
