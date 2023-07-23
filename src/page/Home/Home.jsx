import React from "react";
import Slider from "../../components/Home/slider";
import HomeCategory from "../../components/Home/HomeCategory";
import HomeProduct from "../../components/ProductCard/HomeProduct";
import DiscountSection from "../../components/Home/DiscountSection";
import HomeBrand from "../../components/Home/HomeBrand";

//import { Form } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <Slider />
      <HomeCategory />
      <HomeProduct title="الاكثر مبيعا" btntitle="المزيد" path='/mostSeller'/>
      <DiscountSection />
      <HomeProduct title="الاكثر تقييما" btntitle="المزيد" path='/mostRated'/>
      <HomeBrand title="اشهر الشركات" btntitle="المزيد" path='/allBrand'/>
    </div>
  );
};

export default Home;
