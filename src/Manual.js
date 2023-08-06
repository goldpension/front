import React from "react";
import { Link } from "react-router-dom";
import styles from "./css/Manual.module.css";
import Img1 from "./img/useMethod1.png";
import Img2 from "./img/useMethod2.png";
import Img3 from "./img/useMethod3.png";

const Manual = (props) => {
  return (
    <>
      <div className={styles.relati}>
        <div className={styles.image1}></div>
        <div className="text">
          <h2></h2>
        </div>
        <div className={styles.image2}></div>
        <div className="text">
          <h2></h2>
        </div>
        <div className={styles.image3}></div>
      </div>
    </>
  );
};

export default Manual;
