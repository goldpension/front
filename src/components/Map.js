import React, { useCallback, useEffect, useState } from "react";
import Json from "../json/TL_SCCO_CTPRVN.json";
import axios from "axios"
import SenuriService from "../api/axios";

function Map({ jobs }) {
  const [map, setMap] = useState()
  const [polygons, setPolygons] = useState([])
  const [markers, setMarkers] = useState([]);
  const getCoordsByAddress = (address) => {
    if (!address) { // 주소가 undefined, null, 빈 문자열 등일 경우 거부합니다.
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
        });
      });
    }

  }

  const makeMap = useCallback(async () => {
    /*
    const dataSet = jobs.filter(job => 
      job.workPlcNm.slice(0,2) === areaName
    )
    */
    const kakao = window.kakao;
    for (let job of jobs) {
      let coords = await getCoordsByAddress(job.workPlcNm);
      const marker = new kakao.maps.Marker({
        position: coords,
      });

      setMarkers((prevMarkers)=> [...prevMarkers, marker]);
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
    };
  },[jobs]);

  
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
        const centerPoint = {
          '서울특별시': [37.5665, 126.9780],
          '부산광역시': [35.1796, 129.0756],
          '대구광역시': [35.8714, 128.6014],
          '인천광역시': [37.4563, 126.7052],
          '광주광역시': [35.1601, 126.8517],
          '대전광역시': [36.3504, 127.3845],
          '울산광역시': [35.5384, 129.3114],
          '세종특별자치시': [36.5047, 127.2448],
          '경기도': [37.4138, 127.5183],
          '강원도': [37.8228, 128.1555],
          '충청북도': [36.6356, 127.4913],
          '충청남도': [36.6588, 126.6730],
          '전라북도': [35.7175, 127.1530],
          '전라남도': [34.8679, 126.9910],
          '경상북도': [36.4919, 128.8889],
          '경상남도': [35.4606, 128.2132],
          '제주특별자치도': [33.4996, 126.5312],
        }
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
 

  const getContent = (job) => {
    return (
      <div>
        <span>{job.deadline}</span>
        <span>{job.frDd}</span>
        <span>{job.toDd}</span>
        <span>{job.oranNm}</span>
        <span>{job.recrtTitle}</span>
        <span>{job.workPlcNm}</span>
      </div>
    )
  }

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://dapi.kakao.com/v2/maps/sdk.js?appkey=c42993669a187ffcee67bc25740ee4f6&autoload=false';
    document.head.appendChild(script);

    script.onload = () => {
      const kakao = window.kakao;

      kakao.maps.load(() => {
        const pointDatas = Json.features;
  
        let container = document.getElementById("map");
        let options = {
          center: new kakao.maps.LatLng(36.38, 127.51),
          level: 13,
        };
  
        let map = new kakao.maps.Map(container, options);
        setMap(map)
      });
    };
  }, []);

  useEffect(() => {
    if (map) {
      const kakao = window.kakao;

      // 마커 클러스터러를 생성합니다
      const clusterer = new kakao.maps.MarkerClusterer({
        map: map,
        averageCenter: true,
        minLevel: 10,
      });

      // 클러스터러에 마커를 추가합니다.
      clusterer.addMarkers(markers);

      makeMap();      

      const pointDatas = Json.features;

      pointDatas.forEach((pointData) => {
        let coordinates = pointData.geometry.coordinates;
        let areaName = pointData.properties.CTP_KOR_NM;
        displayArea(coordinates, areaName);
      });
    }
  }, [map, jobs, displayArea, makeMap, markers]);

  return (
    <div
      id="map"
      style={{
        width: "405px",
        height: "500px",
      }}
    ></div>
  );
}
export default Map;
