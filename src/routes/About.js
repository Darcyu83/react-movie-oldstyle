import React from "react";
import { useParams, useSearchParams } from "react-router-dom";

function About() {
  const { movieId, movieId2 } = useParams();
  console.log("useParams= ", movieId);
  console.log("useParams2= ", movieId2);

  let [params] = useSearchParams();
  console.log("useSearchParams params = ", params);
  let idMovie = params.get("idMovie");
  console.log("useSearchParams= ", idMovie);

  let [id1, id2] = params.getAll("idMovie");
  console.log("useSearchParams id1= ", id1);
  console.log("useSearchParams id2= ", id2);
  return (
    <div>
      <h3>Detail About </h3>
      <h4>movieId : {movieId}</h4>
      <h4>idMovie : {idMovie}</h4>
    </div>
  );
}

export default About;
