import { GET_LIST_CREATION } from "../actions/actionTypes"



export default function NavLinksReducer(state = [], action){
  switch(action.type){
    case GET_LIST_CREATION :
      return [
            { id:1,  name : "HTML 5", level : "Intermédiaire", exemple:null,type:"Front-end",img:'icon-html.svg',imgAlt:'logo du Html'},
            { id:2,  name : "CSS 3", level : "Intermédiaire", exemple:null,type:"Front-end",img:'icon-css.svg',imgAlt:'logo du Html'},
            { id:3,  name : "Javascript", level : "Intermédiaire", exemple:"ES6, This, Hoisting",type:"Front-end",img:'icon-js.svg',imgAlt:'logo du Html'},
            { id:4,  name : "React/Redux", level : "Base", exemple:"ES6, This, Hoisting",type:"Front-end",img:'icon-reactredux.svg',imgAlt:'logo du Html'},
            { id:5,  name : "PHP", level : "Intermédiaire", exemple:"POO, Psr, Design pattern",type:"Back-end",img:'icon-php.svg',imgAlt:'logo du Html'},
            { id:6,  name : "Symfony 4", level : "Base", exemple:"ES6, This, Hoisting",type:"Back-end",img:'icon-symfony.svg',imgAlt:'logo du Html'},
            { id:7,  name : "Photoshop", level : "Base", exemple:null,type:"Webdesign",img:'icon-PS.svg',imgAlt:'logo du Html'},
            { id:8,  name : "Illustrator", level : "Base", exemple:null,type:"Webdesign",img:'icon-AI.svg',imgAlt:'logo du Html'},
            { id:9,  name : "Indesign", level : "Base", exemple:null,type:"Webdesign",img:'icon-Id.svg',imgAlt:'logo du Html'}
          ]

    default :
      return state
  }
}
