//백엔드에서 프론트로 액세스 토큰 보내주는거
/* import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Spinner from "./Spinner";

const RedirectHandler = () => {
  //const code = window.location.search;
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    if (code) {
      const url = "http://localhost:8000/accounts/kakao/callback/";
      console.log("요청 URL:", `${url}?code=${code}`); // 요청 URL을 출력
      axios
        .get(url, {
          params: { code },
        })
        .then((response) => {
          //localStorage.setItem;
          console.log("백엔드 응답:", response.data);
          navigate("/loginSuccess");
        })
        .catch((error) => {
          console.error("에러 발생:", error);
          navigate("/error");
        });
    }
  }, [code, navigate]);

  return <Spinner />;
};

export default RedirectHandler; */

//프론트에서 액세스토큰까지 다 받아오는거
/* import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

const RedirectHandler = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  const navigate = useNavigate();

  useEffect(() => {
    console.log("인가 코드를 받았습니다:", code); // 인가 코드 확인

    if (code) {
      const apiUrl = "https://kauth.kakao.com/oauth/token";
      const clientId = "edf8f58de6f9fb90e53e2dd72452c71f";
      const clientSecret = "NTPCyiFtCARiGAU58nf2HBaybwy329xZ"; // 클라이언트 시크릿 키
      const redirectUri = "http://localhost:3000/accounts/kakao/callback/";
      const params = new URLSearchParams();
      params.append("grant_type", "authorization_code");
      params.append("client_id", clientId);
      params.append("redirect_uri", redirectUri);
      params.append("code", code);

      fetch(apiUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
          Authorization: `Basic ${btoa(`${clientId}:${clientSecret}`)}`, // 클라이언트 시크릿 키와 함께 인증 정보를 보냄
        },
        body: params,
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("카카오 API 요청 중 문제가 발생했습니다.");
          }
          return response.json();
        })
        .then((data) => {
          console.log("카카오 응답 데이터:", data);
          const accessToken = data.access_token;

          if (accessToken) {
            console.log("액세스 토큰을 받았습니다:", accessToken);
            localStorage.setItem("access_token", accessToken);
            navigate("/loginSuccess");
          } else {
            console.error("액세스 토큰을 받지 못했습니다.");
            navigate("/error");
          }
        })
        .catch((error) => {
          console.error("에러가 발생했습니다:", error.message);
          navigate("/error");
        });
    }
  }, [code, navigate]);

  return <Spinner />;
};

export default RedirectHandler; */
