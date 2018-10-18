import React from 'react'
import { Link } from 'react-router-dom'

const listLink = ({listLinks}) => (
  <React.Fragment>
    {
       listLinks.map((myLink) => {
        return (
         <Link to={`/creation/${myLink.id}`} key={myLink.id} className={myLink.name}>voir le projet {myLink.name}</Link>
      )
    })

    }
  </React.Fragment>

)

export default listLink
