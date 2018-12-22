import React, { Component } from "react";

class DynamicItemList extends Component {
  state = {
    count: 3,
    items: [
      {
        id: 1,
        name: "Item 1",
        quantity: 1
      },
      {
        id: 2,
        name: "Item 2",
        quantity: 2
      },
      {
        id: 3,
        name: "Item 3",
        quantity: 3
      }
    ]
  };

  handleAddQuantity = item => {
    item.quantity++;
    this.setState({});
  };

  handleSubtractQuantity = item => {
    item.quantity--;
    this.setState({});
  };

  handleDeleteItem = item => {
    delete this.state.items[this.state.items.indexOf(item)];
    this.setState({});
  };

  handleAddItem = () => {
    const { count, items } = this.state;
    items.push({
      id: count + 1,
      name: `Item ${count + 1}`,
      quantity: 1
    });
    this.setState({ count: count + 1, items: items });
  };

  render() {
    const itemStyle = {
      fontSize: 24
    };
    return (
      <div>
        <ul>
          {this.state.items.map(item => (
            <li key={item.id}>
              <span className="badge badge-warning" style={itemStyle}>
                <span className="badge badge-danger">{item.quantity}</span>
                {"  "}
                {item.name}
              </span>
              <div className="btn-group" role="group">
                <button
                  onClick={() => this.handleAddQuantity(item)}
                  className="btn btn-primary"
                >
                  +
                </button>
                <button
                  onClick={() => this.handleSubtractQuantity(item)}
                  className="btn btn-primary"
                >
                  -
                </button>
                <button
                  onClick={() => this.handleDeleteItem(item)}
                  className="btn btn-warning"
                >
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
        <button className="btn btn-primary" onClick={this.handleAddItem}>
          Add item
        </button>
      </div>
    );
  }
}

export default DynamicItemList;
