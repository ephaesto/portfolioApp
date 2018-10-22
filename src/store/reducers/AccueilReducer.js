import { GET_ACCUEIL  } from "../actions/actionTypes"



export default function AccueilReducer(state = [], action){
  switch(action.type){
    case GET_ACCUEIL :
      return [
            { id:1,
              titlePresentation : "« je suis devenus dévellopeur pour pouvoir réaliser mes rêve et ne jamais arréter de créer et d'inventer le future. »",
              imgPresentation:"./img/avatar.png",
              altImgPresentation:"une photo de profil",
              titleMonPasse : "Un début dans les Sciences",
              imgMonPasse:"./img/environement.svg",
              altImgMonPasse:"image représentant la nature",
              textMonPasse:`Avant l'informatique j'était attiré par l'environement c'
              est pourquoi je voulais faire deux BTS un dans l'aquaculture et
               l'autre en Gestion protection de la nature(GPN). Ces année m'ont
               permis d'apprendre : la démarche scientifique et la gestion analitique.
               J'ai pu aussi rencontré des chef d'entreprise qui ce posait beaucoup
               de question sur le monde du numérique et les possibilité du web.
               Cette expériance enrichissante a pris fin mais fait découvrir
               le monde de l'informatique.`,
              titleMonAvenir : "Une reconversion en develloppement web",
              imgMonAvenir:"./img/ordinateur.svg",
              altImgMonAvenir:"une image représentant un ordinateur",
              textMonAvenir:`Après avoir découver ma vois , j'ai entamer une reconvertion
               dans le develloppement web. J'ai d'abord checher a me former en webdesign
               pour pouvoir créer des interface cohérente. En suite cete anné
               je cherche a dévelloper des compétence en back-end avec Symfony4 et
               en front-end avec React.js. Le javascript a été une véritable révélation
                et je pense en faire mon language de prédilection. J'aimeris aussi me
                former en UX design pour completer mes compétence et avoir un profils
                transversale capable d'avoir un bon recule technique pour prendre de
                 bonne decision face a un produit.`,
            },

          ]

    default :
      return state
  }
}
