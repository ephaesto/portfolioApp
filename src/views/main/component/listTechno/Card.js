import React from 'react'
import ListLink from "./listLink"

const Card = ({listTechno,classCard}) => (
  <div className="row justify-content-center">
    {
      listTechno.map((techno) => {
        return (
          <div className={`contentMyCard ${classCard}`}  key={techno.id}>
            <div className="myCard flexCenter" >
              <div className="part1">
                <img src={`./img/${techno.img}`} alt={techno.altImg}/>
              </div>
              <div className="part2 flexCenter">
                <h2>{techno.name}</h2>
                <p><strong>{techno.level}</strong></p>
                <p>{techno.exemple}</p>
                {techno.listLink !== null ? <ListLink listLinks={techno.listLink}/> : ""}
              </div>
            </div>
          </div>
      )
      })
    }

  </div>
)

export default Card
