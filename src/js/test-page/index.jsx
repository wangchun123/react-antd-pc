import React from "react";
import GlobalTable from "@/components/global-table";

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
  return (
    <div>
      <GlobalTable
        dataSource={[{ id: 1, some: "qwe" }]}
        columns={columns}
        hasBorder={false}
      />
    </div>
  );
};
