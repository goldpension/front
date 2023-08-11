import React from "react";

const JInput = () => {
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
              width: "100px",
              height: "30px",
              textAlign: "center",
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
          이름 입력
        </h4>
        <div style={{ textAlign: "center" }}>
          <input
            type="text"
            placeholder={"이름을 써주세요"}
            style={{
              border: "none",
              borderBottom: "2px solid #07236B",
              width: "100px",
              height: "30px",
              textAlign: "center",
            }}
          ></input>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          paddingTop: "70px",
        }}
      >
        <input
          type="submit"
          value="확인하기"
          style={{
            textAlign: "center",
            backgroundColor: "#07236B",
            color: "#ffffff",
            width: "100px",
            height: "30px",
            border: "none",
            borderRadius: "10px",
            fontWeight: "bold",
          }}
        ></input>
      </div>
    </div>
  );
};

export default JInput;
