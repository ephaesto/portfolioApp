import { GET_LIST_CREATION  } from "../actions/actionTypes"



export default function NavLinksReducer(state = [], action){
  switch(action.type){
    case GET_LIST_CREATION :
      return [
            { id:1,
              name : "billeterie du louvre",
              title : "la billeterie du louvre",
              resumer:"Un exercice d'openclassroom pour validé l'apprentissage de Symfony",
              img:"./img/imgLouvreTicket.svg",
              alt:"le logo que j'ai créer pour l'exercice sur le Louvre",
              link:"http://louvre.le-dev-web.com/",
              git:"https://github.com/Le-dw/louvreTickets",
              text: `Dans le cadre de l'optention de mon diplome chez Openclassroom nous devions faire un projet sous symfony.
              Ce projet portait sur une billeterie pour le musé du louvre.La particularité de cette billeterie
              est qu'elle devais fonctionner sans connexion et iplémenter l'Api Stripe. Pour réussir cette exercice en respectant
              les dernière norme j'ai du créer un système de session. La mise en base de donné des informations client ne ce fait
              qu'au paiment des billet.` ,
            },
            { id:2,
              name : "Billet simple pour l'alaska",
              title : "Un billet simple pour l'alaska",
              resumer:"Un exercice d'openclassroom pour validé l'apprentissage de PHP",
              img:"./img/imgBilletAlaska.svg",
              alt:"le logo que j'ai créer pour l'exercice de Billet simple pour l'alaska",
              link:"http://billetalaska.le-dev-web.com/",
              git:"https://github.com/Le-dw/blogPourUnEcrivain",
              text:`Dans le cadre de l'optention de mon diplome chez Openclassroom nous devions faire un projet sous symfony.
              Ce projet portait sur une billeterie pour le musé du louvre.La particularité de cette billeterie
              est qu'elle devais fonctionner sans connexion et iplémenter l'Api Stripe. Pour réussir cette exercice en respectant
              les dernière norme j'ai du créer un système de session. La mise en base de donné des informations client ne ce fait
              qu'au paiment des billet.` ,
            },
            { id:3,name : "Mairie de Yenne",
              title : "la Mairie de Yenne",
              resumer:"Un exercice d'openclassroom pour validé l'apprentissage de WordPress",
              img:"./img/imgMairieYenne.svg",
              alt:"le logo que j'ai créer pour l'exercice de la Mairie de Yenne",
              link:null,
              git:null,
              text:`Dans le cadre de l'optention de mon diplome chez Openclassroom nous devions faire un projet sous symfony.
              Ce projet portait sur une billeterie pour le musé du louvre.La particularité de cette billeterie
              est qu'elle devais fonctionner sans connexion et iplémenter l'Api Stripe. Pour réussir cette exercice en respectant
              les dernière norme j'ai du créer un système de session. La mise en base de donné des informations client ne ce fait
              qu'au paiment des billet.` ,
            },
            { id:4,
              name : "Portfolio",
              title : "Mon Portfolio",
              resumer:"Première création en React/Redux",
              img:"./img/imgPortfolio.svg",
              alt:"le logo que j'ai créer pour mon Portfolio",
              link:null,
              git:"https://github.com/Le-dw/portfolioApp",
              text:`Dans le cadre de l'optention de mon diplome chez Openclassroom nous devions faire un projet sous symfony.
              Ce projet portait sur une billeterie pour le musé du louvre.La particularité de cette billeterie
              est qu'elle devais fonctionner sans connexion et iplémenter l'Api Stripe. Pour réussir cette exercice en respectant
              les dernière norme j'ai du créer un système de session. La mise en base de donné des informations client ne ce fait
              qu'au paiment des billet.` ,
            }
          ]

    default :
      return state
  }
}
