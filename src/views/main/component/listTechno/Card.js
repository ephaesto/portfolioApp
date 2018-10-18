import React from 'react'
import ListLink from "./listLink"

const Card = ({listTechno,}) => (
  <div className="row">
    {
      listTechno.map((techno) => {
        return (
          <div className="MyCard" key={techno.id}>
            <div className="part1">
              <img src={`./img/${techno.img}`} alt={techno.altImg}/>
            </div>
            <div className="part2">
              <h1>{techno.name}</h1>
              <p>{techno.level}</p>
              <p>{techno.exemple}</p>
              {techno.listLink !== null ? <ListLink listLinks={techno.listLink}/> : ""}
            </div>
          </div>
      )
      })
    }

  </div>
)

export default Card
