import React from "react";
import "../styles/Search.css";

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.props.onQueryChange(e.target.value);
  }

  render() {
    const query = this.props.query;
    return (
        <input
          type="text"
          value={query}
          id="searchbar"
          placeholder="Search for a movie title here..."
          onChange={this.handleChange}
        />
    );
  }
}

export default Search;
