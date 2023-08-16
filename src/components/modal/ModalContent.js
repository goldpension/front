import React from 'react'
import styles from '../../css/Modal.module.css'
export const ModalContent = ({job, type}) => {
  return (
    <>
      {type === 'guarantee' ? (
        <div className={styles.jobDetails}>
          <div className={styles.jobDetail}><span style={{flex: '1'}}>구인상태</span><span style={{flex: '4'}}>{job.wantedTitle ? job.wantedTitle : '없음'}</span></div> 
          <div className={styles.jobDetail}><span style={{flex: '1'}}>직종</span><span style={{flex: '4'}}>{job.detCnts ? job.detCnts : '없음'}</span></div>
          <div className={styles.jobDetail}><span style={{flex: '1'}}>업무 내용</span><span style={{flex: '4'}}>{job.clltPrnnum ? job.clltPrnnum : '없음'}</span></div>
          <div className={styles.jobDetail}><span style={{flex: '1'}}>기업</span><span style={{flex: '4'}}>{job.plbizNm ? job.plbizNm : '없음'}</span></div>
          <div className={styles.jobDetail}><span style={{flex: '1'}}>근무지역</span><span style={{flex: '4'}}>{job.plDetAddr ? job.plDetAddr : '없음'}</span></div>
          <div className={styles.jobDetail}><span style={{flex: '1'}}>근무요일</span><span style={{flex: '4'}}>{job.clerk ? job.clerk : '없음'}</span></div>
          <div className={styles.jobDetail}><span style={{flex: '1'}}>근무시간</span><span style={{flex: '4'}}>{job.clerkContt ? job.clerkContt : '없음'}</span></div>
          <div className={styles.jobDetail}><span style={{flex: '1'}}>근무기간</span> <span style={{flex: '4'}}>{job.age}/{job.ageLim}</span></div>
          <div className={styles.jobDetail}><span style={{flex: '1'}}>급여</span><span style={{flex: '4'}}>{job.ftAcptDd ? job.ftAcptDd : '없음'}</span></div>
          <div className={styles.jobDetail}><span style={{flex: '1'}}>연령</span><span style={{flex: '4'}}>{job.toAcptDd ? job.toAcptDd : '없음'}</span></div>
          <div className={styles.jobDetail}><span style={{flex: '1'}}>희망경력</span><span style={{flex: '4'}}>{job.toAcptDd ? job.toAcptDd : '없음'}</span></div>
          <div className={styles.jobDetail}><span style={{flex: '1'}}>등록일</span><span style={{flex: '4'}}>{job.toAcptDd ? job.toAcptDd : '없음'}</span></div>
          <div className={styles.jobDetail}><span style={{flex: '1'}}>마감일</span><span style={{flex: '4'}}>{job.toAcptDd ? job.toAcptDd : '없음'}</span></div>
        </div>
      ) : (
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
      )}
    </>
    
    
  )
}
