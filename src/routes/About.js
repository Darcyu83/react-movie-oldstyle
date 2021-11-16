import React from "react";
import axios from "axios";
import Details from "../components/Details";
import { useParams, useSearchParams, useLocation } from "react-router-dom";
import { staticMoviesData } from "./Movies";
function About(props) {
  const location = useLocation();
  if (location.state) {
  }

  const { movieId, movieId2 } = useParams();
  let [params] = useSearchParams();
  let idMovie = params.get("idMovie");
  let [id1, id2] = params.getAll("idMovie");

  return <Details dataObject={location.state.dataObject} />;
}

export default About;
