import React, { Component } from "react";
import { getGames } from "../fixedData/games";
import PaginationControl from "../general/paginationControl";
import { paginate } from "../general/paginate";
import FilterList from "../general/filterList";

class BestGames extends Component {
  state = {
    games: [],
    currentPage: 1,
    pageSize: 5,
    currentFilter: null
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

  render() {
    const {
      games: allGames,
      currentPage,
      pageSize,
      currentFilter
    } = this.state;

    const filteredGames =
      currentFilter === null
        ? allGames
        : allGames.filter(game => game.theme === currentFilter);
    const games = paginate(filteredGames, currentPage, pageSize);
    return (
      <main className="container">
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Title</th>
              <th>Theme</th>
              <th>Rate</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {games.map(game => (
              <tr key={game.id}>
                <td>{game.id}</td>
                <td>{game.title}</td>
                <td>{game.theme}</td>
                <td>{game.rate}</td>
                <td>
                  <button
                    className="btn btn-danger"
                    onClick={() => this.handleDeleteGame(game)}
                  >
                    X
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
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
