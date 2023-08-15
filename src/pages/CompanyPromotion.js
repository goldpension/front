import React, { useState, useEffect } from "react";
import styles from "../css/CompanyPromotion.module.css";
import { Link } from "react-router-dom";
import JobBox from "../components/JobBox";
import Modal from "../components/modal/Modal";
import { Axios } from "../api/axios";

const CompanyPromotion = (props) => {
  const [showModal, setShowModal] = useState(false);
  const [modalSelectedJob, setModalSelectedJob] = useState({})

  useEffect(()=> {
    fetchData();
  }, [])

  const fetchData = async () => {
    const response = await Axios.get('/company/read');
  }

  const openModal = (job) => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
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
      <Modal show={showModal} close={closeModal} job={modalSelectedJob}/>
      <div className={styles.cp_container}>
        <div className={styles.cp_title}>
          <h1>
            <b>황금연금이 보증하는 일자리를 만나보세요!</b>
          </h1>
        </div>
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
          <div>
            <JobBox />
          </div>
        </div>
        <div className={styles.cp_btn}>
          <Link to="/companyPromotion/add">
            <p>더보러가기</p>
          </Link>
        </div>
      </div>
    </>
  );
};

export default CompanyPromotion;
