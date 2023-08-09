import React from 'react'
import styles from '../../css/Modal.module.css';
const Modal = ({show, close, job}) => {
  if (!show) {
    return null;
  }
  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modalContent}>
        <button onClick={close} className={styles.closeModalButton}>
          Close
        </button>
        <div>
          구인상태 <span>{job.deadline}</span>
          기업 <span>{job.oranNm}</span>
          근무지역 <span>{job.workPlcNm}</span>
        </div>
      </div>
    </div>
  )
}

export default Modal;