import React from 'react';
import styles from './carta.module.css';
export default function Card(props) {
  // acá va tu código
  return (
  <div className={styles.card}>
    <button className={styles.boton} onClick={props.onClose}>X</button>
    <h1>{props.name}</h1>
    <div className={styles.info}>
      <div>
    <p>MIN</p>
    <p>{props.min}</p>
    </div>
    <div>
    <p>MAX</p>
    <p>{props.max}</p>
    </div>
    <img src={`http://openweathermap.org/img/wn/${props.img}@2x.png`} alt="no se cargo la img" />
    </div>
    </div>
    )
};