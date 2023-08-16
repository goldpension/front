import axios from "axios";

const SenuriService = axios.create({
  baseURL: "http://apis.data.go.kr/B552474/SenuriService",
  headers: {
    accept: "application/xml",
    Authorization: `Bearer ${localStorage.getItem("token")}`, // XML 데이터를 받아올 것임을 명시합니다.
  },
  params: {
    serviceKey:
      "mRGjg3/2UUHbsxo6/0hRd0yGtU+pjfH9HP/nfwA8nUWyBwbRChPmV85e9wPdnhuChn3lUqWxgE4iYvrHxn4VsA==",
  },
});

const Axios = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

export { SenuriService, Axios };
