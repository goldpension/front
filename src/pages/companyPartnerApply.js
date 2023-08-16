import React, { useState } from "react";
import styles from "../css/companyPartnerApply.module.css";
import { Link } from "react-router-dom";
import axios from "axios";

class CompanyPartnerApply extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      company_name: "",
      company_address: "",
      company_number: "",
      company_call: "",
      company_boss: "",
      company_size: "",
      company_logo: "",
      company_homepage: "",
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
    };
  }

  render() {
    return (
      <form onSubmit={this.handleFormSubmit}>
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
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>회사/점포명</p>
                  </div>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>사업자등록번호</p>
                  </div>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>회사/점포 주소</p>
                  </div>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>회사/점포 연락처</p>
                  </div>
                </div>
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="text"
                      name="company_name"
                      value={this.state.company_name}
                      onChange={this.handleValueChange}
                      placeholder="한국외국어대학교"
                    />
                  </div>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="tel"
                      name="company_number"
                      value={this.state.company_call}
                      onChange={this.handleValueChange}
                      pattern="[0-9]{3}-[0-9]{2}-[0-9]{5}"
                      placeholder="135-82-11191"
                    />
                  </div>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="text"
                      name="company_addres"
                      value={this.state.company_addres}
                      onChange={this.handleValueChange}
                      placeholder="경기도 용인시 처인구 모현읍 외대로 81 "
                    />
                  </div>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="number"
                      name="company_call"
                      value={this.state.company_call}
                      onChange={this.handleValueChange}
                      placeholder="031-330-4114"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.cp_inforcontents}>
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>대표자명</p>
                  </div>
                  <div className={styles.cp_inforcontenttext}>
                    <p>직원수</p>
                  </div>
                  <div className={styles.cp_inforcontenttext}>
                    <p>홈페이지</p>
                  </div>
                  <div className={styles.cp_inforcontenttext}>
                    <p>회사로고</p>
                  </div>
                </div>
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="text"
                      name="company_boss"
                      value={this.state.company_boss}
                      onChange={this.handleValueChange}
                      placeholder="조성민"
                    />
                  </div>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="number"
                      name="company_size"
                      value={this.state.company_size}
                      onChange={this.handleValueChange}
                      placeholder="6(명)"
                    />
                  </div>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="url"
                      name="company_homepage"
                      value={this.state.company_homepage}
                      onChange={this.handleValueChange}
                      placeholder="https://www.hufs.ac.kr"
                    />
                  </div>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="file"
                      name="company_logo"
                      onChange={this.handleFileChange}
                      placeholder=""
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
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>근무지</p>
                  </div>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>근무요일</p>
                  </div>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>근무시간</p>
                  </div>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>급여</p>
                  </div>
                </div>
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="text"
                      name="work_place"
                      value={this.state.work_place}
                      onChange={this.handleValueChange}
                      placeholder="경기도 용인시 처인구 모현읍 외대로 81 "
                    />
                  </div>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="text"
                      name="work_day"
                      value={this.state.work_day}
                      onChange={this.handleValueChange}
                      placeholder="월, 수, 금"
                    />
                  </div>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="time"
                      name="work_hour"
                      value={this.state.work_hour}
                      onChange={this.handleValueChange}
                      placeholder="오전 9시 ~ 오후 6시 "
                    />
                  </div>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="number"
                      name="work_pay"
                      value={this.state.work_pay}
                      onChange={this.handleValueChange}
                      placeholder="250만원"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.cp_inforcontents}>
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>근무기간</p>
                  </div>
                  <div className={styles.cp_inforcontenttext}>
                    <p>희망경력</p>
                  </div>
                </div>
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_inforcontentinput}>
                    <div className={styles.cp_radio}>
                      <input
                        type="radio"
                        id="1Month"
                        name="work_term"
                        value="1"
                      />
                      <label for="1Month">1개월</label>
                      <input
                        type="radio"
                        id="3Month"
                        name="work_term"
                        value="3"
                      />
                      <label for="3Month">3개월</label>
                      <input
                        type="radio"
                        id="6Month"
                        name="work_term"
                        value="6"
                      />
                      <label for="6Month">6개월</label>
                      <input
                        type="radio"
                        id="12Month"
                        name="work_term"
                        value="12"
                      />
                      <label for="12Month">1년 이상</label>
                    </div>
                  </div>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="text"
                      name="work_experience"
                      value={this.state.work_experience}
                      onChange={this.handleValueChange}
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
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>모집 인원</p>
                  </div>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>모집 종료일</p>
                  </div>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>성별</p>
                  </div>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>연령</p>
                  </div>
                </div>
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="number"
                      name="apply_num"
                      value={this.state.apply_num}
                      onChange={this.handleValueChange}
                      placeholder="2명 "
                    />
                  </div>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="date"
                      name="apply_deadline"
                      value={this.state.apply_deadline}
                      onChange={this.handleValueChange}
                      placeholder="2023년 8월 30일"
                    />
                  </div>
                  <div className={styles.cp_inforcontentinput}>
                    <div className={styles.cp_radio}>
                      <input
                        type="radio"
                        id="ignore"
                        name="apply_sex"
                        value="X"
                      />
                      <label for="1Month">성별무관</label>
                      <input type="radio" id="Men" name="apply_sex" value="M" />
                      <label for="3Month">남자</label>
                      <input
                        type="radio"
                        id="Woman"
                        name="apply_sex"
                        value="W"
                      />
                      <label for="6Month">여자</label>
                    </div>
                  </div>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="number"
                      name="apply_age"
                      value={this.state.apply_age}
                      onChange={this.handleValueChange}
                      placeholder="80세 이하"
                    />
                  </div>
                </div>
              </div>

              <div className={styles.cp_inforcontents}>
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>직종</p>
                  </div>
                  <div className={styles.cp_inforcontenttext}>
                    <span>*</span>
                    <p>업무내용</p>
                  </div>
                </div>
                <div className={styles.cp_inforcontent}>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="text"
                      name="apply_work"
                      value={this.state.apply_work}
                      onChange={this.handleValueChange}
                      placeholder="건물경비원"
                    />
                  </div>
                  <div className={styles.cp_inforcontentinput}>
                    <input
                      type="text"
                      name="apply_detail"
                      value={this.state.apply_detail}
                      onChange={this.handleValueChange}
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
        </div>

        <div className={styles.cp_btn}>
          <Link to="/">
            <button type="submit" onClick={this.handleFormSubmit}>
              공고 등록하기
            </button>
          </Link>
        </div>
      </form>
    ); // return
  } // render

  CPApply = () => {
    const url = "company/create";
    const formData = new FormData();
    formData.append("company_name", this.state.company_name);
    formData.append("company_number", this.state.company_number);
    formData.append("company_address", this.state.company_address);
    formData.append("company_call", this.state.company_call);
    formData.append("company_boss", this.state.company_boss);
    formData.append("company_size", this.state.company_size);
    formData.append("company_logo", this.state.company_logo);
    formData.append("company_homepage", this.state.company_homepage);

    formData.append("work_place", this.state.work_place);
    formData.append("work_day", this.state.work_day);
    formData.append("work_hour", this.state.work_hour);
    formData.append("work_pay", this.state.work_pay);
    formData.append("work_term", this.state.work_term);
    formData.append("work_experience", this.state.work_experience);

    formData.append("apply_num", this.state.apply_num);
    formData.append("apply_deadline", this.state.apply_deadline);
    formData.append("apply_sex", this.state.apply_sex);
    formData.append("apply_age", this.state.apply_age);
    formData.append("apply_work", this.state.apply_work);
    formData.append("apply_detail", this.state.apply_detail);
    const config = {
      headers: {
        "content-type": "multipart/form-data",
      },
    };
    return post(url, formData, config);
  }; //

  handleFormSubmit = (e) => {
    e.preventDefault();
    this.CPApply().then((response) => {
      console.log(response.data);
    });
  };

  handleFileChange = (e) => {
    this.setState({
      company_logo: e.target.files[0],
    });
  };

  handleValueChange = (e) => {
    let nextState = {};
    nextState[e.target.name] = e.target.value;
    this.setState(nextState);
  };
}
