// userState.js
import { atom } from "recoil";

const userState = atom({
  key: "userState",
  default: {
    isLoggedIn: false,
    userName: null,
    email: null,
  },
});

export default userState;
