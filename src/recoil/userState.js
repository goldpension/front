// userState.js
import { atom } from "recoil";

const userState = atom({
  key: "userState",
  default: {
    isLoggedIn: true,
    userName: "이예림",
    email: "hyuksu0308@naver.com",
  },
});

export default userState;
