import React from 'react';
import "./Strongman.css";

const Strongman = props => (
  <li>Imię: <strong>{props.name}</strong>. Nazwisko: <strong>{props.surname}</strong></li>
)

export default Strongman;