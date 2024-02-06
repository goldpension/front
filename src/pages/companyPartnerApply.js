import React, { useState } from "react";
import styles from "../css/companyPartnerApply.module.css";
import { useNavigate } from "react-router-dom";
import { Axios } from "../api/axios";
import { useRecoilState } from "recoil";
import seniorState from "../recoil/seniorState";

const CompanyPartnerApply = (props) => {
  const [loggedInUser, setLoggedInUser] = useRecoilState(seniorState);
  const [formData, setFormData] = useState({
    company_name: "",
    company_address: "",
    company_number: "",
    company_call: "",
    company_boss: "",
    company_size: "",
    company_homepage: "",
    company_logo: null,
    work_place: "",
    work_day: "",
    work_hour: "",
    work_pay: "",
    work_term: "",
    work_experience: "",
    apply_num: "",
    apply_deadline: "",
    apply_sex: "",
    apply_age: "",
    apply_work: "",
    apply_detail: "",
  });
  const navigate = useNavigate();
  const handleFormSubmit = async (e) => {
    e.preventDefault();

    const url = "/company/register/"; // API endpoint URL
    try {
      const response = await Axios.post(url, formData, {
        headers: {
          "Content-Type": "application/json",
        },
        timeout :30000000
      });
      console.log('성공!', formData);

      // Successfully submitted data to the server
      alert("공고가 성공적으로 등록되었습니다.");
      // Additional handling or redirection if needed
      navigate("/companyPartner/apply/done");
    } catch (error) {
      console.error("데이터 전송 오류:", error);
      // Data submission error handling
      alert("공고 등록에 실패하였습니다. 다시 시도해주세요.");
    }
  };

  const handleValueChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleFileChange = (e) => {
    const { name, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: files[0],
    }));
  };

  return (
    <main>
      <form onSubmit={handleFormSubmit}>
        <div className={styles.cp_container}>
          <div className={styles.cp_title}>
            <h1>
              <b>황금연금 파트너사 지원하기</b>
            </h1>
          </div>
          {/* 회사정보 */}
          <div className={styles.cp_inforContainer}>
            <div className={styles.cp_infortitle}>
              <p>회사 정보</p>
            </div>
            <div className={styles.cp_inforWarning}>
              <p>*표시는 필수 사항입니다</p>
            </div>
            <div className={styles.cp_inforcontentBox}>
              <div className={styles.cp_inforcontents}>
                <div className={styles.cp_inforcontentName}>
                  <div className={styles.cp_infoContentText}>
                    <label htmlFor="company_name">
                      <span>*</span>
                      <p>회사/점포명</p>
                    </label>
                    <input
                      type="text"
                      id="company_name"
                      name="company_name"
                      value={formData.company_name}
                      onChange={handleValueChange}
                      placeholder="한국외국어대학교"
                      className={styles.cp_infoContentInput}
                    />
                  </div>
                  <div className={styles.cp_infoContentText}>
                    <label htmlFor="company_number">
                      <span>*</span>
                      <p>사업자등록번호</p>
                    </label>
                    <input
                      type="number"
                      id="company_number"
                      name="company_number"
                      value={formData.company_number}
                      onChange={handleValueChange}
                      placeholder="135-82-11191"
                      className={styles.cp_infoContentInput}
                    />
                  </div>
                  <div className={styles.cp_infoContentText}>
                    <label htmlFor="company_address">
                      <span>*</span>
                      <p>회사/점포 주소</p>
                    </label>
                    <input
                      type="text"
                      id="company_address"
                      name="company_address"
                      value={formData.company_address}
                      onChange={handleValueChange}
                      placeholder="경기도 용인시 처인구 모현읍 외대로 81"
                      className={styles.cp_infoContentInput}
                    />
                  </div>
                  <div className={styles.cp_infoContentText}>
                    <label htmlFor="company_call">
                      <span>*</span>
                      <p>회사/점포 연락처</p>
                    </label>
                    <input
                      type="text"
                      id="company_call"
                      name="company_call"
                      value={formData.company_call}
                      onChange={handleValueChange}
                      placeholder="031-330-4114"
                      className={styles.cp_infoContentInput}
                    />
                  </div>
                </div>
              </div>

              <div className={styles.cp_inforcontents}>
              <div className={styles.cp_inforcontentName}>
  <div className={styles.cp_infoContentText}>
    <label htmlFor="company_boss">
      <span>*</span>
      대표자명
    </label>
    <input
      type="text"
      id="company_boss"
      name="company_boss"
      value={formData.company_boss}
      onChange={handleValueChange}
      placeholder="조성민"
      className={styles.cp_infoContentInput}
    />
  </div>
  <div className={styles.cp_infoContentText}>
    <label htmlFor="company_size">
      직원수
    </label>
    <input
      type="number"
      id="company_size"
      name="company_size"
      value={formData.company_size}
      onChange={handleValueChange}
      placeholder="6(명)"
      className={styles.cp_infoContentInput}
    />
  </div>
  <div className={styles.cp_infoContentText}>
    <label htmlFor="company_homepage">
      홈페이지
    </label>
    <input
      type="text"
      id="company_homepage"
      name="company_homepage"
      value={formData.company_homepage}
      onChange={handleValueChange}
      placeholder="https://www.hufs.ac.kr"
      className={styles.cp_infoContentInput}
    />
  </div>
  <div className={styles.cp_infoContentText}>
    <label htmlFor="company_logo">
      회사로고
    </label>
    <input
      type="file"
      id="company_logo"
      name="company_logo"
      onChange={handleFileChange}
      placeholder=""
      className={styles.cp_infoContentInput}
    />
  </div>
</div>

              </div>
            </div>
          </div>

          {/* 근무 조건 */}
          <div className={styles.cp_inforContainer}>
            <div className={styles.cp_infortitle}>
              <p>근무 조건</p>
            </div>
            <div className={styles.cp_inforWarning}>
              <p>*표시는 필수 사항입니다</p>
            </div>
            <div className={styles.cp_inforcontentBox}>
              <div className={styles.cp_inforcontents}>
                <div className={styles.cp_inforcontentName}>
                  <div className={styles.cp_infoContentText}>
                    <span>*</span>
                    <p>근무지</p>
                  </div>
                  <div className={styles.cp_infoContentText}>
                    <span>*</span>
                    <p>근무요일</p>
                  </div>
                  <div className={styles.cp_infoContentText}>
                    <span>*</span>
                    <p>근무시간</p>
                  </div>
                  <div className={styles.cp_infoContentText}>
                    <span>*</span>
                    <p>급여</p>
                  </div>
                </div>
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_infoContentInput}>
                    <input
                      type="text"
                      name="work_place"
                      value={formData.work_place}
                      onChange={handleValueChange}
                      placeholder="경기도 용인시 처인구 모현읍 외대로 81 "
                    />
                  </div>
                  <div className={styles.cp_infoContentInput}>
                    <input
                      type="text"
                      name="work_day"
                      value={formData.work_day}
                      onChange={handleValueChange}
                      placeholder="월, 수, 금"
                    />
                  </div>
                  <div className={styles.cp_infoContentInput}>
                    <input
                      type="text"
                      name="work_hour"
                      value={formData.work_hour}
                      onChange={handleValueChange}
                      placeholder="오전 9시 ~ 오후 6시 "
                    />
                  </div>
                  <div className={styles.cp_infoContentInput}>
                    <input
                      type="text"
                      name="work_pay"
                      value={formData.work_pay}
                      onChange={handleValueChange}
                      placeholder="250만원"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.cp_inforcontents}>
                <div className={styles.cp_inforcontentName}>
                  <div className={styles.cp_infoContentText}>
                    <span>*</span>
                    <p>근무기간</p>
                  </div>
                  <div className={styles.cp_infoContentText}>
                    <p>희망경력</p>
                  </div>
                </div>
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_infoContentInput}>
                    <div className={styles.cp_radio}>
                      <input
                        type="radio"
                        id="1Month"
                        name="work_term"
                        value="1"
                        onChange={handleValueChange}
                      />
                      <label htmlFor="1Month">1개월</label>
                      <input
                        type="radio"
                        id="3Month"
                        name="work_term"
                        value="3"
                        onChange={handleValueChange}
                      />
                      <label htmlFor="3Month">3개월</label>
                      <input
                        type="radio"
                        id="6Month"
                        name="work_term"
                        value="6"
                        onChange={handleValueChange}
                      />
                      <label htmlFor="6Month">6개월</label>
                      <input
                        type="radio"
                        id="12Month"
                        name="work_term"
                        value="12"
                        onChange={handleValueChange}
                      />
                      <label htmlFor="12Month">1년 이상</label>
                    </div>
                  </div>
                  <div className={styles.cp_infoContentInput}>
                    <input
                      type="text"
                      name="work_experience"
                      value={formData.work_experience}
                      onChange={handleValueChange}
                      placeholder="최소 1년"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* 모집내용 */}
          <div className={styles.cp_inforContainer}>
            <div className={styles.cp_infortitle}>
              <p>모집 내용</p>
            </div>
            <div className={styles.cp_inforWarning}>
              <p>*표시는 필수 사항입니다</p>
            </div>
            <div className={styles.cp_inforcontentBox}>
              <div className={styles.cp_inforcontents}>
                <div className={styles.cp_inforcontentName}>
                  <div className={styles.cp_infoContentText}>
                    <span>*</span>
                    <p>모집 인원</p>
                  </div>
                  <div className={styles.cp_infoContentText}>
                    <span>*</span>
                    <p>모집 종료일</p>
                  </div>
                  <div className={styles.cp_infoContentText}>
                    <span>*</span>
                    <p>성별</p>
                  </div>
                  <div className={styles.cp_infoContentText}>
                    <span>*</span>
                    <p>연령</p>
                  </div>
                </div>
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_infoContentInput}>
                    <input
                      type="number"
                      name="apply_num"
                      value={formData.apply_num}
                      onChange={handleValueChange}
                      placeholder="2명 "
                    />
                  </div>
                  <div className={styles.cp_infoContentInput}>
                    <input
                      type="text"
                      name="apply_deadline"
                      value={formData.apply_deadline}
                      onChange={handleValueChange}
                      placeholder="2023년 8월 30일"
                    />
                  </div>
                  <div className={styles.cp_infoContentInput}>
                    <div className={styles.cp_radio}>
                      <input
                        type="radio"
                        id="ignore"
                        name="apply_sex"
                        value="X"
                        onChange={handleValueChange}
                      />
                      <label htmlFor="1Month">성별무관</label>
                      <input
                        type="radio"
                        id="Men"
                        name="apply_sex"
                        value="M"
                        onChange={handleValueChange}
                      />
                      <label htmlFor="3Month">남자</label>
                      <input
                        type="radio"
                        id="Woman"
                        name="apply_sex"
                        value="W"
                        onChange={handleValueChange}
                      />
                      <label htmlFor="6Month">여자</label>
                    </div>
                  </div>
                  <div className={styles.cp_infoContentInput}>
                    <input
                      type="number"
                      name="apply_age"
                      value={formData.apply_age}
                      onChange={handleValueChange}
                      placeholder="80세 이하"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.cp_inforcontents}>
                <div className={styles.cp_inforcontentName}>
                  <div className={styles.cp_infoContentText}>
                    <span>*</span>
                    <p>직종</p>
                  </div>
                  <div className={styles.cp_infoContentText}>
                    <span>*</span>
                    <p>업무내용</p>
                  </div>
                </div>
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_infoContentInput}>
                    <input
                      type="text"
                      name="apply_work"
                      value={formData.apply_work}
                      onChange={handleValueChange}
                      placeholder="건물경비원"
                    />
                  </div>
                  <div className={styles.cp_infoContentInput}>
                    <input
                      type="text"
                      name="apply_detail"
                      value={formData.apply_detail}
                      onChange={handleValueChange}
                      placeholder="순찰, 방범"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cp_inforPower}>
          <h2>
            <input type="checkbox" />
            <label>파워파트너사로 지원하기</label>
          </h2>
        </div>
        <div className={styles.cp_inforPowerText}>
          <p>
            파워 파트너사에 지원하신다면 일자리찾기 페이지 뿐만 아니라 황금연금
            보증 기업 페이지에도 공고가 등록됩니다.
            <br /> 더불어 상위 노출, 검증 마크 부여 등 다양한 혜택을
            제공해드립니다.
            <br />더 자세한 내용은 추후 미팅을 통해 안내드리고 있습니다.
          </p>
          <button
            className={styles.cp_btn}
            type="submit"
            onClick={handleFormSubmit}
          >
            공고 등록하기
          </button>
        </div>
      </form>
    </main>
  );
};

export default CompanyPartnerApply;
