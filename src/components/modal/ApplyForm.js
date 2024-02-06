import React, { useState } from "react";
import styles from "../../css/Modal.module.css";
import { Axios } from "../../api/axios";

function ApplyForm({ job, checkDeadline, onClickSubmit }) {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [phone_number, setPhone_number] = useState("");
  const [gender, setGender] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = {
      name: name,
      age: age,
      phone_number: phone_number,
      gender: gender,
      searching: checkDeadline(job.apply_deadline),
      apply_detail: job.apply_detail,
      company_name: job.company_name,
      work_place: job.work_place,
    };

    try {
      await Axios.post("/guarantee/company/", formData);
      console.log("formData", formData);
      onClickSubmit();
    } catch (error) {
      console.error(error);
      alert("지원 중 오류가 발생했습니다. 다시 시도해주세요.");
    }
  };

  return (
    <form className={styles.applyForm} onSubmit={handleSubmit}>
      <div className={styles.formItem}>
        <label for='name'>이름</label>
        <input
          type="text"
          placeholder="이름을 써주세요"
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="name"
          alt="이름을 입력해주세요"
        />
      </div>
      <div className={styles.formItem}>
        <label>나이</label>
        <input
          type="number"
          placeholder="나이를 써주세요"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
      </div>
      <div className={styles.formItem}>
        <label>연락처</label>
        <input
          type="text"
          placeholder="전화번호를 써주세요"
          value={phone_number}
          onChange={(e) => setPhone_number(e.target.value)}
        />
      </div>
      <div className={styles.formItem}>
        <label>성별</label>
        <div className={styles.genderBtnContainer}>
          <button
            type="button"
            className={
              gender === "female"
                ? styles.selectedGenderButton
                : styles.genderButton
            }
            onClick={() => setGender("female")}
          >
            여성
          </button>
          <button
            type="button"
            className={
              gender === "male"
                ? styles.selectedGenderButton
                : styles.genderButton
            }
            onClick={() => setGender("male")}
          >
            남성
          </button>
        </div>
      </div>

      <div className={styles.submitButtonContainer}>
        {" "}
        <button className={styles.submitButton} type="submit">
          지원하기
        </button>{" "}
      </div>
    </form>
  );
}

export default ApplyForm;
