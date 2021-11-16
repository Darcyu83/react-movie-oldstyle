import { Component } from "react";

class Details extends Component {
  state = { isLoading: true, movieInfo: {} };

  componentDidMount() {
    this.setState({ movieInfo: this.props.dataObject });
    this.setState({ isLoading: false });
  }

  goback = () => {
    window.history.back();
  };

  render() {
    const { isLoading, movieInfo } = this.state;
    console.log(
      "movieInfo.background_image",
      `"${movieInfo.background_image}"`
    );

    return (
      <div sytle={{ width: "95%" }}>
        <button
          style={{ position: "absolute", right: "30px" }}
          onClick={this.goback}
        >
          목록
        </button>
        <main
          style={{
            display: "flex",
          }}
        >
          <img src={movieInfo.large_cover_image} style={{ padding: "20px" }} />
          <div>
            <h1>{movieInfo.title}</h1>
            <ul className="genres">
              {isLoading ? (
                <h2>loading...</h2>
              ) : (
                movieInfo.genres.map((genre, index) => {
                  return <li key={index}>{genre}</li>;
                })
              )}
            </ul>
            <p>{movieInfo.description_full}</p>
            <p>
              Released:{" "}
              <span style={{ fontWeight: "bold" }}> {movieInfo.year} </span>
            </p>
            <p>
              Rating:{" "}
              <span style={{ fontWeight: "bold" }}>{movieInfo.rating} </span>
            </p>
          </div>
        </main>
      </div>
    );
  }
}

export default Details;
