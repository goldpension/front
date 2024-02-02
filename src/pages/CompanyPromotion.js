import React, { useState, useEffect } from "react";
import styles from "../css/CompanyPromotion.module.css";
import { Link } from "react-router-dom";
import JobBox from "../components/JobBox";
import Modal from "../components/modal/Modal";
import { Axios } from "../api/axios";
import Image from "../img/보증공고이미지.png"

const CompanyPromotion = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [expandedJobbox, setExpandedJobbox] = useState(false);
  const [modalSelectedJob, setModalSelectedJob] = useState({});
  const [companies, setCompanies] = useState([
    {
      apply_work: '경비',
      company_name: '혁수그룹',
      work_place: '서울 강남구',
      work_day: '월~금',
      work_hour: '09~15',
      apply_detail: '혁수그룹에서 미래를 함께할 시니어 인재를 구합니다.',
      work_term: '최소 6개월',
      work_pay: '협의',
      apply_deadline: '20231120',
      
    },
    {
      apply_work: '경비',
      company_name: '혁수그룹',
      work_place: '서울 강남구',
      work_day: '월~금',
      work_hour: '09~15'
    },
    {
      apply_work: '경비',
      company_name: '혁수그룹',
      work_place: '서울 강남구',
      work_day: '월~금',
      work_hour: '09~15'
    },
    {
      apply_work: '경비',
      company_name: '혁수그룹',
      work_place: '서울 강남구',
      work_day: '월~금',
      work_hour: '09~15'
    },
    {
      apply_work: '경비',
      company_name: '혁수그룹',
      work_place: '서울 강남구',
      work_day: '월~금',
      work_hour: '09~15'
    },
    {
      apply_work: '경비',
      company_name: '혁수그룹',
      work_place: '서울 강남구',
      work_day: '월~금',
      work_hour: '09~15'
    },
    
]);

  useEffect(() => {
    document.title = '검증된 일자리 찾기 - 황금연금';
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
                <p>혹시 이상한 일자리가 올라오지 않을까 걱정되시나요?</p>
                <p>황금연금에서 제공되는 모든 일자리는 철저하게 검토했습니다.</p>
                <p>그 중에서도 특별히 추천드리는 좋은 일자리는
                <span style={{color: 'red', fontSize: '30px'}}>별표</span>
                가 붙어있습니다!</p>
                <p>빛나는 노후를 위한 필수 도구! 황금연금과 함께하세요!</p>
              </div>
              <div className={styles.cp_card}>
                <img src={Image} alt="보증공고예시이미지"/>
                {/* <JobBox companies={companies} openModal={openModal} /> */}
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
