import React from "react";
import '../styles/movie-item.css'

function MovieItem(props) {
  return (
    <div className="movie-item">
      <h3>{props.title}</h3>
      {props.poster === "N/A" ? (
        <img
          src="/poster_placeholder.jpg"
          alt="No poster available"
        />
      ) : (
        <img src={props.poster} alt={`Poster of ${props.title}`} />
      )}
      <p>{props.year}</p>
    </div>
  );
}

export default MovieItem;
