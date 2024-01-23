import React, {useState, useEffect} from 'react';
import styles from '../../css/Main.module.css';

const AreaCounts = ({jobs, onClickCount}) => {
  const [counts, setCounts] = useState({});

  useEffect(() => {
    getCounts(jobs);
  }, [jobs])

  const getCounts = (jobs) => {
    let areaCounts = { 전체: 0 };
    jobs.forEach((job) => {
      if (job.deadline === "접수중") {
        areaCounts["전체"] += 1;
        if (job.workPlcNm) {
          const area = job.workPlcNm.slice(0, 2);
          if (!areaCounts[area]) {
            areaCounts[area] = 1;
          } else {
            areaCounts[area] += 1;
          }
        } else {
          if (!areaCounts["기타"]) {
            areaCounts["기타"] = 1;
          } else {
            areaCounts["기타"] += 1;
          }
        }
      }
    });
    setCounts(areaCounts);
  };
  
  return (
    Object.keys(counts).length === 0 ? (
      <div>Loading...</div>
    ) : (
      <div className={styles.areaCountsComponent}>
        <p className={styles.bigFont}>지금 등록된 일자리수 <span className={styles.totalCounts}>{counts['전체']}</span>개</p>
        <div className={styles.areaCountsContainer}>
          <div className={styles.areaCount} onClick={()=>onClickCount('서울')}><div className={styles.areaName}>서울시</div> <div className={styles.count}>{counts['서울'] ? counts['서울'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount('경기')}><div className={styles.areaName}>경기도</div> <div className={styles.count}>{counts['경기'] ? counts['경기'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount('충북')}><div className={styles.areaName}>충청북도</div> <div className={styles.count}>{counts['충북'] ? counts['충북'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount('충남')}><div className={styles.areaName}>충청남도</div> <div className={styles.count}>{counts['충남'] ? counts['충남'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount('경북')}><div className={styles.areaName}>경상북도</div> <div className={styles.count}>{counts['경북'] ? counts['경북'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount('경남')}><div className={styles.areaName}>경상남도</div> <div className={styles.count}>{counts['경남'] ? counts['경남'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount('강원')}><div className={styles.areaName}>강원도</div> <div className={styles.count}>{counts['강원'] ? counts['강원'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount('제주')}><div className={styles.areaName}>제주도</div> <div className={styles.count}>{counts['제주'] ? counts['제주'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount('부산')}><div className={styles.areaName}>부산</div> <div className={styles.count}>{counts['부산'] ? counts['부산'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount('인천')}><div className={styles.areaName}>인천</div> <div className={styles.count}>{counts['인천'] ? counts['인천'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount('대구')}><div className={styles.areaName}>대구</div> <div className={styles.count}>{counts['대구'] ? counts['대구'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount('대전')}><div className={styles.areaName}>대전</div> <div className={styles.count}>{counts['대전'] ? counts['대전'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount('광주')}><div className={styles.areaName}>광주</div> <div className={styles.count}>{counts['광주'] ? counts['광주'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount('울산')}><div className={styles.areaName}>울산</div> <div className={styles.count}>{counts['울산'] ? counts['울산'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount('세종')}><div className={styles.areaName}>세종</div> <div className={styles.count}>{counts['세종'] ? counts['세종'] : '0'}</div></div>
          <div className={styles.areaCount} onClick={()=>onClickCount()}><div className={styles.areaName}>기타</div> <div className={styles.count}>{counts['기타'] ? counts['기타'] : '0'}</div></div>
        </div>
      </div>
    )
  );
}

export default AreaCounts;