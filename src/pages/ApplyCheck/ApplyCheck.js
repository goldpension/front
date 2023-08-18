import React, { useState } from "react";
import ApplyCheckMent from "../../components/ApplyCheck/ACheckMent";
import AInput from "../../components/ApplyCheck/AInput";
import JobTable from "../../components/ApplyCheck/JobTable";
const ApplyCheck = () => {
  const [applyCompanies, setApplyCompanies] = useState([]);
  const [fetchCompleted, setFetchCompleted] = useState(false);

  const convertScreen = (companies) => {
    setApplyCompanies(companies);
    setFetchCompleted(true);
  };
  return (
    <div>
      <div>
        <ApplyCheckMent />
      </div>
      <p>
        {fetchCompleted ? (
          <JobTable jobDatas={applyCompanies} />
        ) : (
          <AInput convertScreen={convertScreen} />
        )}
      </p>
    </div>
  );
};

export default ApplyCheck;
