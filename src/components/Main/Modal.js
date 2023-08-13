import React, {useState} from 'react'
import styles from '../../css/Modal.module.css';

const Modal = ({show, close, job}) => {
  const [applyCompleted, SetApplyCompleted] = useState(true);
  if (!show) {
    return null;
  }
  const handleClickContent = (e) => {
    e.stopPropagation();
  };
  console.log(job)
  return (
    <div className={styles.modalOverlay} onClick={close}>
      <div className={styles.modalContainer} onClick={handleClickContent}>
        <div className={styles.buttonContainer}>
          <button onClick={close} className={styles.closeModalButton}>
            닫기
          </button>
        </div>
        
        {applyCompleted ? 
        (
        <div className={styles.modalContent}>
          <div className={styles.applyCompletedContent}>
            <p>지원이 완료되었습니다!</p>
            <p>지원서 작성 내용과 공고를 확인하시려면</p>
            <p><span>여기</span> 혹은 접수 확인 페이지로 들어가세요.</p>
          </div>
        </div>
        ) 
        : 
        (
        <div className={styles.modalContent}>
          <div className={styles.jobDetails}>
            <div className={styles.jobDetail}><span style={{flex: '1'}}>제목</span><span style={{flex: '4'}}>{job.wantedTitle ? job.wantedTitle : '없음'}</span></div> 
            <div className={styles.jobDetail}><span style={{flex: '1'}}>상세내용</span><span style={{flex: '4'}}>{job.detCnts ? job.detCnts : '없음'}</span></div>
            <div className={styles.jobDetail}><span style={{flex: '1'}}>모집인원</span><span style={{flex: '4'}}>{job.clltPrnnum ? job.clltPrnnum : '없음'}</span></div>
            <div className={styles.jobDetail}><span style={{flex: '1'}}>기업</span><span style={{flex: '4'}}>{job.plbizNm ? job.plbizNm : '없음'}</span></div>
            <div className={styles.jobDetail}><span style={{flex: '1'}}>주소</span><span style={{flex: '4'}}>{job.plDetAddr ? job.plDetAddr : '없음'}</span></div>
            <div className={styles.jobDetail}><span style={{flex: '1'}}>담당자</span><span style={{flex: '4'}}>{job.clerk ? job.clerk : '없음'}</span></div>
            <div className={styles.jobDetail}><span style={{flex: '1'}}>담당자연락처</span><span style={{flex: '4'}}>{job.clerkContt ? job.clerkContt : '없음'}</span></div>
            <div className={styles.jobDetail}><span style={{flex: '1'}}>연령</span> <span style={{flex: '4'}}>{job.age}/{job.ageLim}</span></div>
            <div className={styles.jobDetail}><span style={{flex: '1'}}>등록일</span><span style={{flex: '4'}}>{job.ftAcptDd ? job.ftAcptDd : '없음'}</span></div>
            <div className={styles.jobDetail}><span style={{flex: '1'}}>마감일</span><span style={{flex: '4'}}>{job.toAcptDd ? job.toAcptDd : '없음'}</span></div>
          </div>
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
        </div>
        )}
      </div>
    </div>
  )
}

export default Modal;