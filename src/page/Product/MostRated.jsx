import React from 'react'
import { Container, Row } from "react-bootstrap";
import SubTitle from "../../components/Utility/SubTitle";
import ProductCard from "../../components/ProductCard/ProductCard";
import img from "../../images/item.png";
const MostRated = () => {
  return (
    <Container style={{ minHeight: "calc(100vh - 174px)" }}>
      <SubTitle title="الاكثر مبيعا" pathLink="/mostSeller" />
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
  )
}

export default MostRated
