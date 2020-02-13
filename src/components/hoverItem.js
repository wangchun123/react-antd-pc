import React, { useState, Fragment } from "react";
import {
  Card,
  Button,
  Dropdown,
  Icon,
  Balloon,
  Menu,
  Input
} from "@alifd/next";

const HoverItem = ({ item, index, saveSonEditValue }) => {
  const [showIcon, setShowIcon] = useState(false);
  const [showAction, setShowAction] = useState(false);
  const [value, setValue] = useState();

  const confirm = () => {

    if (!value) return;
    saveSonEditValue &&
      saveSonEditValue(index, { title: value, className: "addItem" });
    setShowAction(false);
  };

  const dealDelete = () => {

    saveSonEditValue && saveSonEditValue(index);
    setShowAction(false);
  };

  return (
    <Fragment>
      <div className="content">
        <div
          className={item.className}
          onMouseEnter={() => setShowIcon(true)}
          onMouseLeave={() => setShowIcon(false)}
        >
          {showIcon && (
            <div className="icon">
              <Dropdown
                trigger={<Icon type="arrow-down" className="dealIcon" />}
              >
                {
                  <div>
                    <Button onClick={() => setShowAction(true)}>新增</Button>
                    <br />
                    {item.className === "addItem" && (
                      <Button onClick={() => dealDelete()}>删除</Button>
                    )}
                  </div>
                }
              </Dropdown>
            </div>
          )}
          <div className="left">{item.title}</div>
          <div className="right">{item.description}</div>
        </div>
        {showAction && (
          <div className="showAction">
            <Input
              style={{ width: "300px", marginLeft: "10px" }}
              onChange={val => setValue(val)}
            />
            <Button
              onClick={() => setShowAction(false)}
              style={{ marginLeft: "5px" }}
            >
              取消
            </Button>
            <Button
              type="primary"
              style={{ marginLeft: "5px" }}
              onClick={() => confirm()}
            >
              确定
            </Button>
          </div>
        )}
      </div>
    </Fragment>
  );
};
export default HoverItem;
