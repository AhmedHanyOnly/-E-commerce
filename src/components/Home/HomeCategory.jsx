import React from "react";
import SubTitle from "../Utility/SubTitle";
import CategoryCard from "../category/CategoryCard";
import { Container, Row } from "react-bootstrap";
import img1 from "../../images/labtop.png";
const HomeCategory = () => {
  return (
    <Container>
      <SubTitle title='التصنيفات' btntitle='المزيد' pathLink='/allCategory'/>
      <Row className="d-flex justify-content-around">
      <CategoryCard title="تخفيضات" img={img1} bgColor="#3aae16" />
      <CategoryCard title="تخفيضات" img={img1} bgColor="#3aae16" />
      <CategoryCard title="تخفيضات" img={img1} bgColor="#3aae16" />
      <CategoryCard title="تخفيضات" img={img1} bgColor="#3aae16" />
      <CategoryCard title="تخفيضات" img={img1} bgColor="#3aae16" />
      </Row>
    </Container>
  );
};

export default HomeCategory;
