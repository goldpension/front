// userState.js
import { atom } from "recoil";

const seniorState = atom({
  key: "seniorState",
  default: {
    isLoggedIn: false,
    userName: null,
    email: null,
  },
});

export default seniorState;
