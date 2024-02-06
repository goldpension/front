import React, { useState, useEffect } from "react";
import InfoMent from "../components/Info/IMent";
import { useRecoilState } from "recoil";
import seniorState from "../recoil/seniorState";
import styles from "../css/Account.module.css";
import { Axios } from "../api/axios";

const MyInfo = () => {
  const [loggedInUser, setLoggedInUser] = useRecoilState(seniorState);
  const [editing, setEditing] = useState(false); // 글 작성 모드 여부
  const [introText, setIntroText] = useState(loggedInUser.intro || ""); // 소개글을 저장할 상태
  const [uploadedAds, setUploadedAds] = useState([{title: '기획 모집'}, {title: '백엔드 모집'}, {title: 'dddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddd'}]); // 공고 목록을 저장할 상태

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await Axios.get("/company/read");
      // 서버 응답이 공고 목록을 포함하고 있다고 가정합니다.
      setUploadedAds(response.data.uploadedAds);
    } catch (error) {
      console.error("데이터를 불러오는 중 오류 발생:", error);
    }
  };

  const handleEdit = () => {
    setEditing(true);
  };

  const handleIntroChange = (event) => {
    setIntroText(event.target.value);
  };

  const handleSaveIntro = () => {
    setEditing(false);
    setLoggedInUser((prevUser) => ({ ...prevUser, intro: introText }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleSaveIntro();
  };

  return (
    <main>
      <InfoMent />
      {editing ? (
        <form className={styles.accountComponent} onSubmit={handleSubmit}>
          <label className={styles.text1} htmlFor="intro">
            소개글 <br></br>작성:
          </label>
          <textarea
            id="intro"
            value={introText}
            onChange={handleIntroChange}
            rows={4}
            cols={50}
          />
          <button className={styles.b} type="submit">
            확인
          </button>
        </form>
      ) : (
        <div className={styles.accountComponent}>
          <table
            style={{
              textAlign: "center",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <tr>
              <td className={styles.text1}>계정</td>
              <td className={styles.text2} colSpan={2}>
                {loggedInUser.email}
              </td>
            </tr>
            <tr>
              <td className={styles.text1}>작성글</td>
              <td className={styles.text2}>{introText}</td>
              <td>
                <button className={styles.b} onClick={handleEdit}>
                  글 작성
                </button>
              </td>
            </tr>
            <tr>
              <td className={styles.text1}>올린 공고</td>
              <td className={styles.text2} colSpan={2}>
                {/* 공고를 테이블에 표시합니다. */}
                <table className={styles.text2}>
                  <tbody>
                    {uploadedAds.map((ad, index) => (
                      <tr key={index} style={{width: '100%', overflow: "hidden"}}>
                        <td>{index}</td>
                        <td colSpan={3}>{ad.title.length > 10 ? ad.title.slice(0,10) + '...' : ad.title}</td>
                        {/* 다른 공고 세부 정보에 대한 추가 열을 만들 수 있습니다. */}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </td>
            </tr>
          </table>
        </div>
      )}
    </main>
  );
};

export default MyInfo;

//파트너사 지원 연동 성공하면 이 컴포넌트로 사용하기
