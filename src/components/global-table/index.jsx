import React from "react";
import { Table } from "@alifd/next";

export default ({ dataSource = [], columns = [], ...rest }) => {
  return (
    <Table dataSource={dataSource} {...rest}>
      {columns.map((item, index) => {
        return <Table.Column key={index} {...item} />;
      })}
    </Table>
  );
};
