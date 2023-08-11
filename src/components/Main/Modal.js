import React, {useEffect} from 'react'
import styles from '../../css/Modal.module.css';
const Modal = ({show, close, job, fetchData}) => {
  if (!show) {
    return null;
  }
  const handleClickContent = (e) => {
    e.stopPropagation();
  };
  console.log(job)
  return (
    <div className={styles.modalOverlay} onClick={close}>
      <div className={styles.modalContainer} onClick={handleClickContent}>
        <div className={styles.buttonContainer}>
          <button onClick={close} className={styles.closeModalButton}>
            Close
          </button>
        </div>
        <div className={styles.modalContent}>
          <div className={styles.jobDetail}>
            <div>제목<span>{job.wantedTitle}</span></div> 
            <div>상세내용 <span>{job.detCnts}</span></div>
            <div>모집인원 <span>{job.clltPrnnum}</span></div>
            <div>기업 <span>{job.plbizNm}</span></div>
            <div>주소 <span>{job.plDetAddr}</span></div>
            <div>담당자 <span>{job.clerk}</span></div>
            <div>담당자연락처 <span>{job.clerkContt}</span></div>
            <div>연령 <span>{job.age}/{job.ageLim}</span></div>
            <div>등록일 <span>{job.ftAcptDd}</span></div>
            <div>마감일 <span>{job.toAcptDd}</span></div>
          </div>
          <div className={styles.applyForm}>
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal;