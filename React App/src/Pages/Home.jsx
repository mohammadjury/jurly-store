import React from "react";
import "../App.css";

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import HomeBigCarousel from "../Components/HomeBigCarousel";

export default function Home() {
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
          <div>
            <img
              className="border rounded"
              width={200}
              src="https://5.imimg.com/data5/SELLER/Default/2021/4/TL/JV/EU/127973746/nike-t-shirt.jpg"
            ></img>
          </div>
          <div>
            <img
              className="border rounded"
              width={200}
              src="https://media.klopperssport.co.za/wp-content/uploads/sites/2/2023/05/827H_1.jpg"
            ></img>
          </div>
          <div>
            <img
              className="border rounded"
              width={200}
              src="https://photos6.spartoo.eu/photos/764/7646428/7646428_500_A.jpg"
            ></img>
          </div>
          <div>
            <img
              className="border rounded"
              width={200}
              src="https://www.bfgcdn.com/1500_1500_90/017-0062-8311/the-north-face-drew-peak-pullover-hoodie.jpg"
            ></img>
          </div>
          <div>
            <img
              className="border rounded"
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              className="border rounded"
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              className="border rounded"
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              className="border rounded"
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              className="border rounded"
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              className="border rounded"
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>
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
          <div>
            <img
              className="border rounded"
              width={200}
              src="https://5.imimg.com/data5/SELLER/Default/2021/4/TL/JV/EU/127973746/nike-t-shirt.jpg"
            ></img>
          </div>
          <div>
            <img
              className="border rounded"
              width={200}
              src="https://media.klopperssport.co.za/wp-content/uploads/sites/2/2023/05/827H_1.jpg"
            ></img>
          </div>
          <div>
            <img
              className="border rounded"
              width={200}
              src="https://photos6.spartoo.eu/photos/764/7646428/7646428_500_A.jpg"
            ></img>
          </div>
          <div>
            <img
              className="border rounded"
              width={200}
              src="https://www.bfgcdn.com/1500_1500_90/017-0062-8311/the-north-face-drew-peak-pullover-hoodie.jpg"
            ></img>
          </div>
          <div>
            <img
              className="border rounded"
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              className="border rounded"
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              className="border rounded"
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              className="border rounded"
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              className="border rounded"
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              className="border rounded"
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>
        </Carousel>
      </div>
    </>
  );
}
