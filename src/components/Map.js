import React, { useEffect, useState } from "react";
import Json from "../json/TL_SCCO_CTPRVN.json";
const { kakao } = window;

function Map({ jobs }) {
  const [map, setMap] = useState(null);
  const [geocoder, setGeocoder] = useState(null);
  console.log('jobs:', jobs)
  const displayArea = (coordinates, areaName) => {
    let customOverlay = new kakao.maps.CustomOverlay({});

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
        fillOpacity: 0.7 // 채우기 불투명도 입니다
      });

      const onPolygonMouseOver = (mouseEvent) => {
        polygon.setOptions({ fillColor: "red" });

        customOverlay.setContent('<div class="area">' + areaName + "</div>");

        customOverlay.setPosition(mouseEvent.latLng);
        customOverlay.setMap(map);
      };

      const onPolygonMouseMove = (mouseEvent) => {
        customOverlay.setPosition(mouseEvent.latLng);
      };

      const onPolygonMouseOut = () => {
        polygon.setOptions({ fillColor: "#A2FF99" });
        customOverlay.setMap(null);
      };

      kakao.maps.event.addListener(polygon, "mouseover", onPolygonMouseOver);
      kakao.maps.event.addListener(polygon, "mousemove", onPolygonMouseMove);
      kakao.maps.event.addListener(polygon, "mouseout", onPolygonMouseOut);
    });
  };
  const getCoordsByAddress = (address) => {
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
  const makeMarker = async (jobs) => {
    let markerArray = [];
    let infowindowArray = [];

    for (var i = 0; i < jobs.length; i++) {
      // 마커를 생성합니다
      let coords = await getCoordsByAddress(jobs[i].workPlcNm);
      var marker = new kakao.maps.Marker({
        map: map, // 마커를 표시할 지도
        position: coords, // 마커를 표시할 위치
      });

      markerArray.push(marker);

      // 마커에 표시할 인포윈도우를 생성합니다
      var infowindow = new kakao.maps.InfoWindow({
        content: getContent(jobs[i]), // 인포윈도우에 표시할 내용
      });

      infowindowArray.push(infowindow);

      // 마커에 mouseover 이벤트와 mouseout 이벤트를 등록합니다
      // 이벤트 리스너로는 클로저를 만들어 등록합니다
      // for문에서 클로저를 만들어 주지 않으면 마지막 마커에만 이벤트가 등록됩니다
      /*
      kakao.maps.event.addListener(
        marker,
        "click",
        makeOverListener(map, marker, infowindow, coords)
      );
      kakao.maps.event.addListener(map, "click", makeOutListener(infowindow));
      */
    }
  }
  useEffect(() => {
    const pointDatas = Json.features;
    //console.log(pointDatas);
    let container = document.getElementById("map");
    let options = {
      center: new kakao.maps.LatLng(36.38, 127.51),
      level: 13,
    };

    let map = new kakao.maps.Map(container, options);
    setMap(map)
    let geocoder = new kakao.maps.services.Geocoder();
    setGeocoder(geocoder)
    pointDatas.forEach((pointData) => {
      let coordinates = pointData.geometry.coordinates;
      let areaName = pointData.properties.CTP_KOR_NM;
      displayArea(coordinates, areaName);
    });
  }, []);

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
