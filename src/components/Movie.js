import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { Link } from "react-router-dom";

function Movie({ id, year, title, summary, poster, genres, dataObject }) {
  return (
    <div className="movie">
      <img src={poster} className="movie_cover" alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">
          <Link to={`/movies/about/${id}`}>{title}</Link>
        </h3>
        <h5 className="movie_year">{year}</h5>
        <ul className="genres">
          {genres.map((genre, index) => (
            <li key={index}>{genre}</li>
          ))}
        </ul>
        <p className="movie_summary">{summary.slice(0, 235)}...</p>
      </div>
    </div>
  );
}

Movie.propTypes = {
  id: PropTypes.number.isRequired,
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default Movie;
