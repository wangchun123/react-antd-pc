import React, { useContext, useEffect, useState } from "react";
import Context from "../context";

export default () => {
  const data = useContext(Context);
  const [obj, setObj] = useState(data);

  useEffect(() => {
    setObj(data);
  }, [data]);

  return (
    <div>
      名字-->{obj.name}
      <br />
      年龄-->{obj.age}
    </div>
  );
};
