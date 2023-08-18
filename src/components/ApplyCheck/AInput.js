import React, { useState } from "react";
import styles from "../../css/Apply.module.css";
import { Link } from "react-router-dom";
import { Axios } from "../../api/axios";

const AInput = ({ convertScreen }) => {
  const [name, setName] = useState("");
  const [phone_number, setPhoneNumber] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      phone_number: phone_number,
    };
    try {
      const request = await Axios.get("/guarantee/company/", formData);
      convertScreen(request);
    } catch (error) {
      console.error(error);
      alert("전송 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
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
            className={styles.box}
            value={phone_number}
            onChange={(e) => setPhoneNumber(e.target.value)}
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
            className={styles.box}
            value={name}
            onChange={(e) => setName(e.target.value)}
          ></input>
        </div>
      </div>
      <div
        style={{
          textAlign: "center",
          paddingTop: "70px",
        }}
      >
        <Link to="/apply/lists">
          <button type="submit" className={styles.hoverButton}>
            확인하기
          </button>
        </Link>
      </div>
      {/* 필요한 Route 설정 및 Link 코드를 이 곳에 추가하세요. */}
    </form>
  );
};

export default AInput;
