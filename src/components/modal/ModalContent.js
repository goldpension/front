import React from "react";
import styles from "../../css/Modal.module.css";
export const ModalContent = ({ job, type, checkDeadline }) => {
  return (
    <>
      {type === "guarantee" ? (
        <div className={styles.jobDetails}>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>구인상태</span>
            <span style={{ flex: "4" }}>
              {checkDeadline(job.apply_deadline)}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>직종</span>
            <span style={{ flex: "4" }}>
              {job.apply_work ? job.apply_work : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>업무 내용</span>
            <span style={{ flex: "4" }}>
              {job.apply_detail ? job.apply_detail : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>기업</span>
            <span style={{ flex: "4" }}>
              {job.company_name ? job.company_name : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>근무지역</span>
            <span style={{ flex: "4" }}>
              {job.work_place ? job.work_place : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>근무요일</span>
            <span style={{ flex: "4" }}>
              {job.work_day ? job.work_day : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>근무시간</span>
            <span style={{ flex: "4" }}>
              {job.work_hour ? job.work_hour : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>근무기간</span>{" "}
            <span style={{ flex: "4" }}>
              {job.work_term}/{job.work_term}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>급여</span>
            <span style={{ flex: "4" }}>
              {job.work_pay ? job.work_pay : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>연령</span>
            <span style={{ flex: "4" }}>
              {job.apply_age ? job.apply_age : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>희망경력</span>
            <span style={{ flex: "4" }}>
              {job.work_experience ? job.work_experience : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>마감일</span>
            <span style={{ flex: "4" }}>
              {job.apply_deadline ? job.apply_deadline : "없음"}
            </span>
          </div>
        </div>
      ) : (
        <div className={styles.jobDetails}>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>제목</span>
            <span style={{ flex: "4" }}>
              {job.wantedTitle ? job.wantedTitle : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>상세내용</span>
            <span style={{ flex: "4" }}>
              {job.detCnts ? job.detCnts : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>모집인원</span>
            <span style={{ flex: "4" }}>
              {job.clltPrnnum ? job.clltPrnnum : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>기업</span>
            <span style={{ flex: "4" }}>
              {job.plbizNm ? job.plbizNm : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>주소</span>
            <span style={{ flex: "4" }}>
              {job.plDetAddr ? job.plDetAddr : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>담당자</span>
            <span style={{ flex: "4" }}>{job.clerk ? job.clerk : "없음"}</span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>담당자연락처</span>
            <span style={{ flex: "4" }}>
              {job.clerkContt ? job.clerkContt : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>연령</span>{" "}
            <span style={{ flex: "4" }}>
              {job.age}/{job.ageLim}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>등록일</span>
            <span style={{ flex: "4" }}>
              {job.frAcptDd ? job.frAcptDd : "없음"}
            </span>
          </div>
          <div className={styles.jobDetail}>
            <span style={{ flex: "1" }}>마감일</span>
            <span style={{ flex: "4" }}>
              {job.toAcptDd ? job.toAcptDd : "없음"}
            </span>
          </div>
        </div>
      )}
    </>
  );
};
