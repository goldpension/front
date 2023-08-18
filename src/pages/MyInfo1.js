import React from "react";
import InfoMent from "../components/Info/IMent";
import Account from "../components/Info/Account";
import { useRecoilState } from "recoil";
import userState from "../recoil/userState";

const MyInfo1 = () => {
  const [loggedInUser, setLoggedInUser] = useRecoilState(userState);
  return (
    <div>
      <InfoMent />
      <Account userEmail={loggedInUser.email} />
    </div>
  );
};

export default MyInfo1;
