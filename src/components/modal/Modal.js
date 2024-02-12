import React, { useState, useRef, useEffect } from "react";
import styles from "../../css/Modal.module.css";
import { ApplyVisit } from "./ApplyVisit";
import { ModalContent } from "./ModalContent";
import ApplyForm from "./ApplyForm";

const Modal = ({ show, close, job, type }) => {
  console.log('모달 오픈~')
  const [applyCompleted, setApplyCompleted] = useState(false);
  const modalRef = useRef();

  useEffect(() => {
    if (show) {
        modalRef.current.focus();
    }
  }, [show]);

  if (!show) {
    return null;
  }

  const onClickSubmit = () => {
    setApplyCompleted(true);
  };
  const checkDeadline = (apply_deadline) => {
    const today = new Date();
    const deadline = new Date(apply_deadline);
    today.setHours(0, 0, 0, 0);
    if (deadline < today) {
      return "구인마감";
    } else if (deadline > today) {
      return "구인중";
    } else {
      return "오늘마감";
    }
  };
  const handleClickContent = (e) => {
    e.stopPropagation();
  };
  const renderApplyMethod = (method) => {
    if (type === "guarantee") {
      return (
        <ApplyForm
          job={job}
          checkDeadline={checkDeadline}
          onClickSubmit={onClickSubmit}
        />
      );
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
    <div className={styles.modalOverlay} onClick={close} role="dialog" tabIndex={-1} ref={modalRef} >
      <div className={styles.modalContainer} onClick={handleClickContent}>
        <header className={styles.buttonContainer}>
          <button onClick={close} className={styles.closeModalButton}>
            닫기
          </button>
        </header>

        {applyCompleted ? (
          <main className={styles.modalContent}>
            <div className={styles.applyCompletedContent}>
              <p>지원이 완료되었습니다!</p>
              <p>지원서 작성 내용과 공고를 확인하시려면</p>
              <p>
                <em>여기</em> 혹은 접수 확인 페이지로 들어가세요.
              </p>
            </div>
          </main>
        ) : (
          <main className={styles.modalContent}>
            <ModalContent job={job} type={type} checkDeadline={checkDeadline} />
            {renderApplyMethod(job.acptMthdCd)}
          </main>
        )}
      </div>
    </div>
  );
};

export default Modal;
