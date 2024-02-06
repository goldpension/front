  import React, { useCallback, useEffect, useState } from "react";
import Json from "../json/TL_SCCO_CTPRVN.json";
import styles from "../css/Map.module.css";
function Map({jobs, selectedArea, onClickCount, openModal}) {
  const [map, setMap] = useState();
  const [polygons, setPolygons] = useState([]);
  const [markers, setMarkers] = useState([]);
  const [clusterer, setClusterer] = useState(null);
  const centerPoint = {
    서울: [37.5665, 126.978],
    서울특별시: [37.5665, 126.978],
    부산: [35.1796, 129.0756],
    부산광역시: [35.1796, 129.0756],
    대구: [35.8714, 128.6014],
    대구광역시: [35.8714, 128.6014],
    인천: [37.4563, 126.7052],
    인천광역시: [37.4563, 126.7052],
    광주: [35.1595, 126.8526],
    광주광역시: [35.1595, 126.8526],
    대전: [36.3504, 127.3845],
    대전광역시: [36.3504, 127.3845],
    울산: [35.5384, 129.3114],
    울산광역시: [35.5384, 129.3114],
    세종: [36.4801, 127.2890],
    세종특별자치시: [36.4801, 127.2890],
    경기: [37.4138, 127.178],
    경기도: [37.4138, 127.178],
    강원: [37.7000, 128.1555],
    강원도: [37.7000, 128.1555],
    충북: [36.8000, 127.7000],
    충청북도: [36.8000, 127.7000],
    충남: [36.5184, 126.8000],
    충청남도: [36.5184, 126.8000],
    전북: [35.7175, 127.153],
    전라북도: [35.7175, 127.153],
    전남: [34.8161, 126.991],
    전라남도: [34.8161, 126.991],
    경북: [36.4919, 128.8889],
    경상북도: [36.4919, 128.8889],
    경남: [35.1500, 128.4500],
    경상남도: [35.1500, 128.4500],
    제주: [33.4996, 126.5312],
    제주특별자치도: [33.4996, 126.5312],
  };

  const getAreaName = (areaName) => {
    switch (areaName) {
      case '서울특별시':
        return '서울';
      case '부산광역시':
        return '부산';
      case '대구광역시':
        return '대구';
      case '인천광역시':
        return '인천';
      case '광주광역시':
        return '광주';
      case '대전광역시':
        return '대전';
      case '울산광역시':
        return '울산';
      case '세종특별자치시':
        return '세종';
      case '경기도':
        return '경기';
      case '강원도':
        return '강원';
      case '충청북도':
        return '충북';
      case '충청남도':
        return '충남';
      case '전라북도':
        return '전북';
      case '전라남도':
        return '전남';
      case '경상북도':
        return '경북';
      case '경상남도':
        return '경남';
      case '제주특별자치도':
        return '제주';
    }
  }
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
      const onPolygonMouseOver = (mouseEvent) => {
        polygon.setOptions({ fillColor: "#6288A8" });
      };

      const onPolygonMouseOut = () => {
        polygon.setOptions({ fillColor: "#7FACCF" });
      };

      const onPolygonClick = () => {
        let polygonAreaName = getAreaName(areaName);
        onClickCount(polygonAreaName)
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
    const kakao = window.kakao;
  
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
  }, []);
  
  useEffect(() => {
    if (!map || !clusterer) return;

    const makeMap = async (selectedArea) => {
      const kakao = window.kakao;
      let newMarkers = [];
      if (selectedArea === "all" || selectedArea === undefined) { //전체 지역 
        clusterer.clear();
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
        let metropolitanCities = ["서울", "부산", "대구", "인천", "광주", "대전", "울산", "세종"];
        let provinces = ["경기", "강원", "충북", "충남", "전북", "전남", "경북", "경남", "제주"];
        map.setCenter(moveLatLon);
        if (metropolitanCities.includes(selectedArea)) {
          map.setLevel(10);
        } else if (provinces.includes(selectedArea)) {
          map.setLevel(11);
        } 
        for (let job of jobs) {
          if (job.workPlcNm &&job.workPlcNm.slice(0, 2) === selectedArea) {
            // console.log(job.workPlcNm.slice(0, 2));
            let coords = await getCoordsByAddress(job.workPlcNm);
            const marker = new kakao.maps.Marker({
              position: coords,
            });
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
              openModal(job);
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
    <article
      id="map"
      style={{
        width: "100%",
        height: "500px",
        borderRadius: "20px",
      }}
      className={styles.map}
    >
    </article>
  );
}

export default Map;