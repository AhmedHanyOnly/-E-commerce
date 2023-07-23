import React from "react";
import AllCategory from "../../components/category/AllCategory";
import SubTitle from "../../components/Utility/SubTitle";
import { Container, Row } from "react-bootstrap";
import img1 from "../../images/cat2.png";
import img2 from "../../images/clothe.png";
import img3 from "../../images/labtop.png";
import img4 from "../../images/mobile.png";
import img5 from "../../images/pic.png";
import img6 from "../../images/prod1.png";
import img7 from "../../images/prod3.png";
import Pagination from "../../components/Utility/Pagination";
const CategoryPage = () => {
  return (
    <Container style={{ minHeight: "calc(100vh - 174px)" }}>
      <SubTitle title="التصنيفات" />
      <Row className="d-flex justify-content-around my-2 mx-1">
        <AllCategory bgColor="red" img={img1} title="اجهزة منزلية" />
        <AllCategory bgColor="yellow" img={img3} title="اجهزة منزلية" />
        <AllCategory bgColor="red" img={img1} title="اجهزة منزلية" />
        <AllCategory bgColor="blue" img={img4} title="اجهزة منزلية" />
        <AllCategory bgColor="black" img={img5} title="اجهزة منزلية" />
        <AllCategory bgColor="yellow" img={img3} title="محمول" />
        <AllCategory bgColor="green" img={img2} title="محمول" />
        <AllCategory bgColor="red" img={img1} title="محمول" />
        <AllCategory bgColor="blue" img={img4} title="محمول" />
        <AllCategory bgColor="black" img={img5} title="محمول" />
        <AllCategory bgColor="yellow" img={img3} title="مطبخ" />
        <AllCategory bgColor="green" img={img2} title="مطبخ" />
        <AllCategory bgColor="red" img={img1} title="مطبخ" />
        <AllCategory bgColor="blue" img={img4} title="مطبخ" />
        <AllCategory bgColor="black" img={img5} title="مطبخ" />
        <AllCategory bgColor="yellow" img={img3} title="ابل" />
        <AllCategory bgColor="green" img={img2} title="ابل" />
        <AllCategory bgColor="orange" img={img6} title="ابل" />
        <AllCategory bgColor="purple" img={img7} title="ابل" />
        <AllCategory bgColor="blue" img={img4} title="سامسونج" />
        <AllCategory bgColor="black" img={img5} title="سامسونج" />
        <AllCategory bgColor="orange" img={img6} title="سامسونج" />
        <AllCategory bgColor="purple" img={img7} title="سامسونج" />
      </Row>
      <Pagination/>
    </Container>
  );
};

export default CategoryPage;
