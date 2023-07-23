import React from "react";
import SubTitle from "../Utility/SubTitle";
import ProductCard from "./ProductCard";
import { Container, Row } from "react-bootstrap";
import img from "../../images/item.png";
const HomeProduct = ({ btntitle, title, path }) => {
  return (
    <Container>
      <SubTitle title={title} btntitle={btntitle} pathLink={path} />
      <Row>
        <ProductCard
          img={img}
          titleProp="سماعة ابل عالية الدقة و اعلي جودة بمنفذ شحن تايب سي"
          num="4.8"
          pirce="600"
        />
        <ProductCard
          img={img}
          titleProp="سماعة ابل عالية الدقة و اعلي جودة بمنفذ شحن تايب سي"
          num="4.8"
          pirce="600"
        />
        <ProductCard
          img={img}
          titleProp="سماعة ابل عالية الدقة و اعلي جودة بمنفذ شحن تايب سي"
          num="4.8"
          pirce="600"
        />
        <ProductCard
          img={img}
          titleProp="سماعة ابل عالية الدقة و اعلي جودة بمنفذ شحن تايب سي"
          num="4.8"
          pirce="600"
        />
      </Row>
    </Container>
  );
};

export default HomeProduct;
