import React, { Component } from "react";
import TableHeader from "./tableHeader";
import TableBody from "./tableBody";

const Table = props => {
  const { columns, sort, onSort, items } = props;
  return (
    <table className="table">
      <TableHeader columns={columns} sort={sort} onSort={onSort} />
      <TableBody columns={columns} items={items} />
    </table>
  );
};

export default Table;
