/* eslint-disable no-unused-expressions */
import React, { useEffect, useState } from "react";
import { Tree } from "@alifd/next";

const formatDataSource = data => {
  return data.map(it => {
    return {
      ...it,
      key: it.value,
      children: formatDataSource(it.children || [])
    };
  });
};

const Trees = () => {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch("https://os.alipayobjects.com/rmsportal/ODDwqcDFTLAguOvWEolX.json")
      .then(response => response.json())
      .then(data => setData(formatDataSource([data[1]])))
      .catch(e => console.log(e));
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Tree
      checkable
      renderChildNodes={nodes => {
        return (
          <ul role="group" className="next-tree-child-tree custom-leaf-tree">
            {nodes}
          </ul>
        );
      }}
      defaultExpandAll
      dataSource={data}
    />
  );
};
export default Trees;
