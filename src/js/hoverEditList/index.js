import React, { Fragment, useState, useEffect } from "react";
import {
  Card,
  Button,
  Dropdown,
  Icon,
  Balloon,
  Notification
} from "@alifd/next";
import { cloneDeep } from "lodash";
import HoverItem from "./components/hoverItem";
import "../../css/hoverEditLits.scss";
import { hoverEditListData } from "../../util/const";

const HoverEditList = () => {
  const [hoverData, setHoverData] = useState([]);

  const fetchData = () => {
    const data = hoverEditListData.map((item, index) => ({
      ...item,
      key: index,
      showIcon: false,
      className: "box"
    }));
    setTimeout(() => {
      setHoverData(data);
    }, 200);
  };

  const saveSonEditValue = (index, val) => {
    const newHoverData = cloneDeep(hoverData);
    if (val) {
      newHoverData.splice(index + 1, 0, val);
    } else {
      newHoverData.splice(index, 1);
      Notification.success({ title: "删除成功" });
    }
    setHoverData(newHoverData);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Card title="title" contentHeight={"100%"}>
      {hoverData.map((item, index) => {
        return (
          <HoverItem
            key={index}
            item={item}
            index={index}
            saveSonEditValue={saveSonEditValue}
          />
        );
      })}
    </Card>
  );
};
export default HoverEditList;
