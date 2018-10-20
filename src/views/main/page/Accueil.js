import React, { Component } from 'react'
import TitleMain from '../component/TitleMain'
import ImageAndTexte from '../component/ImageAndTexte'
class Accueil extends Component {

  render() {
    return (
      <main>
        <TitleMain title="Emeric Lebbrecht" subtitle="Bienvenu sur mon portfolio" page='accueil' />
        <ImageAndTexte
          classSection = "presentation accueil imgAndTextAvatar bgwhit"
          classContainer="container"
          classRow = "flexCenter"
          classImg = "part1"
          classText = "part2"
          img='./img/avatar.png'
          altImg="une image pour tester"
          title="« je suis devenus dévellopeur pour pouvoir réaliser mes rêve et ne jamais arréter de créer et d'inventer le future. » "
        />
        <ImageAndTexte
          classSection ="monPasse accueil imgAndTextTwoColumn bggrey"
          classContainer="container"
          classRow = "row "
          classImg = "part1 col-md-6 col-lg-4"
          classText= "part2 col-md-6 col-lg-8"
          img='./img/environement.svg'
          altImg= "une image pour tester"
          title= "Un début dans les Sciences"
          text= "Avant l'informatique j'était attiré par l'environement c'
          est pourquoi je voulais faire deux BTS un dans l'aquaculture et
           l'autre en Gestion protection de la nature(GPN). Ces année m'ont
           permis d'apprendre : la démarche scientifique et la gestion analitique.
           J'ai pu aussi rencontré des chef d'entreprise qui ce posait beaucoup
           de question sur le monde du numérique et les possibilité du web.
           Cette expériance enrichissante a pris fin mais fait découvrir
           le monde de l'informatique. "
        />
        <ImageAndTexte
          classSection = "monAvenir accueil imgAndTextTwoColumn bgwhit"
          classContainer="container"
          classRow = "row "
          classImg = "part1 col-md-6 col-lg-4"
          classText = "part2 col-md-6 col-lg-8"
          classLink = "btn btn-warning"
          img = './img/ordinateur.svg'
          altImg = "une image pour tester"
          title = "Une reconversion en develloppement web"
          text = "Après avoir découver ma vois , j'ai entamer une reconvertion
           dans le develloppement web. J'ai d'abord checher a me former en webdesign
           pour pouvoir créer des interface cohérente. En suite cete anné
           je cherche a dévelloper des compétence en back-end avec Symfony4 et
           en front-end avec React.js. Le javascript a été une véritable révélation
            et je pense en faire mon language de prédilection. J'aimeris aussi me
            former en UX design pour completer mes compétence et avoir un profils
            transversale capable d'avoir un bon recule technique pour prendre de
             bonne decision face a un produit."

        />
      </main>
    );
  }

}

export default Accueil;
