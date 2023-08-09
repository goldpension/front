import React from 'react'
import styles from '../../css/Main.module.css';
const AreaCounts = ({counts, onClickCount}) => {

  return (
    <div className={styles.areaCountsComponent}>
        <p className={styles.bigFont}>지금 등록된 일자리수 <span className={styles.totalCounts}>{counts['전체']}</span>개</p>
        <div className={styles.areaCountsContainer}>
          <div className={styles.areaCount} onClick={()=>onClickCount('서울')}>서울시 {counts['서울']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('경기')}>경기도 {counts['경기']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('충북')}>충청북도 {counts['충북']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('충남')}>충청남도 {counts['충남']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('경북')}>경상북도 {counts['경북']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('경남')}>경상남도 {counts['경남']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('강원')}>강원도 {counts['강원']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('제주')}>제주도 {counts['제주']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('부산')}>부산 {counts['부산']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('인천')}>인천 {counts['인천']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('대구')}>대구 {counts['대구']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('대전')}>대전 {counts['대전']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('광주')}>광주 {counts['광주']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('울산')}>울산 {counts['울산']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('세종')}>세종 {counts['세종']}</div>
          <div className={styles.areaCount} onClick={()=>onClickCount('기타')}>기타 {counts['기타']}</div>
        </div>
      </div>
  )
}

export default AreaCounts;