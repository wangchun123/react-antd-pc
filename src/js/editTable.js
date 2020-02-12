import React from "react";
import { Table } from "@alifd/next";

const dataSource = () => {
  const result = [];
  for (let i = 0; i < 5; i++) {
    result.push({
      title: {
        name: `Quotation for 1PCS Nano ${3 + i}.0 controller compatible`
      },
      id: 100306660940 + i,
      time: 2000 + i
    });
  }
  return result;
};

const EditTable = () => {
  const handelEdit = record => {
    console.log(record);
  };

  return (
    <Table dataSource={dataSource()}>
      <Table.Column title="Id" dataIndex="id" />
      <Table.Column title="Title" dataIndex="title.name" />
      <Table.Column title="Time" dataIndex="time" />
      <Table.Column
        cell={(value, index, record) => (
          <a href="javascript:;" onClick={handelEdit(record)}>
            Remove({record.id})
          </a>
        )}
      />
    </Table>
  );
};

export default EditTable;
// const render = (value, index, record) => {
//     return ;
// };
// ReactDOM.render(, mountNode);
