// userState.js
import { atom } from "recoil";

const companyState = atom({
  key: "companyState",
  default: {
    isLoggedIn: false,
    userName: null,
    email: null,
  },
});

export default companyState;
