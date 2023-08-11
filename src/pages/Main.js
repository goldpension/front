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
  const [modalSelectedJob, setModalSelectedJob] = useState({})
  useEffect(()=>{
    fetchData('getJobList')
  }, [])
  
  useEffect(() => {
    getCounts(jobs);
  }, [jobs]);

  useEffect(() => {
    if(Object.keys(counts).length > 0) {
      setScreen('areaCounts');
    }
  }, [counts]);

  const fetchData = async (type, jobId) => {
    try {
      if (type === 'getJobList') {
        const response = await axios.get('/getJobList', {
          params: {
            numOfRows: 100,
            pageNo: 1,
          }
        });
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
            const recrtTitle = items[i].getElementsByTagName("recrtTitle")[0]?.textContent;
            parsedJobs.push({
              jobId,
              deadline,
              jobcls,
              oranNm,
              workPlcNm,
              recrtTitle,
            });
          }
          setJobs(parsedJobs);
        } else {
          console.error("Data is missing or has incorrect structure");
        }
      } else {
        const response = await axios.get('/getJobInfo', {
          params: {
            id: jobId,
          }
        });
        const xmlText = response.data;
        console.log(xmlText)
        
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlText, 'application/xml');
        const items = xmlDoc.getElementsByTagName('item');  //job item 
        if (items) {
          for (const item of items) {
            const acptMthdCd = item.getElementsByTagName("acptMthdCd")[0]?.textContent;
            const age = item.getElementsByTagName("age")[0]?.textContent;
            const ageLim = item.getElementsByTagName("ageLim")[0]?.textContent;
            const clerk = item.getElementsByTagName("clerk")[0]?.textContent;
            const clerkContt = item.getElementsByTagName("clerkContt")[0]?.textContent;            
            const clltPrnnum = item.getElementsByTagName("clltPrnnum")[0]?.textContent;            
            const detCnts = item.getElementsByTagName("detCnts")[0]?.textContent;            
            const plDetAddr = item.getElementsByTagName("plDetAddr")[0]?.textContent;            
            const plbizNm = item.getElementsByTagName("plbizNm")[0]?.textContent;            
            const ftAcptDd = item.getElementsByTagName("ftAcptDd")[0]?.textContent;            
            const toAcptDd = item.getElementsByTagName("toAcptDd")[0]?.textContent;            
            const wantedTitle = item.getElementsByTagName("wantedTitle")[0]?.textContent;            
            setModalSelectedJob({
              acptMthdCd, //접수방법
              age,  //연령
              ageLim, //연령제한
              clerk,  //담당자
              clerkContt, //담당자연락처
              clltPrnnum, //모집인원
              detCnts,  //상세내용
              plDetAddr,  //주소
              plbizNm,  //사업장명
              ftAcptDd, //시작접수일
              toAcptDd, //종료접수일
              wantedTitle,  //채용제목
            });
          }

        } else {
          console.error("Data is missing or has incorrect structure");
        }
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
    fetchData('modalData', job.jobId)
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
      <Modal show={showModal} close={closeModal} job={modalSelectedJob} fetchData={fetchData}/>
      <div className={styles.main}>
        {/* <Map jobs={jobs}/> */}
        <div className={styles.mapContainer}>
          <div style={{width: '400px', height: '550px', border: '1px solid black'}}>지도</div>
        </div>
        <div className={styles.renderScreen}>
        {renderScreen(screen)}
        </div>
      </div>
    </>
  )
}
