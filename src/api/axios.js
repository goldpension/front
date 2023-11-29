import axios from "axios";

const SenuriService = axios.create({
  baseURL: "http://apis.data.go.kr/B552474/SenuriService",
  headers: {
    accept: "application/xml", // XML 데이터를 받아올 것임을 명시합니다.
  },
  params: {
    serviceKey: process.env.REACT_APP_SENURI_API_KEY,
  },
});

const Axios = axios.create({
  // baseURL: "http://123.212.65.172:8000",
  baseURL: "http://220.67.126.26:80",
  headers: {
    "Content-Type": "application/json",
  },
});

export { SenuriService, Axios };
