import React, { useCallback, useEffect, useState } from "react";
import Json from "../json/TL_SCCO_CTPRVN.json";
import axios from "axios"
import SenuriService from "../api/axios";

function Map({ jobs, selectedArea }) {
  const [map, setMap] = useState()
  const [polygons, setPolygons] = useState([])
  const [markers, setMarkers] = useState([]);
  const [clusterer, setClusterer] = useState(null);
  const centerPoint = {
    '서울': [37.5665, 126.9780],
    '부산': [35.1796, 129.0756],
    '대구': [35.8714, 128.6014],
    '인천': [37.4563, 126.7052],
    '광주': [35.1601, 126.8517],
    '대전': [36.3504, 127.3845],
    '울산': [35.5384, 129.3114],
    '세종': [36.5047, 127.2448],
    '경기': [37.4138, 127.5183],
    '강원': [37.8228, 128.1555],
    '충북': [36.6356, 127.4913],
    '충남': [36.6588, 126.6730],
    '전북': [35.7175, 127.1530],
    '전남': [34.8679, 126.9910],
    '경북': [36.4919, 128.8889],
    '경남': [35.4606, 128.2132],
    '제주': [33.4996, 126.5312],
  }
  const closeMarker = () => {
    let markerArray = [];
    for (let marker of markerArray) {
      marker.setMap(null);
    }
  }
  const displayArea = useCallback((coordinates, areaName) => {
    const kakao = window.kakao;
    if (!map) return;
    let newPolygons = [...polygons];

    coordinates.forEach((coordinate) => {
      let path = [];
      coordinate.forEach((coor) => {
        path.push(new kakao.maps.LatLng(coor[1], coor[0]));
      });
      let polygon = new kakao.maps.Polygon({
        map: map,
        path: path,
        strokeWeight: 3, // 선의 두께입니다
        strokeColor: '#39DE2A', // 선의 색깔입니다
        strokeOpacity: 0.8, // 선의 불투명도 입니다 1에서 0 사이의 값이며 0에 가까울수록 투명합니다
        fillColor: '#A2FF99', // 채우기 색깔입니다
        fillOpacity: 0.5 // 채우기 불투명도 입니다
      });

      const onPolygonMouseOver = (mouseEvent) => {
        polygon.setOptions({ fillColor: "green" });

      };
      const onPolygonMouseOut = () => {
        polygon.setOptions({ fillColor: "#A2FF99" });
      };

      const onPolygonClick = (mouseEvent) => {
        var moveLatLon = new kakao.maps.LatLng(centerPoint[areaName][0], centerPoint[areaName][1]);
        map.setCenter(moveLatLon);
        map.setLevel(10);
        //makeMap(areaName);
      };

      kakao.maps.event.addListener(polygon, "mouseover", onPolygonMouseOver);
      kakao.maps.event.addListener(polygon, "mouseout", onPolygonMouseOut);
      kakao.maps.event.addListener(polygon, "click", onPolygonClick);

      newPolygons.push(polygon);
    });
    setPolygons(newPolygons);
  }, []);

  const getCoordsByAddress = (address) => {
    if (address) { // 주소가 undefined, null, 빈 문자열 등일 경우 거부합니다.
      const kakao = window.kakao;
      const geocoder = new kakao.maps.services.Geocoder();
      return new Promise((resolve, reject) => {
        // 주소로 좌표를 검색합니다
        geocoder.addressSearch(address, function (result, status) {
          // 정상적으로 검색이 완료됐으면
          if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            resolve(coords);
            return;
          }
          reject(new Error(`${address}getCoordsByAddress Error: not Vaild Address`));
        });
      });
    }

  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=c42993669a187ffcee67bc25740ee4f6&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      const kakao = window.kakao;

      kakao.maps.load(() => { 
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(36.38, 127.51),
          level: 13,
        };
  
        let map = new kakao.maps.Map(container, options);
        setMap(map)

        const newClusterer = new kakao.maps.MarkerClusterer({
          map: map,
          averageCenter: true,
          minLevel: 10,
        });
        setClusterer(newClusterer);
      });
    };
  }, []);
/*
  useEffect(()=> {
    if (!map) return;

    const kakao = window.kakao;

    // 마커 클러스터러 생성
    const newClusterer = new kakao.maps.MarkerClusterer({
      map: map,
      averageCenter: true,
      minLevel: 10,
    });
    setClusterer(newClusterer);
  }, [map]);
*/
  const InfoWindow = (job) => {
    return (
      <div style={{
        width:'150px',
        textAlign:'center',
        padding: '6px 0'
      }}>
        {job.oranNm}
        {job.workPlcNm}
      </div>
    )
  }
  useEffect(() => {
    //클러스터러가 없으면 리턴 
    if (!map || !clusterer) return;
    clusterer.clear(); // 기존 마커들을 지웁니다.
    
    const makeMap = async (selectedArea) => {
      const kakao = window.kakao;
      let newMarkers = [];
      if (selectedArea === 'all') { //처음에 모든 지역의 마커를 보여줌 
        map.setLevel(13);
        map.setCenter(new kakao.maps.LatLng(36.38, 127.51));
        for (let job of jobs) {
          if (job.workPlcNm) {
            let coords = await getCoordsByAddress(job.workPlcNm);
            const marker = new kakao.maps.Marker({
              position: coords,
            });
            
            newMarkers.push(marker);
            // clusterer.addMarker(marker);
            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new kakao.maps.InfoWindow({
              content: '<div style="width:150px;text-align:center;padding:6px 0;">' + job.oranNm + "</div>",
            });
      
            kakao.maps.event.addListener(marker, 'mouseover', function() {
              // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                infowindow.open(map, marker);
            });
            
            // 마커에 마우스아웃 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseout', function() {
                // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                infowindow.close();
            });
            kakao.maps.event.addListener(marker, 'click', function() {
              // 마커 위에 인포윈도우를 표시합니다
              infowindow.open(map, marker);  
              map.setCenter(coords);
            });
          }
        };
      } else {  //선택된 지역의 마커만 보여줌 
        var moveLatLon = new kakao.maps.LatLng(centerPoint[selectedArea][0], centerPoint[selectedArea][1]);
        map.setCenter(moveLatLon);
        map.setLevel(12);
        for (let job of jobs) {
          if (job.workPlcNm && job.workPlcNm.slice(0,2) === selectedArea) {
            console.log(job.workPlcNm.slice(0,2))
            let coords = await getCoordsByAddress(job.workPlcNm);
            const marker = new kakao.maps.Marker({
              position: coords,
            });
            newMarkers.push(marker);
            // clusterer.addMarker(marker);
            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new kakao.maps.InfoWindow({
              content: '<div style="width:150px;text-align:center;padding:6px 0;">' + job.oranNm + "</div>",
            });
      
            kakao.maps.event.addListener(marker, 'mouseover', function() {
              // 마커에 마우스오버 이벤트가 발생하면 인포윈도우를 마커위에 표시합니다
                infowindow.open(map, marker);
            });
            
            // 마커에 마우스아웃 이벤트를 등록합니다
            kakao.maps.event.addListener(marker, 'mouseout', function() {
                // 마커에 마우스아웃 이벤트가 발생하면 인포윈도우를 제거합니다
                infowindow.close();
            });
            kakao.maps.event.addListener(marker, 'click', function() {
              // 마커 위에 인포윈도우를 표시합니다
              infowindow.open(map, marker);  
              map.setCenter(coords);
            });
          }
        };
        
      }
      clusterer.addMarkers(newMarkers);
    };
    if(map && clusterer) {
      makeMap(selectedArea);
    }

    const pointDatas = Json.features;
    pointDatas.forEach((pointData) => {
      let coordinates = pointData.geometry.coordinates;
      let areaName = pointData.properties.CTP_KOR_NM;
      displayArea(coordinates, areaName);
    });
  }, [selectedArea, clusterer]);

  return (
    <div
      id="map"
      style={{
        width: "550px",
        height: "550px",
        borderRadius: "20px",
      }}
    ></div>
  );
}
export default Map;