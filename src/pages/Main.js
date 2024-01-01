import React, { useEffect, useState } from "react";
import { SenuriService } from "../api/axios";
import Map from "../components/Map";
import AreaCounts from "../components/Main/AreaCounts";
import First from "./First";
import List from "../components/Main/List";
import Modal from "../components/modal/Modal";
import styles from "../css/Main.module.css";
import Image from "../img/어르신.png";
import Loading from "../img/loading.gif";

export const Main = () => {
  const [jobs, setJobs] = useState([]);
  const [counts, setCounts] = useState({});
  const [screen, setScreen] = useState("areaCounts");
  const [listArea, setListArea] = useState("all");
  const [showModal, setShowModal] = useState(false);
  const [modalSelectedJob, setModalSelectedJob] = useState({});
  const XML_ELEMENTS_JOB_LIST = ["jobId", "deadline", "jobcls", "oranNm", "workPlcNm", "recrtTitle"];
  const XML_ELEMENTS_JOB_INFO = ["acptMthdCd", "age", "ageLim", "clerk", "clerkContt", "clltPrnnum", "detCnts", "plDetAddr", "plbizNm", "frAcptDd", "toAcptDd", "wantedTitle"];

  const goToScreen = (screenName) => {
    setScreen(screenName);
  };

  useEffect(() => {
    fetchJobList();
  }, []);

  useEffect(() => {
    getCounts(jobs);
    goToScreen("areaCounts");
  }, [jobs]);

  /*
  useEffect(() => {
    if (Object.keys(counts).length > 0) {
      setScreen("areaCounts");
    }
  }, [counts]);
  */

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
      setJobs(parsedData);
      console.log(parsedData);
    } catch (error) {
      console.error("Error while JobList fetching data:", error);
    }
  }

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

  const getCounts = (jobs) => {
    let areaCounts = { 전체: 0 };
    jobs.forEach((job) => {
      if (job.deadline === "접수중") {
        areaCounts["전체"] += 1;
        if (job.workPlcNm) {
          const area = job.workPlcNm.slice(0, 2);
          if (!areaCounts[area]) {
            areaCounts[area] = 1;
          } else {
            areaCounts[area] += 1;
          }
        } else {
          if (!areaCounts["기타"]) {
            areaCounts["기타"] = 1;
          } else {
            areaCounts["기타"] += 1;
          }
        }
      }
    });
    setCounts(areaCounts);
  };

  const onClickCount = (area) => {
    setListArea(area);
    goToScreen("list");
  };

  const onClickGoCounts = () => {
    goToScreen("areaCounts");
  };
  const openModal = (job) => {
    fetchJobInfo(job.jobId);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderScreen = (screen) => {
    switch (screen) {
      case "areaCounts":
        return <AreaCounts counts={counts} onClickCount={onClickCount} />;
      case "first":
        return <First onClickGoCounts={onClickGoCounts} />;
      case "list":
        return <List area={listArea} jobs={jobs} openModal={openModal} />;
      default:
        return null;
    }
  };

  const goBackHandler = () => {
    setListArea("all");
    goToScreen("areaCounts");
  };
  return (
    <>
      <Modal show={showModal} close={closeModal} job={modalSelectedJob} />
      {screen === "list" ? (
        <div className={styles.goBack} onClick={goBackHandler}>
          전체지역
        </div>
      ) : null}
      {Object.keys(jobs).length > 0 ? (
        <div>
          <div className={styles.main}>
            <div className={styles.mapContainer}>
              <Map
                jobs={jobs}
                selectedArea={listArea}
                onClickCount={onClickCount}
                openModal={openModal}
              />
            </div>
            <div className={styles.renderScreen}>{renderScreen(screen)}</div>
          </div>
        </div>
      ) : (
        <div className={styles.main}>
          <div className={styles.loadingComponent}>
            <div>
              <img src={Image}/>
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
              <img src={Loading} width={"100px"} />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Main;
