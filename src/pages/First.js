import React, { useState, useEffect } from "react";
import debounce from 'lodash/debounce';
import { ContentStep1, ContentStep2 } from "../components/First/FirstContents";
import styles from "../css/First.module.css";
import cards from "../css/card.module.css";
import { Link } from "react-router-dom";
import koreaMap from "../img/지도.png";
import { useRecoilState } from "recoil";
import seniorState from "../recoil/seniorState";

const First = ({ onClickGoCounts }) => {
  const [loggedInUser, setLoggedInUser] = useRecoilState(seniorState);
  const [activeIndex, setActiveIndex] = useState(0);
  const titles = ["일반 일자리", "검증된 일자리"];
  const contents = [<ContentStep1 />, <ContentStep2 />];
  const link = ["/findJobs", "/companyPromotion", "/companyPartner/apply"];
  const [width, setWidth] = useState(window.innerWidth);

  const handleClickTitle = (index) => {
    setActiveIndex(index);
  };

  const updateWidth = debounce(() => {
    setWidth(window.innerWidth);
  }, 500);

  useEffect(() => {
    document.title = '일자리 찾기 - 황금연금';
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, [])


  return (
    <div className={styles.main}>
      <div className={styles.leftSide}>
        <img src={koreaMap} alt="한반도이미지"/>
      </div>
      <div className={styles.rightSide}>
        {width < 1024 &&
        <>
          <div className={styles.firstMainComment}>
            <p>은퇴 후의 첫 걸음을 응원합니다!</p>
            <div>
              <p>'새로운 시작'이라는 보물을 찾아</p>
              <p>인생의 후반기를 즐겁게 보내세요!</p>
            </div>
            <div>
              <p>황금연금이 밝고 건강한 삶을 위한</p>
              <p>동반자가 되어 드리겠습니다.</p>
            </div>
          </div>
          <div className={styles.firstContainer}>
            <Link to={link[0]}>
              <div className={styles.firstContent}>
                <div className={styles.title}>
                  <span className={styles.link}>일반 일자리</span>
                </div>
                <div>
                  지역사회와 함께 성장하고 싶으신가요?<br/>
                  지자체에서 제안하는 공고를 확인할 수 있어요!<br/>
                  당신의 경험으로 우리 지역을 더욱<br/>
                  따뜻한 곳으로 만들어갈 시간입니다!
                </div>
              </div>
            </Link>
            <Link to={link[1]}>
              <div className={styles.firstContent}>
                <div className={styles.title}>
                  <span className={styles.link}>검증된 일자리</span>
                </div>
                <div style={{margin: '10px 0'}}>
                  여러분과 함께 성장하려는 기업들이 기다려요.<br/>
                  당신의 경험이 그들에게 큰 동력이 될 거랍니다.<br/>
                  별이 붙은 공고는 황금연금이 보증하는<br/>
                  일자리이니 더욱 눈여겨 보세요!
                </div>
                <div className={cards.cp_card}>
                  <div className={cards.cp_cardJstatus}>
                    <p>구인중</p>
                  </div>
                  <div className={cards.cp_cardJname}>
                    <p>건물경비원</p>
                  </div>
                  <div className={cards.cp_cardCname}>
                    <p>잠실한양3차아파트대표회의</p>
                  </div>
                  <div className={cards.cp_cardJplace}>
                    <p>서울시 송파구 방이동</p>
                  </div>
                  <div className={cards.cp_cardDay}>
                    <p>월~금</p>
                  </div>
                  <div className={cards.cp_cardTime}>
                    <p>오전 9시 ~ 오후 6시</p>
                  </div>
                </div>
              </div>
            </Link>
            <Link to="/manual/useMethod">
              <div className={styles.firstContent}>
                <div className={styles.title}>
                  <span  className={styles.link}>
                    사용방법
                  </span>
                </div>
                <div>황금연금은 이렇게 이용해요!</div>
              </div>
            </Link>
          </div>
        </>
        }
        {width >= 1024 && 
        <>
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
              <Link to={link[0]}>일반 일자리</Link>
            </div>

            <div
              className={`${styles.goCountsButton} ${
                activeIndex === 1 ? styles.selectedTitle : ""
              }`}
              onClick={() => handleClickTitle(1)}
            >
              <Link to={link[1]}>검증된 일자리</Link>
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
        
        </>}
      </div>
    </div>
  );
};

export default First;
