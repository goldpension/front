import React from "react";
import styles from "../../css/JobTable.module.css";

const JobTable = ({ jobData }) => {
  return (
    <div className={styles.center}>
      <div className={styles.tableComponent}>
        <div className={styles.tableTitle}>
          <div style={{ flex: "1", textAlign: "center" }}>구인상태</div>
          <div style={{ flex: "1", textAlign: "center" }}>제목</div>
          <div style={{ flex: "1", textAlign: "center" }}>기업</div>
          <div style={{ flex: "1", textAlign: "center" }}>근무지역</div>
        </div>
        <div className={styles.tableContainer}>
          {jobData.map((job, index) => (
            <div className={styles.job}>
              {/* <div
              key={index}
              style={{
                display: "flex",
                alignItems: "center",
                padding: "10px 0",
              }}
            > */}
              <div className={styles.statusContainer}>
                <div
                  style={{
                    display: "inline-block",
                    color: "#ffffff",
                    backgroundColor:
                      job.status === "구인 중"
                        ? "#2400FF"
                        : job.status === "구인 완료"
                        ? "#E89C31"
                        : "white",
                    borderRadius: "50px",
                    padding: job.status === "구인 완료" ? "10px" : "10px 17px",
                    /* marginRight: "10px", */
                  }} //deadline 스타일
                >
                  {job.status}
                </div>
              </div>
              <div className={styles.jobType}>
                {job.jobType.length > 10
                  ? `${job.jobType.slice(0, 9)}...`
                  : job.jobType}
              </div>
              <div className={styles.company}>{job.company}</div>
              <div className={styles.location}>{job.location}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default JobTable;
