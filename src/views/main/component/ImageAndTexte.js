import React from 'react'
import { Link } from 'react-router-dom'

const ImageAndTexte = ({
  classSection="",
  classRow="",
  classImg="",
  classTexte="",
  classLink="",
  img,
  altImg,
  title,
  text=null,
  link=null,
  textLink="connexion",
}) => (
  <section className={classSection}>
    <div className={classRow}>
      <div className={classImg}>
        <img src={img} alt={altImg}/>
      </div>
      <div className={classTexte}>
        <h2>{title}</h2>
        {text ? <p>{text}</p> : ""}
        {link ? <Link to={link} className={classLink}>{textLink}</Link> : ""}
      </div>
    </div>
  </section>
)

export default ImageAndTexte
