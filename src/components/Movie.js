import React from "react";
import PropTypes from "prop-types";
import "./Movie.css";
import { NavLink, useLocation } from "react-router-dom";

function MovieLink({ to, title, ...props }) {
  return (
    <NavLink to={to} {...props}>
      {title}: URL: /movies/about/"id"
    </NavLink>
  );
}

function Movie({ id, year, title, summary, poster, genres, dataObject }) {
  console.log("dataObject", dataObject);
  return (
    <div className="movie">
      <img src={poster} className="movie_cover" alt={title} title={title} />
      <div className="movie_data">
        <h3 className="movie_title">
          <MovieLink
            to={`/about/${id}&"id2`}
            state={{ dataObject }}
            style={({ isActive }) => {
              return {
                display: "block",
                margin: "1rem 0",
                textDecoration: "none",
                color: isActive ? "blue" : "",
              };
            }}
            title={title}
          />
        </h3>
        <h3 className="movie_title">
          <NavLink
            to={`/movies/about?idMovie=${id}&idMovie="second"`}
            state={{ fromNotifications: true }}
          >
            {title}: URL: /movies/about?id="id"
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
