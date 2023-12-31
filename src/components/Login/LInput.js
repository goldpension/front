import React from "react";

const LInput = () => {
  return (
    <div>
      <div
        style={{
          textAlign: "center",
          paddingTop: "30px",
        }}
      >
        <h4 style={{ textAlign: "center", paddingBottom: "10px" }}>
          전화번호 입력
        </h4>
        <div style={{ textAlign: "center" }}>
          <input
            type="tel"
            placeholder={"010-1234-1234"}
            pattern="[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}"
            style={{
              border: "none",
              borderBottom: "2px solid #07236B",
              width: "210px",
              height: "30px",
              textAlign: "center",
              fontSize: "large",
            }}
          ></input>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          paddingTop: "30px",
        }}
      >
        <h4 style={{ textAlign: "center", paddingBottom: "10px" }}>
          비밀번호 입력
        </h4>
        <div style={{ textAlign: "center" }}>
          <input
            type="password"
            placeholder={"8자리 이상 입력하세요"}
            style={{
              border: "none",
              borderBottom: "2px solid #07236B",
              width: "210px",
              height: "30px",
              textAlign: "center",
              fontSize: "large",
            }}
          ></input>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          paddingTop: "35px",
        }}
      >
        <input
          type="submit"
          value="로그인 하기"
          style={{
            textAlign: "center",
            backgroundColor: "#07236B",
            color: "#ffffff",
            width: "125px",
            height: "40px",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
            fontSize: "medium",
          }}
        ></input>
      </div>
    </div>
  );
};

export default LInput;
