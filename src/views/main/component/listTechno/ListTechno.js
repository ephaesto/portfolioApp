import React from 'react'
import Card from "./Card"

const ListTechno = ({
  classSection,
  classContainer,
  classTitle,
  classCard,
  title,
  listTechno
}) => (
  <section className={classSection}>
    <div className={classTitle}>
      <h2>{title}</h2>
    </div>
    <div className={classContainer}>
      <Card listTechno={listTechno} classCard={classCard} />
    </div>
  </section>
)

export default ListTechno
