import React from 'react';

export default function Card(props) {
  // acá va tu código
  return (
  <div>
    <button onClick={props.onClose}>X</button>
    <h1>{props.name}</h1>
    <p>min</p>
    <p>{props.min}</p>
    <p>max</p>
    <p>{props.max}</p>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="no se cargo la img" />
    </div>
    )
};