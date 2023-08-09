import React, {useState, useEffect} from 'react';
import styles from '../../css/List.module.css';

const List = ({area, jobs, openModal}) => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  useEffect(() => {
    filterJobs(jobs)
    console.log(filteredJobs);
  }, [])

  const filterJobs = (jobs) => {
    let newFilterJobs = jobs.filter(job => {
      if (job.workPlcNm) {
        return area === job.workPlcNm.slice(0,2);
      }
    });
    setFilteredJobs(newFilterJobs)
  }
  return (
    <div className={styles.listContainer}>
      <div className={styles.listTitle}>
        <div style={{flex: '1', textAlign: 'center'}}>구인상태</div>
        <div style={{flex: '1', textAlign: 'center'}}>기업</div>
        <div style={{flex: '1', textAlign: 'center'}}>근무지역</div>
      </div>
      {filteredJobs.map(job => (
        <div className={styles.job} onClick={()=>openModal(job)}>
          <div className={styles.deadlineContainer}><div className={styles.deadline}>{job.deadline}</div></div>
          <div className={styles.oranNm}>{job.oranNm}</div>
          <div className={styles.workPlcNm}>{job.workPlcNm}</div>
        </div>
      ))}
    </div>
  )
}

export default List;