import React, {useEffect, useState} from 'react'
import axios from '../api/axios'
import Map from "../components/Map";

export const Main = () => {
  const [jobs, setJobs] = useState([])
  const [counts, setCounts] = useState({})
  useEffect(()=>{
    fetchData()
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
    let areaCounts = {};
    jobs.forEach((job) => {
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
    })
    setCounts(areaCounts);
  }
  
  return (
    <div>
      <Map jobs={jobs}/>
      <div>
        <p>지금 등록된 일자리수 {jobs.length}개</p>
        <div>
          <span>서울시 {counts['서울']}</span>
          <span>경기도 {counts['경기']}</span>
          <span>충청북도 {counts['충북']}</span>
          <span>충청남도 {counts['충남']}</span>
          <span>경상북도 {counts['경북']}</span>
          <span>경상남도 {counts['경남']}</span>
          <span>강원도 {counts['강원']}</span>
          <span>제주도 {counts['제주']}</span>
          <span>부산 {counts['부산']}</span>
          <span>인천 {counts['인천']}</span>
          <span>대구 {counts['대구']}</span>
          <span>대전 {counts['대전']}</span>
          <span>광주 {counts['광주']}</span>
          <span>울산 {counts['울산']}</span>
          <span>세종 {counts['세종']}</span>
        </div>
      </div>
    </div>
  )
}
