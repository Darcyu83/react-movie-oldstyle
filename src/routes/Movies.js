import axios from "axios";
import React from "react";
import Movie from "../components/Movie";
import "./Movies.css";
import { Link, Outlet, useSearchParams } from "react-router-dom";

class Home extends React.Component {
  state = { isLoading: true, movies: [] };

  componentDidMount() {
    console.log(this.state.movies.length !== 0);
    console.log(this.state.movies.length === undefined);
    if (this.state.movies.length !== 0 || this.state.movies === undefined) {
      this.setState({ isLoading: false });
      return;
    }

    this.getMovies();
  }

  getMovies = async () => {
    const {
      data: {
        data: { movies },
      },
    } = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    this.setState({ movies });
    this.setState({ isLoading: false });
  };

  renderMovie(props, index) {
    return (
      <Movie
        key={index}
        id={props.id}
        year={props.year}
        title={props.title}
        summary={props.summary}
        poster={props.medium_cover_image}
        genres={props.genres}
        dataObject={props}
      />
    );
  }
  render() {
    const { isLoading, movies } = this.state;

    return (
      <div>
        <header>
          <h1 style={{ fontWeight: "bold", textDecoration: "underline" }}>
            Movie Home
          </h1>
        </header>
        <Outlet />
        <section className="container">
          {isLoading ? (
            <div className="loader">
              <span className="loader_text">Lodaing...</span>
            </div>
          ) : (
            <div className="movies">{movies.map(this.renderMovie)}</div>
          )}
        </section>
      </div>
    );
  }
}
export default Home;
