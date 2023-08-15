import React from 'react'

export const ApplyForm = ({method}) => {
  return (
    <form className={styles.applyForm}>
      <div className={styles.formItem}>
        <label>이름</label>
        <input type="text" placeholder='이름을 써주세요'/>
      </div>
      <div className={styles.formItem}>
        <label>나이</label>
        <input type="number" placeholder='나이를 써주세요'/>
      </div>
      <div className={styles.formItem}>
        <label>연락처</label>
        <input
          type="text" placeholder='전화번호를 써주세요'
        />
      </div>
      <div className={styles.formItem}>
        <label>성별</label>
        <div>
          <label>
            <input type="radio" name="gender" value="female" />
            여성
          </label>
          <label>
            <input type="radio" name="gender" value="male" />
            남성
          </label>
        </div>
      </div>
      <div className={styles.submitButtonContainer}>
        <button className={styles.submitButton} type="submit">지원하기</button>
      </div>
    </form>
  )
}
