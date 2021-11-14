import React from "react";
import { useParams } from "react-router-dom";

function About() {
  const { movieId } = useParams();
  console.log(movieId);
  return (
    <div>
      <h3>Detail About </h3>
      <h4>movieId : {movieId}</h4>
    </div>
  );
}

export default About;
