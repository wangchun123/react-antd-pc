import React from "react";
import { Pagination, Message } from "@alifd/next";
import SearchForm from "@/components/search-form";
import GlobalTable from "@/components/global-table";

const formItem = [
  {
    type: "Input",
    label: "中国红你好啊:",
    required: true,
    labelspan: 5,
    // span: 8,
    nodeProps: {
      placeholder: "123",
      name: "xiaoyu",
      onChange: (val) => {
        alert(val);
      },
    },
  },
  {
    type: "Select",
    label: "bhao :",
    required: true,
    // span: 6,
    nodeProps: {
      placeholder: "123",
      name: "1",
      dataSource: [{ label: "nihao", value: 1 }],
      defaultValue: 1,
    },
  },
  {
    type: "Rating",
    label: "bhao :",
    required: true,
    // span: 6,
    nodeProps: { placeholder: "123", name: "2" },
  },
  {
    type: "Switch",
    label: "bhao :",
    required: true,
    // span: 8,
    nodeProps: { placeholder: "123", name: "3" },
  },
  {
    type: "NumberPicker",
    label: "bhao :",
    required: true,
    // span: 8,
    nodeProps: { placeholder: "123", name: "4" },
  },
  {
    type: "DatePicker",
    label: "bhao :",
    required: true,
    // span: 8,
    nodeProps: { placeholder: "123", name: "5" },
  },
  {
    type: "Radio",
    label: "bhao :",
    required: true,
    // span: 8,
    nodeProps: { placeholder: "123", name: "6" },
  },
  {
    type: "Checkbox",
    label: "bhao :",
    required: true,
    // span: 8,
    nodeProps: { placeholder: "123", name: "7" },
  },
];

export default () => {
  const columns = [
    {
      title: "123",
      dataIndex: "id",
      width: 100,
      cell: (value, index, record) => value,
    },
    {
      title: "123",
      dataIndex: "some",
      width: 100,
      cell: (value, index, record) => value,
    },
  ];

  const searchSubmit = (value) => {
    console.log("父组建value：", value);
    Message.success("成功");
  };

  return (
    <div>
      <SearchForm
        dataSource={formItem}
        searchSubmit={searchSubmit}
        fromValue={{ xiaoyu: 1 }}
        isTableSearch={false}
        labelLayout={false}
      />
      <GlobalTable
        dataSource={[{ id: 1, some: "qwe" }]}
        columns={columns}
        hasBorder={false}
      />
      <Pagination
        defaultCurrent={2}
        onChange={() => console.log()}
        total={10}
      />
    </div>
  );
};
