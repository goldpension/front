import axios from "axios"

/*const instance = axios.create({
  baseURL: "https://api.odcloud.kr/api",
  params: {
    serviceKey: "mRGjg3/2UUHbsxo6/0hRd0yGtU+pjfH9HP/nfwA8nUWyBwbRChPmV85e9wPdnhuChn3lUqWxgE4iYvrHxn4VsA==",
    
  }
})
*/
const SenuriService = axios.create({
  baseURL: "http://apis.data.go.kr/B552474/SenuriService/getJobList",
  params: {
    serviceKey: "mRGjg3%2F2UUHbsxo6%2F0hRd0yGtU%2BpjfH9HP%2FnfwA8nUWyBwbRChPmV85e9wPdnhuChn3lUqWxgE4iYvrHxn4VsA%3D%3D",
    numOfRows: 10000,
    pageNo: 1,
  }
})
const jobBsnInfoService = axios.create({
  baseURL: "http://apis.data.go.kr/B552474/JobBsnInfoService",
  params: {
    serviceKey: "mRGjg3%2F2UUHbsxo6%2F0hRd0yGtU%2BpjfH9HP%2FnfwA8nUWyBwbRChPmV85e9wPdnhuChn3lUqWxgE4iYvrHxn4VsA%3D%3D",
    numOfRows: 10000,
    pageNo: 1
  }
})

export {SenuriService, jobBsnInfoService}