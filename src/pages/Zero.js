import React from "react";
import MSenior from "../components/Zero/MSenior";
import BSenior from "../components/Zero/BSenior";
import MCompany from "../components/Zero/MCompany";
import BCompany from "../components/Zero/BCompany";

const Zero = () => {
  return (
    <div>
      <div>
        <MSenior />
        <BSenior />
      </div>
      <div>
        <MCompany />
        <BCompany />
      </div>
    </div>
  );
};

export default Zero;
