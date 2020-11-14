import React from "react";
import useInputs from "./Useinputs";

const Info = () => {
  const [state, dispatch] = useInputs({
    name: "",
    nickname: "",
  });

  const { name, nickname } = state;
  const onChange = (e) => {
    dispatch(e.target);
  };

  return (
    <div>
      <div>
        <input name="name" onChange={onChange} />
        <input name="nickname" onChange={onChange} />
      </div>
      <div>
        <b>이름:</b>
        {name}
      </div>
      <div>
        <b>닉네임:</b>
        {nickname}
      </div>
    </div>
  );
};

export default Info;
