# 황금연금 Gold Pension

<div align="center">
<img width="300" alt="image" src="./src/img/rec_logo.png">
</div>

황금연금은 시니어를 위한 안전하고 보장된 일자리를 제공하는 웹서비스입니다.

이 깃허브 주소는 황금연금의 **프론트엔드** 부분을 내포하고 있습니다.

## 배포 주소

> https://front-phi-one.vercel.app

## 멤버 소개

<img width="500px" src="https://github.com/goldpension/front/assets/70899438/4cce47c1-3de6-44ab-b640-18c8d583b477" />

## 프로젝트 소개

> **시니어 구인구직 웹서비스** <br/> **개발기간: 2023.07 ~ 2023.08**

황금연금은 시니어를 위한 안전하고 보장된 일자리를 제공하는 웹서비스입니다. 기존에 존재하는 구인구직 플랫폼은 시니어들이 사용하기에 불편한 점이 많이 존재합니다. 따라서 노인 친화적인 UX/UI를 도입하고, 기능의 복잡성을 단순화하여 시니어를 위한 채용공고 웹서비스를 제작하였습니다. 한국노인인력개발원에서 제공하는 일자리를 비롯하여 서비스 자체적으로 기업과 파트너를 맺어 더욱 신뢰할 수 있는 일자리를 제공합니다.

#### Golden Pension is a web service that provides secure and guaranteed employment opportunities for seniors.

Existing job platform services often have many inconveniences for seniors to use. Therefore, we have adopted senior-friendly UX/UI and simplified the complexity of functions to create a job posting web service for seniors. We provide trustworthy job opportunities not only from the Korean Senior Workforce Development Institute but also through partnerships with companies within our own service.

## 설치 방법

### Requirements

For building and running the application you need:

- [Node.js 16.17.0](https://nodejs.org/ca/blog/release/v16.17.0/)
- [Npm 9.6.4](https://www.npmjs.com/package/npm/v/9.6.4)

### Installation

```bash
$ git clone https://github.com/goldpension/front.git
$ cd front
$ npm install
$ npm start
```

## 기술 스택

### Environment

![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)

### Development

![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=black)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![React Query](https://img.shields.io/badge/Reactquery-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![Recoil](https://img.shields.io/badge/Recoil-3578E5?style=for-the-badge&logo=Recoil&logoColor=white)

### Communication

![Slack](https://img.shields.io/badge/Slack-4A154B?style=for-the-badge&logo=Slack&logoColor=white)
![Notion](https://img.shields.io/badge/Notion-000000?style=for-the-badge&logo=Notion&logoColor=white)
![GoogleMeet](https://img.shields.io/badge/GoogleMeet-00897B?style=for-the-badge&logo=Google%20Meet&logoColor=white)

---

## 주요 페이지

|                                                     첫 페이지                                                      |                                               일반 일자리 - 지역선택                                               |
| :----------------------------------------------------------------------------------------------------------------: | :----------------------------------------------------------------------------------------------------------------: |
| <img width="329" src="https://github.com/goldpension/front/assets/70899438/b50b659d-6bdc-4000-a6cf-e25647d3caf5"/> | <img width="329" src="https://github.com/goldpension/front/assets/70899438/8c7df4ff-2f3b-4af6-857e-18fd1c8a5e69"/> |
|                                               일반 일자리 - 지역상세                                               |                                                   검증된 일자리                                                    |
| <img width="329" src="https://github.com/goldpension/front/assets/70899438/4866c9df-ecc9-452d-8ee9-fa4007e1adef"/> | <img width="329" src="https://github.com/goldpension/front/assets/70899438/e00cf2e8-bc98-4106-8019-6fd12f5abbc3"/> |

---

## 주요 기능

### ⭐️ 일반 일자리 찾기

- 한국노인인력개발원에서 제공하는 일자리 제공
- 카카오맵 api를 이용하여 지도에서 위치와 함께 볼 수 있음

### ⭐️ 검증된 일자리 찾기

- 황금연금 파트너사의 일자리 제공

### ⭐️ 파트너사 지원하기

- 기업 회원은 파트너사를 신청하여 채용공고를 올릴 수 있음

### ⭐️ 지원한 일자리 확인하기

- 비회원은 전화번호와 이름을 이용하여 확인 가능

---

## 아키텍쳐

### 디렉토리 구조

```bash
front
├── README.md
├── package-lock.json
├── package.json
├── public
└── src
    ├── api
    ├── components
    ├── css
    ├── img
    ├── json
    ├── pages
    ├── recoil
    ├── App.js
    └── index.js
```
