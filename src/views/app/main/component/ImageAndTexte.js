import React from 'react'
import { Link } from 'react-router-dom'

const ImageAndTexte = ({
  classSection="",
  classContainer="",
  classRow="",
  classImg="",
  classText="",
  classLink="",
  img,
  altImg,
  title,
  text=null,
  link=null,
  textLink="connexion",
}) => (
  <section className={classSection}>
    <div className={classContainer}>
      <div className={classRow}>
        <div className={classImg}>
          <img src={img} alt={altImg}/>
        </div>
        <div className={classText}>
          <h2>{title}</h2>
          {text ? <p>{text}</p> : ""}
          {link ? <Link to={link} className={classLink}>{textLink}</Link> : ""}
        </div>
      </div>
    </div>
  </section>
)

export default ImageAndTexte
