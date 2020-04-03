import React from "react";
import "./styles/App.css";
import Search from "./components/Search";
import MovieList from "./components/movie-list";

class App extends React.Component {
  constructor() {
    super();
    this.state = { query: "", movie_list: [] };
    this.handleQueryChange = this.handleQueryChange.bind(this);
  }

  handleQueryChange = async new_query => {
    this.setState({ query: new_query });
    if (new_query === "") {
      return;
    }

    let movie_list = await fetch(`/api/${encodeURI(new_query)}`);
    movie_list = await movie_list.json();
    if (movie_list.Response === "True") {
      this.setState({ movie_list: movie_list.Search });
    }
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>IMDB Search</h1>
          <Search
            query={this.state.query}
            onQueryChange={this.handleQueryChange}
          />
        </header>
        <MovieList list={this.state.movie_list} />
      </div>
    );
  }
}

export default App;
