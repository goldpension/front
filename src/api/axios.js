import axios from "axios";

/*const instance = axios.create({
  baseURL: "https://api.odcloud.kr/api",
  params: {
    serviceKey: "mRGjg3/2UUHbsxo6/0hRd0yGtU+pjfH9HP/nfwA8nUWyBwbRChPmV85e9wPdnhuChn3lUqWxgE4iYvrHxn4VsA==",
    
  }
})
*/
const SenuriService = axios.create({
  baseURL: "http://apis.data.go.kr/B552474/SenuriService",
  headers: {
    accept: "application/xml", // XML 데이터를 받아올 것임을 명시합니다.
  },
  params: {
    serviceKey:
      "mRGjg3/2UUHbsxo6/0hRd0yGtU+pjfH9HP/nfwA8nUWyBwbRChPmV85e9wPdnhuChn3lUqWxgE4iYvrHxn4VsA==",
  },
});

//현아 추가 부분
axios({
  method: "get",
  url: "url",
  responseType: "type",
}).then(function (response) {
  // response Action
});

export default SenuriService;
