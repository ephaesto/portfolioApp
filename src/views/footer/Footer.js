import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => (
  <footer>
    <div className="container">
      <p > Créé par Emeric Lebbrecht © 2018 : <Link to="/mentions-legales" className= "mentionsLegales"> Mentions Légales</Link></p>
    </div>
  </footer>
)

export default Footer
