import React, { useState, useEffect } from "react";
import { Table } from "@alifd/next";
import { cloneDeep } from "lodash";

const dataSource = () => {
  const result = [];
  for (let i = 0; i < 5; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      key: 100306660940 + i,
      id: 100306660940 + i,
      time: 2000 + i
    });
  }
  return result;
};

const EditTable = () => {
  const [openRowKeys, setOpenRowKeys] = useState([]);
  const [data, setData] = useState();

  const handelEdit = (value, index, record) => {
    const { id, showButton } = record;
    const newData = cloneDeep(data);
    const newOpenRowKeys = cloneDeep(openRowKeys);
    
    if (newData[index / 2].showButton) {
      //收起状态
      newOpenRowKeys.splice(openRowKeys.indexOf(id), 1);
    } else {
      //展开状态
      newOpenRowKeys.push(id);
    }

    setOpenRowKeys(newOpenRowKeys);

    //控制button文案；
    newData[index / 2].showButton = !showButton;
    setData(newData);
  };

  const fetchData = () => {
    const data = dataSource().map(item => ({ ...item, showButton: false }));
    setTimeout(() => {
      setData(data);
    }, 200);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Table
      dataSource={data}
      openRowKeys={openRowKeys}
      hasExpandedRowCtrl={false}
      expandedRowRender={() => "123"}
    >
      <Table.Column title="Id" dataIndex="id" />
      <Table.Column title="Title" dataIndex="title.name" />
      <Table.Column title="Time" dataIndex="time" />
      <Table.Column
        cell={(value, index, record) => (
          <a onClick={() => handelEdit(value, index, record)}>
            {!record.showButton ? "展开" : "收起"}
          </a>
        )}
      />
    </Table>
  );
};

export default EditTable;
