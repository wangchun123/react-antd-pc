import React, { useState } from "react";
import Context from "./Components/context";
import Son from "./Components/son/index";

const data = {
  name: "小鱼",
  age: 12,
};

export default () => {
  const [changeData, setChangeData] = useState(data);

  return (
    <div>
      <Context.Provider value={changeData}>
        <Son />
      </Context.Provider>
      <button
        onClick={() =>
          setChangeData({
            name: "小鱼被修改",
            age: 12,
          })
        }
      >
        修改
      </button>
    </div>
  );
};
