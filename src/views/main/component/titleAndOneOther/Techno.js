import React from 'react'

const Techno = ({listTechno,classCard}) => (
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
              </div>
            </div>
          </div>
      )
      })
    }

  </div>
)

export default Techno
