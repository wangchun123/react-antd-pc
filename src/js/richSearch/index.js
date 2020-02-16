import React, { useEffect, useState, Fragment } from "react";
import { Search, Menu, Button, Balloon } from "@alifd/next";
import { debounce } from "lodash";
import "./index.scss";
import { menuDatas } from "../../util/const";

export default () => {
  const [visible, setVisible] = useState(false);
  const [value, setValue] = useState();
  const [menuData, setMenuData] = useState([]);

  const onSearch = val => {
    console.log("val", val);
  };

  const onVisibleChange = () => {
    setVisible(false);
  };

  const onFocus = () => {
    setVisible(true);
  };

  const onSelect = (e, val) => {
    e.stopPropagation();
    setVisible(false);
    setValue(val);
  };

  const fetchOptionItem = val => {
    console.log("请求数据", val);
    setTimeout(() => {
      setMenuData(menuDatas);
    }, 200);
  };

  const onChange = val => {
    setValue(val);
    debounced(val);
  };

  const debounced = debounce(fetchOptionItem, 3000);

  const renderMenu = () => {
    return (
      <div className="menuItem">
        {menuData.map(item => {
          return showMessageItem(item);
        })}
      </div>
    );
  };

  const showMessageItem = item => {
    const topLeft = () => (
      <div
        key={item.value}
        className="popUpItem"
        onClick={e => onSelect(e, item.label)}
      >
        {item.label}
      </div>
    );
    return (
      <Balloon
        trigger={topLeft()}
        key={item.value}
        align="rb"
        alignEdge
        triggerType="hover"
        style={{ width: 300, height: 130 }}
        closable={false}
      >
        <div>小说名字:{item.title}</div>
        <div>热度:{item.hot}</div>
        <img src={item.img} style={{ width: "20%", display: "block" }} />
        <Button>详情</Button>
      </Balloon>
    );
  };

  useEffect(() => {
    fetchOptionItem();
  }, []);

  return (
    <Search
      onVisibleChange={onVisibleChange}
      popupContent={renderMenu()}
      visible={visible}
      value={value}
      onSearch={onSearch}
      onChange={onChange}
      onFocus={onFocus}
      placeholder="请输入..."
    />
  );
};
