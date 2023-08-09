import React, {useEffect, useState} from 'react'
import axios from '../api/axios'
import Map from "../components/Map";
import AreaCounts from '../components/Main/AreaCounts';
import First from '../components/Main/First';
import List from '../components/Main/List';
import Modal from '../components/Main/Modal';
import styles from "../css/Main.module.css";
export const Main = () => {
  const [jobs, setJobs] = useState([])
  const [counts, setCounts] = useState({})
  const [screen, setScreen] = useState('loading');
  const [listArea, setListArea] = useState();
  const [showModal, setShowModal] = useState(false);
  const [modalSelectedJob, setModalSelectedJob] = useState()
  useEffect(()=>{
    fetchData()
    setScreen('areaCounts')
  }, [])
  
  useEffect(() => {
    getCounts(jobs);
  }, [jobs]);

  const fetchData = async () => {
    try {
      const response = await axios.get('/getJobList');
      const xmlText = response.data;
      
      const parser = new DOMParser();
      const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
      const items = xmlDoc.getElementsByTagName('item');  //job item 
      const parsedJobs = [];
      if (items) {
        for (let i = 0; i < items.length; i++) {
          const jobId = items[i].getElementsByTagName("jobId")[0]?.textContent;
          const deadline = items[i].getElementsByTagName("deadline")[0]?.textContent;
          const jobcls = items[i].getElementsByTagName("jobcls")[0]?.textContent;
          const oranNm = items[i].getElementsByTagName("oranNm")[0]?.textContent;
          const workPlcNm = items[i].getElementsByTagName("workPlcNm")[0]?.textContent;
          parsedJobs.push({
            jobId,
            deadline,
            jobcls,
            oranNm,
            workPlcNm,
          });
        }
        setJobs(parsedJobs);
      } else {
        console.error("Data is missing or has incorrect structure");
      }
    } catch (error) {
      console.error("Error while fetching data:", error);
    }
  }

  const getCounts = (jobs) => {
    let areaCounts = {'전체': 0};
    jobs.forEach((job) => {
      if (job.deadline === '접수중') {
        areaCounts['전체'] += 1;
        if (job.workPlcNm) {
          const area = job.workPlcNm.slice(0, 2);
          if (!(areaCounts[area])) {
            areaCounts[area] = 1
          } else {
            areaCounts[area] += 1
          }
        } else {
          if (!(areaCounts['기타'])) {
            areaCounts['기타'] = 1
          } else {
            areaCounts['기타'] += 1
          }
        }
      }
    })
    setCounts(areaCounts);
  }

  const onClickCount = (area) => {
    setListArea(area);
    setScreen('list');
  }

  const onClickGoCounts = () => {
    setScreen('areaCounts')
  }
  const openModal = (job) => {
    setModalSelectedJob(job);
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const renderScreen = (screen) => {
    switch (screen) {
      case 'loading':
        return <div>일자리를 불러오고 있습니다. 어르신들 조금만 기다리셔요~~~</div>;
      case 'areaCounts':
        return <AreaCounts counts={counts} onClickCount={onClickCount}/>;
      case 'first':
        return <First onClickGoCounts={onClickGoCounts}/>;
      case 'list':
        return <List area={listArea} jobs={jobs} openModal={openModal}/>;
      default:
        return null;
    }
  };
  
  return (
    <>
      <Modal show={showModal} close={closeModal} job={modalSelectedJob}/>
      <div className={styles.main}>
        {/* <Map jobs={jobs}/> */}
        <div style={{width: '405px', height: '500px', border: '1px solid black'}}>지도</div>
        {renderScreen(screen)}
      </div>
    </>
  )
}
