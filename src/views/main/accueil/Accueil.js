import React, { Component } from 'react'
import TitleMain from '../component/TitleMain'
import ImageAndTexte from '../component/ImageAndTexte'
class Accueil extends Component {

  render() {
    return (
      <main>
        <TitleMain title="Emeric Lebbrecht" subtitle="Bienvenu sur mon portfolio" page='accueil' />
        <ImageAndTexte
          classSection = "presentation accueil container"
          classImg = "part1"
          classText = "part2"
          img={require('../../img/test.jpg')}
          altImg="une image pour tester"
          title="teste 1"
        />
        <ImageAndTexte
          classSection ="presentation accueil container imgAndText"
          classRow = "row "
          classImg = "part1 col-md-4"
          classText= "part2 col-md-8"
          img={require('../../img/test.jpg')}
          altImg= "une image pour tester"
          title= "teste 2"
          text= "un petite texte de teste pour montré comment fonctionne le Component"
        />
        <ImageAndTexte
          classSection = "presentation accueil container imgAndText"
          classRow = "row "
          classImg = "part1 col-md-4 order-last"
          classText = "part2 col-md-8"
          classLink = "btn btn-warning"
          img = {require('../../img/test.jpg')}
          altImg = "une image pour tester"
          title = "teste 3"
          text = "un petite texte de teste pour montré comment fonctionne le Component"
          link = "/competence"
          textLink = "go to compétence"
        />
      </main>
    );
  }

}

export default Accueil;
