import React from "react";
import InfoMent from "../components/Info/IMent";
import Account from "../components/Info/Account";

const MyInfo1 = () => {
  /* const userEmail = [
    { mail: "daengdaeng@naver.com" },
    { mail: "hyunah@naver.com" },
  ]; */
  const userEmail = "daengdaeng@naver.com";
  return (
    <div>
      <InfoMent />
      <div>
        <Account userEmail={userEmail} />
      </div>
    </div>
  );
};

export default MyInfo1;
