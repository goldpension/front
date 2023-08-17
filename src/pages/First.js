import React, { useState } from "react";
import { ContentStep1, ContentStep2 } from "../components/First/FirstContents";
import styles from "../css/First.module.css";
import { Link } from "react-router-dom";
import koreaMap from "../img/지도.png";
import { useRecoilState } from "recoil";
import userState from "../recoil/userState";


const First = ({ onClickGoCounts }) => {
  const [loggedInUser, setLoggedInUser] = useRecoilState(userState);
  const [activeIndex, setActiveIndex] = useState(0);
  const titles = ["일자리 찾기", "회사 홍보"];
  const contents = [<ContentStep1 />, <ContentStep2 />];
  const link = ["/findJobs", "/companyPromotion", "/companyPartner/apply"];

  const handleClickTitle = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className={styles.main}>
      <div className={styles.leftSide}>
        <img src={koreaMap} alt="한반도이미지" style={{ height: "550px" }} />
      </div>
      <div className={styles.rightSide}>
        <div className={styles.firstMainComment}>
          황금연금이 항상 곁에 있을게요.
        </div>
        <div className={styles.firstContainer}>
          <div className={styles.titles}>
            {titles.map((title, index) => (
              <div
                className={`${styles.title} ${
                  activeIndex === index ? styles.selectedTitle : ""
                }`}
                key={title}
                onClick={() => handleClickTitle(index)}
              >
                {title}
              </div>
            ))}
            <div className={styles.title}>
              <Link to="/manual/useMethod" className={styles.link}>
                사용방법
              </Link>
            </div>
          </div>
          <div className={styles.firstContent}>{contents[activeIndex]}</div>
          <div className={styles.firstContentbtn}>
            <div
              className={`${styles.goCountsButton} ${
                activeIndex === 0 ? styles.selectedTitle : ""
              }`}
              onClick={() => handleClickTitle(0)}
            >
              <Link to={link[0]}>일자리 찾기</Link>
            </div>

            <div
              className={`${styles.goCountsButton} ${
                activeIndex === 1 ? styles.selectedTitle : ""
              }`}
              onClick={() => handleClickTitle(1)}
            >
              <Link to={link[1]}>회사 홍보</Link>
            </div>
            <div
              className={`${styles.goCountsButton} ${
                activeIndex === 2 ? styles.selectedTitle : ""
              }`}
              onClick={() => handleClickTitle(1)}
            >
              {loggedInUser.isLoggedIn ?
              <Link to={link[2]}>파트너사 신청하기</Link>
              :
              <Link to='/Login'>파트너사 신청하기</Link>
            }
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default First;
