import React, {useEffect} from 'react'
import styles from '../../css/Modal.module.css'
export const ApplyVisit = ({method, address}) => {

  useEffect(() =>{
    const kakao = window.kakao;
    var mapContainer = document.getElementById('map'), // 지도를 표시할 div 
    mapOption = { 
        center: new kakao.maps.LatLng(33.450701, 126.570667), // 지도의 중심좌표
        level: 3 // 지도의 확대 레벨
    };

    var map = new kakao.maps.Map(mapContainer, mapOption); 
    var geocoder = new kakao.maps.services.Geocoder();

    // 주소로 좌표를 검색합니다
    geocoder.addressSearch(address.slice(6), function(result, status) {

        // 정상적으로 검색이 완료됐으면 
        if (status === kakao.maps.services.Status.OK) {

            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);

            // 결과값으로 받은 위치를 마커로 표시합니다
            var marker = new kakao.maps.Marker({
                map: map,
                position: coords
            });
            // 지도의 중심을 결과값으로 받은 위치로 이동시킵니다
            map.setCenter(coords);
        } else {
          console.log('map이 안돼용')
        }
    });    
  },[])
  return (
    <div className={styles.applyPublicData}>
      <p>지원을 원하시면 아래의</p>
      <p>주소로 <span className={styles.applyMethod}>{method}</span>해주세요.</p>
      <div className={styles.addressContainer}>{address}</div>
      {address ? 
      <div id="map" style={{width: '80%', height: '200px'}}></div>
      :
      <div>지도 준비중</div>}
      
    </div>
  )
}
