import React from "react";
import SpinnerLogo from "../../img/SpinnerLogo.gif";

const Spinner = () => {
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "100px",
        paddingBottom: "20px",
      }}
    >
      <h3>잠시만 기다려주세요.</h3>
      <img src={SpinnerLogo} alt="로딩중" width="10%" />
    </div>
  );
};

export default Spinner;
