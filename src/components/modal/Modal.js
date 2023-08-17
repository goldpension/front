import React, { useState } from "react";
import styles from "../../css/Modal.module.css";
import { ApplyVisit } from "./ApplyVisit";
import { ModalContent } from "./ModalContent";
import ApplyForm from "./ApplyForm";

const Modal = ({ show, close, job, type }) => {
  const [applyCompleted, SetApplyCompleted] = useState(false);
  if (!show) {
    return null;
  }
  const handleClickContent = (e) => {
    e.stopPropagation();
  };
  const renderApplyMethod = (method) => {
    if (type === "guarantee") {
      return <ApplyForm />;
    }
    switch (method) {
      case "CM0801":
        return <ApplyVisit method={"온라인"} />;
      case "CM0802":
        return <ApplyVisit method={"이메일"} />;
      case "CM0803":
        return <ApplyVisit method={"팩스"} />;
      case "CM0804":
        return <ApplyVisit method={"방문"} address={job.plDetAddr} />;
      default:
        return null;
    }
  };

  return (
    <div className={styles.modalOverlay} onClick={close}>
      <div className={styles.modalContainer} onClick={handleClickContent}>
        <div className={styles.buttonContainer}>
          <button onClick={close} className={styles.closeModalButton}>
            닫기
          </button>
        </div>

        {applyCompleted ? (
          <div className={styles.modalContent}>
            <div className={styles.applyCompletedContent}>
              <p>지원이 완료되었습니다!</p>
              <p>지원서 작성 내용과 공고를 확인하시려면</p>
              <p>
                <span>여기</span> 혹은 접수 확인 페이지로 들어가세요.
              </p>
            </div>
          </div>
        </div>
        ) 
        : 
        (
        <div className={styles.modalContent}>
          <ModalContent job={job} type={type}/>
          {renderApplyMethod(job.acptMthdCd)}
        </div>
        )}
      </div>
    </div>
  );
};

export default Modal;
