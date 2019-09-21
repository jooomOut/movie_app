import React from 'react';
import PropTypes from "prop-types";

function Food({name, picture, rating}){  /* props.fav == {fav} */
  return <div>{name}, {picture}, {rating} </div>
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string.isRequired,
  rating: PropTypes.number.isRequired
}

const foodILike = [
  {
    id: 1,
    name: "kimchi",
    image: "no",
    rating: 5
  },
  {
    id: 2,
    name: "chchch",
    image: "bobobo",
    rating:4.9
  }
]
function App() {
  return ( 
  <div>
  {foodILike.map(dish => (
    <Food key= {dish.id} name = {dish.name} picture = {dish.image} rating = {dish.rating}/>
  ))}
  </div>
   ) /*return하고 줄 바꾸면 외않됨?*/
}

export default App;
