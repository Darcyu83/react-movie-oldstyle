import React from "react";
import PropTypes from "prop-types";

function Food({ name, image, rating }) {
  return (
    <div>
      <h3>{name}</h3>
      <h4>{rating}/5</h4>
      <img
        src={image}
        style={{ width: "200px", height: "200px" }}
        alter={name}
      />
    </div>
  );
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  image: PropTypes.string,
  rating: PropTypes.number,
};

function renderFood(dish) {
  console.log(dish);
  return (
    <Food
      key={dish.id}
      name={dish.name}
      image={dish.image}
      rating={dish.rating}
    />
  );
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image:
      "https://cdn.pixabay.com/photo/2014/01/09/10/14/kimchi-fried-rice-241051_960_720.jpg",
    rating: 4.3,
  },
  {
    id: 2,
    name: "bibimbab",
    image:
      "https://cdn.pixabay.com/photo/2020/02/28/12/40/bibimbap-4887394_960_720.jpg",
    rating: 3.9,
  },
  {
    id: 3,
    name: "jeon",
    image:
      "https://cdn.pixabay.com/photo/2016/04/22/18/36/kimchi-pizza-1346285_960_720.jpg",
    rating: 5.0,
  },
];
function App() {
  return (
    <div>
      <h1>Hello</h1>
      {foodILike.map(renderFood)}
    </div>
  );
}

export default App;
