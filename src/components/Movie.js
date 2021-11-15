import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { NavLink, useLocation } from "react-router-dom";

function MovieLink({ to, title, ...props }) {
  console.log(useLocation());
  return (
    <NavLink to={to} {...props}>
      타이틀 파라미터 설정 in Router:{title}
    </NavLink>
  );
}

function Movie({ id, year, title, summary, poster, genres, dataObject }) {
  return (
    <div className="movie">
      <img src={poster} className="movie_cover" alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">
          <MovieLink
            to={`/movies/about/${id}&"id2`}
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                textDecoration: "none",
                color: isActive ? "blue" : "green",
              };
            }}
            title={title}
          />
        </h3>
        <h3 className="movie_title">
          <NavLink to={`/movies/about?idMovie=${id}&idMovie="second"`}>
            타이틀 파라미터 설정 directly:{title}
          </NavLink>
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
