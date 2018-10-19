import React from 'react'
import { Link } from 'react-router-dom'

const listLink = ({listLinks}) => (
  <div className="containerListLink bgwhit">
    {
       listLinks.map((myLink) => {
        return (
         <Link to={`/creation/${myLink.id}`} key={myLink.id} className={`btn btn-primary ${myLink.name}`}>Voir le projet {myLink.name}</Link>
      )
    })

    }
  </div>

)

export default listLink
