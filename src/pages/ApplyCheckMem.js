import React from "react";
import ApplyCheckMent from "../components/ApplyCheck/ACheckMent";
import JobTable from "../components/ApplyCheck/JobTable";

const ApplyCheckMem = () => {
  const jobData = [
    {
      status: "구인 중",
      jobType: "건물경비원",
      company: "잠실 한양 3차아파트 회의",
      location: "서울시 송파구 방이동",
    },
    {
      status: "구인 완료",
      jobType: "아파트경비원",
      company: "모현 아파트 대표회의",
      location: "용인시 처인구 모현읍",
    },
    {
      status: "구인 완료",
      jobType: "아파트경비원",
      company: "모현 아파트 대표회의",
      location: "용인시 처인구 모현읍",
    },
    {
      status: "구인 완료",
      jobType: "아파트경비원",
      company: "모현 아파트 대표회의",
      location: "용인시 처인구 모현읍",
    },
    // 추가적인 데이터 항목들...
  ];

  return (
    <div>
      <ApplyCheckMent />
      <JobTable jobData={jobData} />
    </div>
  );
};

export default ApplyCheckMem;
