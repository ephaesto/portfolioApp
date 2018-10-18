import React from 'react'
import Card from "./Card"

const ListTechno = ({
  classSection,
  classContainer,
  classTitle,
  title,
  listTechno
}) => (
  <section className={classSection}>
    <div className="container">
      <div className="containerTitle">
        <h1>{title}</h1>
      </div>
      <Card listTechno={listTechno} />
    </div>
  </section>
)

export default ListTechno
