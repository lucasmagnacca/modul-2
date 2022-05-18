import React from 'react';
import styles from './buscar.module.css';
export default function SearchBar(props) {
  // acá va tu código
  return <div className={styles.con}>
    <input className={styles.inp} type="text" placeholder='Ciudad...' />
    <button className={styles.bot} onClick={() =>props.onSearch("Buscado Ciudad...")}>Agregar</button>
  </div>
};