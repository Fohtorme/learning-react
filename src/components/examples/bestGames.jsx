import React, { Component } from "react";
import { getGames } from "../fixedData/games";
import PaginationControl from "../general/paginationControl";
import { paginate } from "../general/paginate";
import FilterList from "../general/filterList";
import _ from "lodash";
import TableHeader from "../general/tableHeader";
import TableBody from "../general/tableBody";

class BestGames extends Component {
  state = {
    games: [],
    currentPage: 1,
    pageSize: 5,
    currentFilter: null,
    sort: {
      path: "",
      order: ""
    }
  };

  componentDidMount() {
    const games = getGames();
    this.setState({ games });
  }

  handleDeleteGame = game => {
    const games = this.state.games.filter(i => i.id !== game.id);
    this.setState({ games });
  };

  handlePageChange = page => {
    this.setState({ currentPage: page });
  };

  handleFilter = filter => {
    this.setState({ currentFilter: filter });
  };

  handleSort = sort => {
    this.setState({ sort });
  };

  render() {
    const columns = [
      { path: "id", label: "ID" },
      { path: "title", label: "Title" },
      { path: "theme", label: "Theme" },
      { path: "rate", label: "Rate" },
      {
        key: "delete",
        label: "Delete",
        content: item => (
          <button
            className="btn btn-danger"
            onClick={() => this.handleDeleteGame(item)}
          >
            X
          </button>
        )
      }
    ];

    const {
      games: allGames,
      currentPage,
      pageSize,
      currentFilter,
      sort
    } = this.state;

    const filteredGames =
      currentFilter === null
        ? allGames
        : allGames.filter(game => game.theme === currentFilter);

    const sortedGames = _.orderBy(filteredGames, [sort.path], [sort.order]);

    const games = paginate(sortedGames, currentPage, pageSize);

    return (
      <main className="container">
        <table className="table">
          <TableHeader columns={columns} sort={sort} onSort={this.handleSort} />
          <TableBody columns={columns} items={games} />
        </table>
        <PaginationControl
          listSize={filteredGames.length}
          pageSize={pageSize}
          currentPage={currentPage}
          onPageChange={this.handlePageChange}
        />
        <FilterList
          items={allGames}
          filteredField="theme"
          currentFilter={currentFilter}
          onFilter={this.handleFilter}
        />
      </main>
    );
  }
}

export default BestGames;
