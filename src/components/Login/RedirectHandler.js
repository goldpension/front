import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import Spinner from "./Spinner";

const KakaoRedirectionHandler = () => {
  const code = window.location.search;
  const navigate = useNavigate();

  useEffect(() => {
    console.log(process.env.REACT_APP_URL);
    axios
      .post("http://localhost:8000/accounts/kakao/callback/") // 수정된 부분: URL에 'http://' 추가
      .then((r) => {
        console.log(r.data);

        // 토큰을 받아서 localStorage같은 곳에 저장하는 코드를 여기에 쓴다.
        localStorage.setItem("name", r.data.user_name); // 일단 이름만 저장했다.

        navigate("/loginSuccess");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  return <Spinner />;
};

export default KakaoRedirectionHandler;
