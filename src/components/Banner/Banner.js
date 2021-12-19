import { motion } from "framer-motion";
import React from "react";
import { Carousel } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <section className="main-banner ">
      <Carousel fade>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/pZGr9vr/resized-Image.png"
            alt="Second slide"
          />

          <Carousel.Caption>
            • <h1>Beauty is in your mind!</h1>•{" "}
            <p>Why so late? We are waiting for you!</p>
            <div className="btn-banner">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.3 }}
                className="readmore-btn"
              >
                Read More
              </motion.button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://i.ibb.co/Kxvp09G/resized-Image-1.png"
            alt="First slide"
          />

          <Carousel.Caption>
            <h1>We design your beauty</h1>•{" "}
            <p>Why so late? We are waiting for you!</p>
            <div className="btn-banner">
              <motion.button
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 1.3 }}
                className="readmore-btn"
              >
                Read More
              </motion.button>
            </div>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </section>
  );
};

export default Banner;
