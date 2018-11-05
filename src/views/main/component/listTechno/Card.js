import React from 'react'
import ListLink from "./ListLink"

const Card = ({listTechno,classCard}) => (
  <div className="row justify-content-center">
    {
      listTechno.map((techno) => {
        return (
          <div className={`contentMyCard ${classCard}`}  key={techno.id}>
            <div className="myCard flexCenter" >
              <div className="part1">
                <img src={require(`../../../../img/${techno.img}`)} alt={techno.imgAlt}/>
              </div>
              <div className="part2 flexCenter">
                <h3>{techno.name}</h3>
                <p><strong>{techno.level}</strong></p>
                <p>{techno.exemple}</p>
                { typeof techno.listLink !== "undefined" && techno.listLink !== null ? <ListLink listLinks={techno.listLink}/> : ""}
              </div>
            </div>
          </div>
      )
      })
    }

  </div>
)

export default Card
