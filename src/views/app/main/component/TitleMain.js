import React from 'react';

const TitleMain = ({title,page,subtitle=null}) => (
  <section className={`title ${page}`}>
    <h1>{title}</h1>
    {subtitle ? <p>{subtitle}</p> : ""}
  </section>
);

export default TitleMain;
