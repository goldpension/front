import React, { useState, useEffect } from "react";
import { SenuriService } from "../api/axios";
import Map from "../components/Map";
import AreaCounts from "../components/Main/AreaCounts";
import List from "../components/Main/List";
import Modal from "../components/modal/Modal";
import styles from "../css/Main.module.css";
import Image from "../img/어르신.png";
import Loading from "../img/loading.gif";
import {useQuery} from "@tanstack/react-query";

export const Main = () => {
  const [screen, setScreen] = useState("areaCounts");
  const [listArea, setListArea] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [modalSelectedJob, setModalSelectedJob] = useState({});
  const XML_ELEMENTS_JOB_LIST = ["jobId", "deadline", "jobcls", "oranNm", "workPlcNm", "recrtTitle"];
  const XML_ELEMENTS_JOB_INFO = ["acptMthdCd", "age", "ageLim", "clerk", "clerkContt", "clltPrnnum", "detCnts", "plDetAddr", "plbizNm", "frAcptDd", "toAcptDd", "wantedTitle"];

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        goBackHandler();      
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  const goToScreen = (screenName) => {
    setScreen(screenName);
  };

  const parseXml = (xmlText, elements) => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(xmlText, "application/xml");
    const items = xmlDoc.getElementsByTagName("item");
    const parsedData = [];
    
    for (let i = 0; i < items.length; i++) {
      const item = {};
      for (const element of elements) {
        item[element] = items[i].getElementsByTagName(element)[0]?.textContent;
      }
      parsedData.push(item);
    }
    
    return parsedData;
  }
  const fetchJobList = async () => {
    try {
      const response = await SenuriService.get("/getJobList", {
        params: {
          numOfRows: 1500,
          pageNo: 1,
        },
      });
      const xmlText = response.data;
      const parsedData = parseXml(xmlText, XML_ELEMENTS_JOB_LIST);
      // setJobs(parsedData);
      return parsedData;
    } catch (error) {
      console.error("Error while JobList fetching data:", error);
    }
  }
  const { data:jobs, isLoading } = useQuery({
    queryKey: ['jobs'],
    queryFn: fetchJobList,
    staleTime: 1000 * 60 * 5,
    gcTime: Infinity,
    refetchOnWindowFocus: false,
    refetchOnReconnect: false,
  });

  const fetchJobInfo = async (jobId) => {
    try {
      const response = await SenuriService.get("/getJobInfo", {
        params: {
          id: jobId,
        },
      });
      const xmlText = response.data;
      const parsedData = parseXml(xmlText, XML_ELEMENTS_JOB_INFO);
      setModalSelectedJob(parsedData[0]);
      console.log(parsedData);

    } catch (error) {
      console.error("Error while JobInfo fetching data:", error);
    }
  }

  const onClickCount = (area) => {
    setListArea(area);
    goToScreen("list");
  };

  const openModal = (job) => {
    fetchJobInfo(job.jobId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const goBackHandler = () => {
    setListArea("all");
    goToScreen("areaCounts");
  };

  if (isLoading) return (
    <main className={styles.main}>
      <section className={styles.loadingComponent}>
        <div>
          <img src={Image} alt="황금연금 홍보대사 한사랑 산악회"/>
          <div className={styles.ambassador}>황금연금 홍보대사 - 한사랑 산악회</div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "space-around",
            height: "200px",
          }}
        >
          <div style={{textAlign: 'center'}}>데이터를 불러오고 있습니다.</div>
          <img src={Loading} width={"100px"} alt="로딩 애니메이션"/>
        </div>
      </section>
    </main>
  );

  return (
    <>
      <Modal show={showModal} close={closeModal} job={modalSelectedJob}/>
      {screen === "list" ? (
        <button className={styles.goBack} onClick={goBackHandler} tabIndex={0}>
          전체지역
        </button>
      ) : null}
      <main className={styles.main}>
        <section className={styles.mapContainer}>
          <Map
            jobs={jobs}
            selectedArea={listArea}
            onClickCount={onClickCount}
            openModal={openModal}
          />
        </section>
        <section className={styles.renderScreen}>
          {screen === 'areaCounts' ? <AreaCounts jobs={jobs} onClickCount={onClickCount} /> 
          : screen === 'list' ? <List area={listArea} jobs={jobs} openModal={openModal} />
          : <div>Invalid screen</div>}
        </section>
      </main>
    </>
  );
};

export default Main;
