import React from "react";
import { Link } from "react-router-dom";
import "./Gallery.css";
const Gallery = () => {
  return (
    <div style={{ marginTop: 50 }}>
      <section className="gallery" id="gallery">
        <h1 className="heading">
          <span>g</span>
          <span>a</span>
          <span>l</span>
          <span>l</span>
          <span>e</span>
          <span>r</span>
          <span>y</span>
        </h1>

        <div className="box-container">
          <div className="box">
            <img
              src="https://i.ibb.co/0VnWpQP/saikrishna-saketh-yellapragada-CAwb-HCW1-I8-A-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>the green</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>

          <div className="box">
            <img
              src="https://i.ibb.co/YXqdWXc/jochen-van-wylick-7-Qpnfgag-Knw-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>the posh</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="https://i.ibb.co/pZGr9vr/resized-Image.png" alt="" />
            <div className="content">
              <h3>the classy</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img src="https://i.ibb.co/Kxvp09G/resized-Image-1.png" alt="" />
            <div className="content">
              <h3>the superb</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/f2MBW3W/tatiana-nifatova-x-Ifyg-O6-H-0-I-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>the calm</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
          <div className="box">
            <img
              src="https://i.ibb.co/xG9cbM4/sarah-dorweiler-ALt-Na-u-Ky3-M-unsplash.jpg"
              alt=""
            />
            <div className="content">
              <h3>the real</h3>

              <Link to="#" className="btn">
                see more
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
