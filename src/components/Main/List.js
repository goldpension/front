import React, { useState, useEffect } from 'react';
import styles from '../../css/List.module.css';

const List = ({ area, jobs, openModal }) => {
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState('');
  const jobsPerPage = 10;
  const groupPerPage = 10;
  const [currentGroup, setCurrentGroup] = useState(1);  //10단위의 버튼들 
  useEffect(() => {
    filterJobs(jobs);
  }, [jobs, searchTerm]);

  //전체 jobs를 보냅니다 
  const filterJobs = (jobs) => {
    let newFilterJobs = jobs.filter((job) => {
      if (job.workPlcNm) {
        return area === job.workPlcNm.slice(0, 2);
      } else {
        return (area === job.workPlcNm) && (job.deadline === '접수중');
      }
    });
    if (searchTerm) {
      newFilterJobs = newFilterJobs.filter((job) =>
        job.recrtTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.oranNm.toLowerCase().includes(searchTerm.toLowerCase()) ||
        job.workPlcNm.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredJobs(newFilterJobs);
    console.log(newFilterJobs)
    setCurrentPage(1);
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      filterJobs(jobs);
    }
  };

  // 페이지네이션 관련
  const indexOfLastJob = currentPage * jobsPerPage;
  const indexOfFirstJob = indexOfLastJob - jobsPerPage;
  const currentJobs = filteredJobs.slice(indexOfFirstJob, indexOfLastJob);

  const totalPages = Math.ceil(filteredJobs.length / jobsPerPage);

  const nextGroup = () => {
    if (currentGroup < Math.ceil(totalPages / groupPerPage)) {
      setCurrentGroup(currentGroup + 1);
    }
  };

  const prevGroup = () => {
    if (currentGroup > 1) {
      setCurrentGroup(currentGroup - 1);
    }
  };
  
  const renderPageNumbers = () => {
    const pages = [];

    for (let i = (currentGroup - 1) * groupPerPage + 1;
    i <= currentGroup * groupPerPage && i <= totalPages;
    i++) {
      pages.push(
        <button
          className={`${styles.paginationButton} ${currentPage === i ? styles.active : ''}`}
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
      <div className={styles.searchContainer}>
        <p className={styles.listMainComment}>
          지금 <span className={styles.areaAndCounts}>{area ? area : '기타'}</span>에 등록된 일자리 수{' '}
          <span className={styles.areaAndCounts}>{filteredJobs.length}</span>개!
        </p>
        <div className={styles.search}>
          <input
            type="text"
            placeholder="제목, 기업, 근무지역을 검색해보세요."
            value={searchTerm}
            onChange={handleSearch}
            onKeyDown={handleKeyDown}
            className={styles.searchInput}
          />
          {searchTerm && (
            <button className={styles.clearSearchButton} onClick={clearSearch}>
              지우기
            </button>
          )}
        </div>
      </div>
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
            <div className={styles.recrtTitle}>
              {job.recrtTitle.length > 30 ? `${job.recrtTitle.slice(0, 29)}...` : job.recrtTitle}
            </div>
            <div className={styles.oranNm}>
              {job.oranNm.length > 20 ? `${job.oranNm.slice(0, 20)}...` : job.oranNm}
            </div>
            <div className={styles.workPlcNm}>{job.workPlcNm}</div>
          </div>
        ))}
      </div>
      <div className={styles.pagination}>
        {currentGroup >1 && (
          <button className={styles.paginationButton} onClick={prevGroup}>
            Prev
          </button>
        )}
        {renderPageNumbers()}
        {currentGroup<Math.ceil(totalPages/groupPerPage) && (
          <button className={styles.paginationButton} onClick={nextGroup}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default List;
