import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";
import { useRecoilState } from "recoil";
import seniorState from "../../recoil/seniorState";
// 중복 콘솔 출력을 해결 코드
// 백에서 토큰 받아옴
const RedirectHandler = () => {
  const [code, setCode] = useState(null);
  const [prevCode, setPrevCode] = useState(null);
  const [loggedInUser, setLoggedInUser] = useRecoilState(seniorState);
  const navigate = useNavigate();
  useEffect(() => {
    if (code && code !== prevCode) {
      const url = "http://220.67.126.26:8000/accounts/kakao/callback/";
      console.log("요청 URL:", `${url}?code=${code}`);
      axios
        .get(url, {
          params: { code },
        })
        .then((response) => {
          console.log("백엔드 응답:", response);
          setLoggedInUser({
            isLoggedIn: true,
            userName: response.data.name,
            email: response.data.email,
          });
          navigate("/loginSuccess");
        })
        .catch((error) => {
          console.error("에러 발생:", error);
          navigate("/error");
        });
      setPrevCode(code);
    }
  }, [code, navigate, prevCode]);
  useEffect(() => {
    const newCode = new URL(window.location.href).searchParams.get("code");
    if (newCode) {
      setCode(newCode);
    }
  }, []);
  return <Spinner />;
};
export default RedirectHandler;
