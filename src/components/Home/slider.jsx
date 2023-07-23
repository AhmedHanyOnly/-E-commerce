import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import { useSelector } from "react-redux";
import img1 from "../../images/slider1.png";
import img2 from "../../images/slider2.png";
import img3 from "../../images/prod3.png";

const Slider = () => {
  const [index, setIndex] = useState(0);

  const handle = (selectIndex) => {
    setIndex(selectIndex);
  };
  return (
    <div >
      <Carousel activeIndex={index} onSelect={handle} >
        <Carousel.Item className="bg-slider" interval={2000}>
          <div className="d-flex   gap-3 justify-content-center align-items-center">
            <img
              className=""
              src={img1}
              alt="First slide"
              style={{ width: "313.53px", height: "296px" }}
            />
            <div className="text-slider1">
              <h3>احدث مستحضرات التجميل</h3>
              <p>مع هدايا بعد الشراء</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="bg-slider2" interval={2000}>
          <div className="d-flex  gap-3 justify-content-center align-items-center">
            <img
              style={{ width: "313.53px", height: "296px" }}
              className=""
              src={img2}
              alt="First slide"
            />
            <div className="text-slider2">
              {" "}
              <h3>عروض و خصومات للعائلات</h3>
              <p>استمتع بخصم 10% عند شراء اول منتج</p>
            </div>
          </div>
        </Carousel.Item>
        <Carousel.Item className="bg-slider3" interval={2000}>
          <div className="d-flex  gap-3 justify-content-center align-items-center">
            <img
              className=""
              src={img3}
              alt="First slide"
              style={{ width: "313.53px", height: "296px" }}
            />
            <div className="text-slider3">
              <h3>طقم العرائس للمطبخ</h3>
              <p>تخفيضات تصل الي 50%-70%</p>
            </div>
          </div>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
