import React from "react";
import { Link } from "react-router-dom";
import "../App.css";
import { TransitionGroup, CSSTransition } from "react-transition-group";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import HomeBigCarousel from "../Components/HomeBigCarousel";

export default function Home(props) {
  const productData = props.productData;
  const hoodiesData = productData.filter((item) => item.type === "hoodie");
  const tshirtsData = productData.filter((item) => item.type === "t-shirt");

  const listHoodiesData = hoodiesData.map((item, index) => {
    return (
      <Link
        className="carousel-itemm"
        to={"http://localhost:3000/Product/" + item.id}
      >
        <img
          className=" carousel-itemm border rounded"
          width={200}
          src={item.image}
          style={{ height: "auto", overflow: "hidden" }}
        ></img>
      </Link>
    );
  });

  const listtshirtsData = tshirtsData.map((item, index) => {
    return (
      <Link
        className="carousel-itemm"
        to={"http://localhost:3000/Product/" + item.id}
      >
        <img
          className="border rounded"
          width={200}
          src={item.image}
          style={{ height: "auto", overflow: "hidden" }}
        ></img>
      </Link>
    );
  });

  const responsive = {
    xxl: {
      breakpoint: { max: 3000, min: 1200 },
      items: 6,
      slidesToSlide: 5, // optional, default to 1.
    },
    xl: {
      breakpoint: { max: 1200, min: 992 },
      items: 5,
      slidesToSlide: 4, // optional, default to 1.
    },

    l: {
      breakpoint: { max: 992, min: 767 },
      items: 4,
      slidesToSlide: 3, // optional, default to 1.
    },
    m: {
      breakpoint: { max: 767, min: 576 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 567, min: 0 },
      items: 2,
      slidesToSlide: 1, // optional, default to 1.
    },
  };

  return (
    <>
      <HomeBigCarousel />

      <div className="container-xxl border-radius  p-3">
        <Carousel
          className="container-xxl mb-3"
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {listHoodiesData}
        </Carousel>

        <Carousel
          className="container-xxl "
          swipeable={false}
          draggable={false}
          showDots={true}
          responsive={responsive}
          ssr={false} // means to render carousel on server-side.
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={4000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile"]}
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px"
        >
          {listtshirtsData}
        </Carousel>
      </div>
    </>
  );
}
