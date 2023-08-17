  import React, { useCallback, useEffect, useState } from "react";
import Json from "../json/TL_SCCO_CTPRVN.json";
import axios from "axios"
import SenuriService from "../api/axios";
function Map({jobs, selectedArea}) {
  const [map, setMap] = useState();
  const [polygons, setPolygons] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [clusterer, setClusterer] = useState(null);
  const centerPoint = {
    서울: [37.5665, 126.978],
    부산: [35.1796, 129.0756],
    대구: [35.8714, 128.6014],
    인천: [37.4563, 126.7052],
    광주: [35.1601, 126.8517],
    대전: [36.3504, 127.3845],
    울산: [35.5384, 129.3114],
    세종: [36.5047, 127.2448],
    경기: [37.4138, 127.5183],
    강원: [37.8228, 128.1555],
    충북: [36.6356, 127.4913],
    충남: [36.6588, 126.673],
    전북: [35.7175, 127.153],
    전남: [34.8679, 126.991],
    경북: [36.4919, 128.8889],
    경남: [35.4606, 128.2132],
    제주: [33.4996, 126.5312],
  };


  const displayArea = useCallback((coordinates, areaName) => {
    if (!map) return;
  
    const kakao = window.kakao;
    let newPolygons = [];
  
    const createPolygon = (path) => {
      return new kakao.maps.Polygon({
        map: map,
        path: path,
        strokeWeight: 3,
        strokeColor: '#3C5B73',
        strokeOpacity: 0.8,
        fillColor: "#7FACCF",
        fillOpacity: 0.5,
      });
    };
  
    coordinates.forEach((coordinate) => {
      let path = coordinate.map((coor) => new kakao.maps.LatLng(coor[1], coor[0]));
      let polygon = createPolygon(path);
  
      const onPolygonMouseOver = () => polygon.setOptions({ fillColor: "#6288A8" });
      const onPolygonMouseOut = () => polygon.setOptions({ fillColor: "#7FACCF" });
  
      const onPolygonClick = () => {
        var moveLatLon = new kakao.maps.LatLng(
          centerPoint[areaName][0],
          centerPoint[areaName][1]
        );
        map.setCenter(moveLatLon);
        map.setLevel(10);
      };
  
      kakao.maps.event.addListener(polygon, "mouseover", onPolygonMouseOver);
      kakao.maps.event.addListener(polygon, "mouseout", onPolygonMouseOut);
      kakao.maps.event.addListener(polygon, "click", onPolygonClick);
  
      newPolygons.push(polygon);
    });
  
    setPolygons((prevState) => [...prevState, ...newPolygons]);
  }, [map]);
  

  const getCoordsByAddress = (address) => {
    if (address) {
      const kakao = window.kakao;
      const geocoder = new kakao.maps.services.Geocoder();
      return new Promise((resolve, reject) => {
        geocoder.addressSearch(address, function (result, status) {
          if (status === kakao.maps.services.Status.OK) {
            var coords = new kakao.maps.LatLng(result[0].y, result[0].x);
            resolve(coords);
            return;
          }
          reject(
            new Error(
              `${address}getCoordsByAddress Error: not Vaild Address`
            )
          );
        });
      });
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://dapi.kakao.com/v2/maps/sdk.js?appkey=c42993669a187ffcee67bc25740ee4f6&autoload=false";
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
        setMap(map);

        const newClusterer = new kakao.maps.MarkerClusterer({
          map: map,
          averageCenter: true,
          minLevel: 10,
        });
        setClusterer(newClusterer);
      });
    };
  }, []);

  useEffect(() => {
    if (!map || !clusterer) return;

    const makeMap = async (selectedArea) => {
      const kakao = window.kakao;
      let newMarkers = [];
      if (selectedArea === "all") { //전체 지역 
        map.setLevel(13);
        map.setCenter(new kakao.maps.LatLng(36.38, 127.51));

        const pointDatas = Json.features;
        pointDatas.forEach((pointData) => {
          let coordinates = pointData.geometry.coordinates;
          let areaName = pointData.properties.CTP_KOR_NM;
          displayArea(coordinates, areaName);
        });
      } else {  //선택 지역 
        for (const polygon of polygons) {
          polygon.setMap(null);
        }
        var moveLatLon = new kakao.maps.LatLng(
          centerPoint[selectedArea][0],
          centerPoint[selectedArea][1]
        );
        map.setCenter(moveLatLon);
        map.setLevel(12);
        for (let job of jobs) {
          if (job.workPlcNm &&job.workPlcNm.slice(0, 2) === selectedArea) {
            console.log(job.workPlcNm.slice(0, 2));
            let coords = await getCoordsByAddress(job.workPlcNm);
            const marker = new kakao.maps.Marker({
              position: coords,
            });
            // clusterer.addMarker(marker);
            // 인포윈도우로 장소에 대한 설명을 표시합니다
            const infowindow = new kakao.maps.InfoWindow({
              content:
                "<div style='width:150px;text-align:center;padding:6px 0;'>" +
                job.oranNm +
                "</div>",
            });

            const onMouseOver = () => infowindow.open(map, marker);
            const onMouseOut = () => infowindow.close();
            const onClick = () => {
              infowindow.open(map, marker);
              map.setCenter(coords);
            };
  
            kakao.maps.event.addListener(marker, "mouseover", onMouseOver);
            kakao.maps.event.addListener(marker, "mouseout", onMouseOut);
            kakao.maps.event.addListener(marker, "click", onClick);

            marker.onRemove = () => {
              kakao.maps.event.removeListener(marker, "mouseover", onMouseOver);
              kakao.maps.event.removeListener(marker, "mouseout", onMouseOut);
              kakao.maps.event.removeListener(marker, "click", onClick);
            };

            newMarkers.push(marker);
          }
        }
      }
      clusterer.clear();
      clusterer.addMarkers(newMarkers);
    };

    makeMap(selectedArea);
  }, [selectedArea, clusterer, displayArea, jobs, map]);

  useEffect(() => {
    return () => {
      // Cleanup markers
      for (const marker of markers) {
        if (marker.onRemove) marker.onRemove();
      }

      // Cleanup polygons
      for (const polygon of polygons) {
        polygon.setMap(null);
      }
    };
  }, [markers, polygons]);
  
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