import React, { useState } from "react";
import styles from "../../css/JobTable.module.css";

const JobTable = ({ jobDatas }) => {
  const jobsPerPage = 4; // 한 페이지당 보여줄 직업 수
  const [currentPage, setCurrentPage] = useState(1); // 현재 페이지 상태

  // 현재 페이지에 해당하는 직업 목록 계산
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = jobDatas.slice(indexOfFirstJob, indexOfLastJob);

  // 전체 페이지 수 계산
  const totalPages = Math.ceil(jobDatas.length / jobsPerPage);

  // 페이지 번호 버튼 렌더링
  const renderPageNumbers = () => {
    const pages = [];

    for (let i = 1; i <= totalPages; i++) {
      pages.push(
        <button
          className={styles.paginationButton}
          key={i}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    return pages;
  };

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
          {currentJobs.map((job, index) => (
            <div className={styles.job} key={index}>
              <div className={styles.statusContainer}>
                <div
                  style={{
                    display: "inline-block",
                    color: "#ffffff",
                    backgroundColor:
                      job.searching === "구인 중"
                        ? "#2400FF"
                        : job.searching === "구인 완료"
                        ? "#E89C31"
                        : "white",
                    borderRadius: "50px",
                    padding:
                      job.searching === "구인 완료" ? "10px" : "10px 17px",
                    /* marginRight: "10px", */
                  }} //deadline 스타일
                >
                  {job.searching}
                </div>
              </div>
              <div className={styles.jobType}>
                {job.apply_detail.length > 10
                  ? `${job.apply_detail.slice(0, 9)}...`
                  : job.apply_detail}
              </div>
              <div className={styles.company}>{job.company_name}</div>
              <div className={styles.location}>{job.work_place}</div>
            </div>
          ))}
        </div>
        <div className={styles.pagination}>{renderPageNumbers()}</div>
      </div>
    </div>
  );
};

export default JobTable;
