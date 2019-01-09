import React, { Component } from "react";

class FilterList extends Component {
  state = {};

  loadFilters = (items, filteredField) => {
    const filterArray = items.map(item => item[filteredField]);
    return Array.from(new Set(filterArray));
  };

  render() {
    const { items, filteredField, currentFilter, onFilter } = this.props;
    const filters = this.loadFilters(items, filteredField);

    return (
      <div>
        <ul className="list-group">
          <li
            className={
              currentFilter === null
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => onFilter(null)}
          >
            No filter
          </li>
          {filters.map(filter => (
            <li
              className={
                currentFilter === filter
                  ? "list-group-item active"
                  : "list-group-item"
              }
              onClick={() => onFilter(filter)}
              key={filter}
            >
              {filter}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default FilterList;
