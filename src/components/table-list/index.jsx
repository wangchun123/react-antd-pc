import React, { useState, useEffect } from "react";
import { Pagination, Message } from "@alifd/next";
import SearchForm from "@/components/search-form";
import GlobalTable from "@/components/global-table";

let fromValue = {};
let serachData = {};
let currents = 1;

export default ({ formItem, columns, fetchTableData, initFormData = {} }) => {
  const [loading, setLoading] = useState(false);

  const searchSubmit = async (value) => {
    fromValue = { ...fromValue, ...value };
    setLoading(true);

    serachData = await fetchTableData({
      ...fromValue,
      current: currents,
      pageSize: 10,
    });

    setTimeout(() => {
      setLoading(false);
    }, 1000);
  };

  const load = () => {
    searchSubmit({ ...fromValue, current: currents, pageSize: 10 });
  };

  const currentChange = (current) => {
    currents = current;
    searchSubmit({ ...fromValue, current: currents, pageSize: 10 });
  };

  useEffect(() => {
    fromValue = { ...fromValue, ...initFormData };
    searchSubmit({ ...fromValue, current: currents, pageSize: 10 });
  }, []);

  const { data, total } = serachData;

  return (
    <div>
      <SearchForm
        dataSource={formItem}
        searchSubmit={searchSubmit}
        fromValue={initFormData}
      />
      <GlobalTable
        dataSource={data}
        columns={columns && columns(load)}
        hasBorder={false}
        loading={loading}
      />
      <Pagination
        onChange={(e) => currentChange(e)}
        total={total}
        current={currents}
        style={{ marginTop: "10px" }}
      />
    </div>
  );
};
