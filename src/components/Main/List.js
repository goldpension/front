import React, { useState, useEffect } from 'react';
import styles from '../../css/List.module.css';

const List = ({ area, jobs, openModal }) => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const jobsPerPage = 10;

  useEffect(() => {
    filterJobs(jobs);
    console.log(filteredJobs);
  }, []);

  const filterJobs = (jobs) => {
    let newFilterJobs = jobs.filter((job) => {
      if (job.workPlcNm) {
        return area === job.workPlcNm.slice(0, 2);
      }
    });
    setFilteredJobs(newFilterJobs);
  };

  // 페이지네이션 관련
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

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
    <div className={styles.listComponent}>
      <div className={styles.listTitle}>
        <div style={{ flex: '1', textAlign: 'center' }}>구인상태</div>
        <div style={{ flex: '1', textAlign: 'center' }}>제목</div>
        <div style={{ flex: '1', textAlign: 'center' }}>기업</div>
        <div style={{ flex: '1', textAlign: 'center' }}>근무지역</div>
      </div>
      <div className={styles.listContainer}>
      {currentJobs.map((job) => (
        <div className={styles.job} onClick={() => openModal(job)}>
          <div className={styles.deadlineContainer}>
            <div className={styles.deadline}>{job.deadline}</div>
          </div>
          <div className={styles.recrtTitle}>{job.recrtTitle.length>10 ? `${job.recrtTitle.slice(0,9)}...` : job.recrtTitle}</div>
          <div className={styles.oranNm}>{job.oranNm}</div>
          <div className={styles.workPlcNm}>{job.workPlcNm}</div>
        </div>
      ))}
      </div>
      <div className={styles.pagination}>{renderPageNumbers()}</div>
    </div>
  );
};

export default List;