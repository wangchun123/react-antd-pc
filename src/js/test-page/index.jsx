import React from "react";
import { Button } from "@alifd/next";

import TableList from "@/components/table-list";

const fetchTableData = ({ ...rest }) => {
  return { data: [{ id: 1, some: "qwe" }], total: 100 };
};

export default () => {
  const formItem = [
    {
      type: "Input",
      label: "中国红你好啊:",
      // required: true,
      labelspan: 5,
      // span: 8,
      nodeProps: {
        // placeholder: "123",
        name: "one",
        onChange: (val) => {
          // alert(val);
        },
      },
    },
    {
      type: "Select",
      label: "bhao :",
      // required: true,
      // span: 6,
      nodeProps: {
        // placeholder: "123",
        name: "two",
        dataSource: [
          { label: "nihao", value: 1 },
          { label: "qweqw", value: 2 },
        ],
        // defaultValue: 1,
        style: { width: "100%" },
      },
    },
  ];

  const columns = (load) => [
    {
      title: "栏一",
      dataIndex: "id",
      width: 100,
    },
    {
      title: "栏二",
      dataIndex: "some",
      width: 100,
      cell: (value, index, record) => value,
    },
    {
      title: "操作",
      dataIndex: "some",
      width: 100,
      cell: (value, index, record) => {
        return <Button onClick={() => load()}>删除</Button>;
      },
    },
  ];

  return (
    <div>
      <TableList
        formItem={formItem}
        columns={columns}
        fetchTableData={fetchTableData}
        // initFormData={{ two: 1, one: "112" }}
      />
    </div>
  );
};
