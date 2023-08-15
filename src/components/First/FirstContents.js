// ContentComponents.js
import React, {useState, useEffect} from 'react';
import styles from '../../css/First.module.css';

export const ContentStep1 = () => {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-around'
    }}>
      <p>은퇴 후의 첫 걸음을 응원합니다!</p>
      <p>'새로운 시작'이라는 보물을 찾아<br/>인생의 후반기를 즐겁게 보내세요!</p>
      <p>황금연금이 밝고 건강한 삶을 위한 동반자가 되어 드리겠습니다.</p>
    </div>
  )
};

const Card = () => {
  return (
    <div className={styles.card}>
      <p>어유 말도 마다요</p>
      <p>너무 좋네유</p>
    </div>
  )
}
const Card2 = () => {
  return (
    <div className={styles.card}>
      <p>별론데요?</p>
      <p>내 마음의 별로</p>
    </div>
  )
}
export const ContentStep2 = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const cards = ['card1', 'card2', 'card3'];
  const contents = [
    <Card/>,
    <Card2/>,
    <Card/>,
    <Card2/>,
  ]
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % contents.length);
    }, 3000); // 변경 시간 간격 조정 (밀리초 단위)

    // 정리 함수로 인터벌을 제거
    return () => {
      clearInterval(interval);
    };
  }, []);

  const handleDotClick = (index) => {
    setActiveIndex(index);
  };

  return (
    <div style={{height: '100%'}}>
      <p>황금연금과 함께하는 노후, 이미 많은 분들이 경험했어요!</p>
      <div className={styles.cardContainer}>
        {contents[activeIndex]}
      </div>
      <div className={styles.sliderContainer}>
        {contents.map((_, index) => (
          <div
            key={index}
            className={`${styles.sliderDot} ${
              index === activeIndex ? styles.active : ""
            }`}
            onClick={() => handleDotClick(index)}
          ></div>
        ))}
      </div>
    </div>
  )
};
