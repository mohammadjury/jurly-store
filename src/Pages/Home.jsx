import React from "react";
import "../App.css";
import Footer from "../Components/Footer";
import HomePageSlider from "../Components/HomePageSlider";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export default function Home() {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 6,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
  };

  return (
    <>
      <div className="container-xxl">
        <Carousel
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
              width={200}
              src="https://5.imimg.com/data5/SELLER/Default/2021/4/TL/JV/EU/127973746/nike-t-shirt.jpg"
            ></img>
          </div>
          <div>
            <img
              width={200}
              src="https://media.klopperssport.co.za/wp-content/uploads/sites/2/2023/05/827H_1.jpg"
            ></img>
          </div>
          <div>
            <img
              width={200}
              src="https://photos6.spartoo.eu/photos/764/7646428/7646428_500_A.jpg"
            ></img>
          </div>
          <div>
            <img
              width={200}
              src="https://www.bfgcdn.com/1500_1500_90/017-0062-8311/the-north-face-drew-peak-pullover-hoodie.jpg"
            ></img>
          </div>
          <div>
            <img
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>
        </Carousel>

        <Carousel
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
              width={200}
              src="https://5.imimg.com/data5/SELLER/Default/2021/4/TL/JV/EU/127973746/nike-t-shirt.jpg"
            ></img>
          </div>
          <div>
            <img
              width={200}
              src="https://media.klopperssport.co.za/wp-content/uploads/sites/2/2023/05/827H_1.jpg"
            ></img>
          </div>
          <div>
            <img
              width={200}
              src="https://photos6.spartoo.eu/photos/764/7646428/7646428_500_A.jpg"
            ></img>
          </div>
          <div>
            <img
              width={200}
              src="https://www.bfgcdn.com/1500_1500_90/017-0062-8311/the-north-face-drew-peak-pullover-hoodie.jpg"
            ></img>
          </div>
          <div>
            <img
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>

          <div>
            <img
              width={200}
              src="https://www.sportsdirect.com/images/products/66326803_l.jpg"
            ></img>
          </div>
        </Carousel>
      </div>

      <Footer />
    </>
  );
}
