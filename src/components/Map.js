import { SimpleSouthKoreaMapChart } from "react-simple-south-korea-map-chart";

const data = [
  { locale: "부산광역시", count: 150 },
  { locale: "대구광역시", count: 300 },
  { locale: "대전광역시", count: 400 },
  { locale: "강원도", count: 250 },
  { locale: "광주광역시", count: 100 },
  { locale: "경기도", count: 400 },
  { locale: "인천광역시", count: 220 },
  { locale: "제주특별자치도", count: 100 },
  { locale: "충청북도", count: 49 },
  { locale: "경상북도", count: 200 },
  { locale: "전라북도", count: 330 },
  { locale: "세종특별자치시", count: 110 },
  { locale: "충청남도", count: 10 },
  { locale: "경상남도", count: 0 },
  { locale: "전라남도", count: 250 },
  { locale: "울산광역시", count: 100 },
  { locale: "서울특별시", count: 10000 },
];
function App() {
  const setColorByCount = (count) => {
    if (count === 0) return "#EBF5FF";
    if (count > 1000) return "#0000FF";
    if (count > 800) return "#5050FF";
    if (count > 600) return "#0064CD";
    if (count > 400) return "#288CD2";
    if (count > 200) return "#3CA0E1";
    if (count > 100) return "#50B4F5";
    if (count > 50) return "#5AD2FF";
    if (count > 5) return "#BEEFFF";
    else return "#EBF5FF";
  };
  return (
    <SimpleSouthKoreaMapChart setColorByCount={setColorByCount} data={data} />
  );
}
export default App;
