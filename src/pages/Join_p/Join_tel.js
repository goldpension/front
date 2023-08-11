import React from "react";
import JoinMentTel from "../../components/Join_c/JMent_tel";
import styles from "../../css/Join.module.css";
import JInput from "../../components/Join_c/JInput";

const Join_tel = () => {
  return (
    <div>
      <div>
        <JoinMentTel />
      </div>

      <div>
        <JInput />
      </div>
    </div>
  );
};

export default Join_tel;
