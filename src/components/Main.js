import React, {useEffect, useState} from 'react'
import {SenuriService,jobBsnInfoService} from '../api/axios'

export const Main = () => {
  const [jobs, setJobs] = useState([])
  useEffect(()=>{
    fetchData()
  }, [])
  
  const fetchData = async () => {
    const request = await SenuriService.get()
    const request2 = await jobBsnInfoService.get()
    console.log(request2)
    console.log(request.data.response.body.items.item)
    let jobLists = request.data.response.body.items.item
    //const request = await axios.get('/15050148/v1/uddi:abd1cfb1-5ba2-491f-9729-84bba214f87d')
    setJobs(jobLists)
    //console.log(request.data.data)

    return request
  }

  return (
    <div>
      {jobs.map((job) => (
        <div>
          <span>{job.deadline}</span>
          <span>{job.frDd}</span>~
          <span>{job.toDd}</span>
          <span>{job.oranNm}</span>
          <span>{job.recrtTitle}</span>
          <span>{job.workPlcNm}</span>
        </div>
      ))}
    </div>
  )
}
