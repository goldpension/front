import React, { useState, useEffect } from "react";
import styles from "../../css/Account.module.css";
import { Link } from "react-router-dom";
import { Axios } from "../../api/axios";

const Account = ({ userEmail }) => {
  const [editing, setEditing] = useState(false); // 글 작성 모드 여부
  const [introText, setIntroText] = useState(""); // 소개글을 저장할 상태
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const response = await Axios.get("/company/read");
  };
  const handleEdit = () => {
    setEditing(true);
  };

  const handleIntroChange = (event) => {
    setIntroText(event.target.value);
  };

  const handleSaveIntro = () => {
    setEditing(false);
  };

  return (
    <div className={styles.accountComponent}>
      <div className={styles.container}>
        <div className={styles.text1}>계정</div>
        <div className={styles.text2}> {userEmail}</div>
        <div className={styles.text3}>
          {/* Link 컴포넌트를 사용하여 ApplyCheckMem 페이지로 이동 */}
          {/* 보여질 곳에 추가하기
        <Route path="/ApplyCheckMem" element={<ApplyCheckMem />} /> */}
        </div>
      </div>
    </div>
  );
};

export default Account;

//사용x
