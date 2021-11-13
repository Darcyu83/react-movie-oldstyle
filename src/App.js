import axios from "axios";
import React from "react";
import Movie from "./components/Movie";
import "./App.css";

class App extends React.Component {
  state = { isLoading: true, movies: [] };

  componentDidMount() {
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
    console.log(movies);
  };

  renderMovie(props, index) {
    console.log("index", index);
    return (
      <Movie
        key={props.index}
        id={props.id}
        year={props.year}
        title={props.title}
        summary={props.summary}
        poster={props.medium_cover_image}
        genres={props.genres}
      />
    );
  }
  render() {
    const { isLoading, movies } = this.state;
    return (
      <section className="container">
        {isLoading ? (
          <div className="loader">
            <span className="loader_text">Lodaing...</span>
          </div>
        ) : (
          <div className="movies">{movies.map(this.renderMovie)}</div>
        )}
      </section>
    );
  }
}
export default App;
