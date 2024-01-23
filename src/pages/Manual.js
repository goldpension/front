import React, { useState } from "react";
import styles from "../css/Manual.module.css";
import Img1 from "../img/useMethod1.png";
import Img2 from "../img/useMethod2.png";
import Img3 from "../img/useMethod3.png";
import DownArrow from "../img/down-arrow.png";
const Manual = (props) => {
  const [activeImage, setActiveImage] = useState(Img1);

  const handleClick = () => {
    if (activeImage === Img1) {
      setActiveImage(Img2);
    } else if (activeImage === Img2) {
      setActiveImage(Img3);
    } else if (activeImage === Img3) {
      setActiveImage(Img1);
    }
  };

  return (
    <div className={styles.relati}>
      <div className={styles.image}>
        <img src={activeImage} alt="Method"/> {/* 이미지 변경 시 0.5초 동안 애니메이션 적용 */}
      </div>
      <button className={styles.change_button} onClick={handleClick}>
        <img src={DownArrow} alt='next_button' />
      </button>
    </div>
  );
};

export default Manual;
