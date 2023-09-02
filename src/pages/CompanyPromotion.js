import React, { useState, useEffect } from "react";
import styles from "../css/CompanyPromotion.module.css";
import { Link } from "react-router-dom";
import JobBox from "../components/JobBox";
import Modal from "../components/modal/Modal";
import { Axios } from "../api/axios";

const CompanyPromotion = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [expandedJobbox, setExpandedJobbox] = useState(false);
  const [modalSelectedJob, setModalSelectedJob] = useState({});
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const companies = await Axios.get("/company/register/");
    console.log("회사들", companies.data);
    setCompanies(companies.data);
  };

  const openModal = (company) => {
    setModalSelectedJob(company);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  const onClickNextButton = () => {
    setExpandedJobbox(true);
  };
  const onClickBackButton = () => {
    setExpandedJobbox(false);
  };
  const card = [
    {
      cardJstatus: "구인상태",
      cardJname: "건물경비원",
      cardCname: "잠실한양3차아파트대표회의",
      cardJplace: "서울시 송파구 방이동",
      cardDay: "월~금",
      cardTime: "오전 9시~ 오후 6시",
    },
  ];
  return (
    <>
      <Modal
        show={showModal}
        close={closeModal}
        job={modalSelectedJob}
        type={"guarantee"}
      />
      <div className={styles.cp_container}>
        <div className={styles.cp_title}>
          <h1>
            <b>황금연금이 보증하는 일자리를 만나보세요!</b>
          </h1>
        </div>
        {expandedJobbox ? (
          <>
            <div className={styles.cp_content}>
              <JobBox companies={companies} openModal={openModal} />
            </div>
            <div className={styles.cp_btn} onClick={onClickBackButton}>
              <p>뒤로가기</p>
            </div>
          </>
        ) : (
          <>
            <div className={styles.cp_content}>
              <div className={styles.cp_contentText}>
                나를 써주는 곳이 있을지 걱정이세요?
                <br />
                새로운 일자리에 대해서 두려움을 느끼신다고요?
                <br />
                내가 잘할 수 있을지 걱정이세요?
                <br />
                걱정마세요. 이 기업들은 어르신을 꼭 필요로 하고 있습니다.
              </div>
              <div className={styles.cp_card}>
                <JobBox companies={companies} openModal={openModal} />
              </div>
            </div>
            <div className={styles.cp_btn} onClick={onClickNextButton}>
              <p>더보러가기</p>
            </div>
          </>
        )}
      </div>
    </>
  );
};

export default CompanyPromotion;
