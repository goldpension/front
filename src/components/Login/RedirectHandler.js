import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Axios } from "../../api/axios";
import Spinner from "./Spinner";

const RedirectHandler = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      // 코드를 백엔드로 전송하는 로직
      Axios.post("/accounts/kakao/callback/", { code })
        .then((response) => {
          // 성공적으로 백엔드와 통신한 경우 처리 로직
          console.log("백엔드 응답:", response.data);
          // navigate를 사용하여 적절한 라우팅 처리
          navigate("/success"); // 예시: 성공 페이지로 이동
        })
        .catch((error) => {
          // 에러 처리 로직
          console.error("에러 발생:", error);
          // navigate를 사용하여 에러 페이지로 이동하거나 다른 처리를 할 수 있음
          navigate("/error"); // 예시: 에러 페이지로 이동
        });
    }
  }, [code, navigate]);

  return <Spinner />;
};

export default RedirectHandler;
