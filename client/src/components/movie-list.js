import React from "react";
import MovieItem from "./movie-item";
import "../styles/movie-list.css";

function MovieList(props) {
  return (
    <div className="movie-list">
      {props.list.map((movie, key) => (
        <MovieItem
          title={movie.Title}
          year={movie.Year}
          poster={movie.Poster}
          key={key}
        />
      ))}
    </div>
  );
}

export default MovieList;
