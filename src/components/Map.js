import React, { useEffect, useState } from "react";
import Json from "../json/TL_SCCO_CTPRVN.json";

function Map({ jobs }) {
  const [map, setMap] = useState()
  const [polygons, setPolygons] = useState([])
  const [markers, setMarkers] = useState([]);
  console.log(jobs)

  const searchAddress = (job) => {
    const kakao = window.kakao;
    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(job.workPlcNm, (result, status) => {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        // 결과로 받은 위치를 마커로 표시합니다
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
          console.log('이벤트')
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
      } else {
        console.error("Geocoder failed due to: " + status);
      }
    });
  };
  
  const displayArea = (coordinates, areaName) => {
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

      const onPolygonMouseMove = (mouseEvent) => {
      };
      

      const onPolygonMouseOut = () => {
        polygon.setOptions({ fillColor: "#A2FF99" });
      };

      kakao.maps.event.addListener(polygon, "mouseover", onPolygonMouseOver);
      kakao.maps.event.addListener(polygon, "mousemove", onPolygonMouseMove);
      kakao.maps.event.addListener(polygon, "mouseout", onPolygonMouseOut);

      newPolygons.push(polygon);
    });
    setPolygons(newPolygons);
  };

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

      jobs.forEach((job) => {
        searchAddress(job);
      });
      
      const pointDatas = Json.features;

      pointDatas.forEach((pointData) => {
        let coordinates = pointData.geometry.coordinates;
        let areaName = pointData.properties.CTP_KOR_NM;
        displayArea(coordinates, areaName);
      });
    }
  }, [map, jobs]);

  return (
    <div
      id="map"
      style={{
        width: "500px",
        height: "600px",
      }}
    ></div>
  );
}
export default Map;
