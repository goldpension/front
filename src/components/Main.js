import React, {useEffect, useState} from 'react'
import {SenuriService} from '../api/axios'
import Map from "../components/Map";

export const Main = () => {
  const [jobs, setJobs] = useState([])
  useEffect(()=>{
    fetchData()
  }, [])
  
  const fetchData = async () => {
    try {
      const response = await SenuriService.get('/getJobList');
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

  return (
    <div>
      <Map jobs={jobs}/>
      {/*jobs.map((job) => (
        <div>
          <span>{job.deadline}</span>
          <span>{job.frDd}</span>
          <span>{job.toDd}</span>
          <span>{job.oranNm}</span>
          <span>{job.recrtTitle}</span>
          <span>{job.workPlcNm}</span>
        </div>
      ))*/}
    </div>
  )
}
