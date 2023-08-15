import React, { useState } from "react";
import styles from "../../css/Account.module.css";
import { Link } from "react-router-dom";

const Account = ({ userEmail }) => {
  const [editing, setEditing] = useState(false); // 글 작성 모드 여부
  const [introText, setIntroText] = useState(""); // 소개글을 저장할 상태

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
    <div>
      <div>
        <div className={styles.container}>
          <div className={styles.text1}>계정</div>
          <div className={styles.text2}> {userEmail}</div>
          <div className={styles.text3}>
            {/* Link 컴포넌트를 사용하여 ApplyCheckMem 페이지로 이동 */}
            {/* 보여질 곳에 추가하기
        <Route path="/ApplyCheckMem" element={<ApplyCheckMem />} /> */}
            <Link to="/join/join_tel">
              <input
                type="button"
                value="변경하기"
                className={styles.nbutton}
              />
            </Link>
          </div>
        </div>
        <div class={styles.h_line}></div>
      </div>

      <div>
        <div>
          {editing ? (
            <div className={styles.container}>
              <label htmlFor="intro" className={styles.a}>
                소개글 작성:
              </label>
              <textarea
                id="intro"
                value={introText}
                onChange={handleIntroChange}
                rows={4}
                cols={50}
              />
              <button onClick={handleSaveIntro} className={styles.b}>
                확인
              </button>
            </div>
          ) : (
            <div className={styles.text4}>
              <div className={styles.text5}>작성글</div>
              <p className={styles.text6}>{introText}</p>
              <div>
                <button onClick={handleEdit} className={styles.wbutton}>
                  작성하기
                </button>
              </div>
            </div>
          )}
        </div>
        <div class={styles.h_line}></div>
      </div>
    </div>
  );
};

export default Account;
