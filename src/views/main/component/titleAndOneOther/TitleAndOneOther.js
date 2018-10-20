import React from 'react';
import Techno from "./Techno";


const TitleAndOneOther = ({
  classSection="",
  classContainer="",
  classCard="",
  title,
  text=null,
  listTechno=null,
  link=null,
  git=null,

}) => (
  <section className={classSection}>
    <div className={classContainer}>
      <h2>{title}</h2>
      {text ? <p>{text}</p> : ""}
      {listTechno ? <Techno listTechno={listTechno} classCard={classCard} /> : ""}
      {link ? <a href={link}  className={`btn btn-primary `}>Voir le site </a> : ""}
      {git ? <a href={git}  className={`btn btn-primary `}>Voir le dépot Git </a> : ""}
    </div>
  </section>
);

export default TitleAndOneOther;
