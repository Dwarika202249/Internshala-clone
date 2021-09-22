import React from "react";
import "./carousel.css";
import Carousel, { slidesToShowPlugin } from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import img1 from "../../images/Home/img1.PNG";
import img2 from "../../images/Home/img2.PNG";
import img3 from "../../images/Home/img3.PNG";

const Carousels = () => {
  return (
    <div className="carousel_container">
      <Carousel
        plugins={[
          "infinite",
          "arrows",
          {
            resolve: slidesToShowPlugin,
            options: {
              numberOfSlides: 1,
            },
          },
        ]}
      >
        <img src={img1} alt="sliding_img" className="slide_img" />
        <img src={img2} alt="sliding_img" className="slide_img" />
        <img src={img3} alt="sliding_img" className="slide_img" />
      </Carousel>
    </div>
  );
};

export default Carousels;
