import React from "react";

const TableBody = props => {
  const { columns, items } = props;
  return (
    <tbody>
      {items.map(item => (
        <tr key={item.id}>
          {columns.map(column => (
            <td key={item.id + (column.path || column.key)}>
              {item[column.path] || column.content(item)}
            </td>
          ))}
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
