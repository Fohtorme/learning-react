import React, { Component } from "react";

class TableHeader extends Component {
  state = {};

  raiseSort = path => {
    if (path == null) {
      return;
    }
    let order = "asc";
    if (path === this.props.sort.path && this.props.sort.order === "asc") {
      order = "desc";
    }

    this.props.onSort({ path, order });
  };

  renderSortIcon = column => {
    const { sort } = this.props;
    if (column.path === sort.path) {
      return (
        <React.Fragment>
          {"  "}
          <i
            className={`fa fa-sort-${sort.order === "asc" ? "asc" : "desc"}`}
          />
        </React.Fragment>
      );
    }
  };

  render() {
    const { columns } = this.props;
    return (
      <thead>
        <tr>
          {columns.map(column => (
            <th
              key={column.path || column.key}
              onClick={() => this.raiseSort(column.path)}
            >
              {column.label}
              {this.renderSortIcon(column)}
            </th>
          ))}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
