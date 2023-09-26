import React from 'react'
import styles from '../../css/List.module.css'

const Job = ({job, openModal}) => {
  return (
    <div className={styles.job} onClick={() => openModal(job)}>
      <div className={styles.deadlineContainer}>
        <div className={styles.deadline}>{job.deadline}</div>
      </div>
      <div className={styles.recrtTitle}>
        {job.recrtTitle.length > 30 ? `${job.recrtTitle.slice(0, 29)}...` : job.recrtTitle}
      </div>
      <div className={styles.oranNm}>
        {job.oranNm.length > 20 ? `${job.oranNm.slice(0, 20)}...` : job.oranNm}
      </div>
      <div className={styles.workPlcNm}>{job.workPlcNm}</div>
    </div>
  )
}

export default React.memo(Job);