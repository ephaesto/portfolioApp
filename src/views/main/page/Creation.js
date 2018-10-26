import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getListTechno,getListCreation,getListCreaToTech } from '../../../store/actions/index'

import { withRouter } from 'react-router-dom'

import TitleMain from '../component/TitleMain'
import TitleAndOneOther from '../component/titleAndOneOther/TitleAndOneOther'

class Creation extends Component {
  constructor(props) {
    super(props);
    this.props.getListTechno();
    this.props.getListCreation();
    this.props.getListCreaToTech();
  }


  StateListCreation = (listTechno,listCreation,ListCreaToTech,myId) => {
    let MyCreation = listCreation.filter((creation) => `${creation.id}` === myId)
    MyCreation = MyCreation.map((Creation)=>{
        let ListCreaToTechs = ListCreaToTech.filter((CreaToTech)=>CreaToTech.idCrea === Creation.id)
        if(ListCreaToTechs.length !== 0){
          let finalListTechno = ListCreaToTechs.map((CreaToTech)=> {
              let listTechnos = listTechno.filter((techno)=>CreaToTech.idTechno === techno.id)
              return listTechnos[0]
            })
          if(finalListTechno.length !== 0){
            Creation.listTechno = finalListTechno;
            return Creation
          }else{
            Creation.listTechno = null;
            return Creation
          }

        }else{
          Creation.listTechno = null;
          return Creation
        }

      })
        return MyCreation[0];
    }


  render() {
    let MyCreation = this.StateListCreation(this.props.listTechno,this.props.listCreation,this.props.listCreaToTech,this.props.match.params.id)
    if(typeof MyCreation === "undefined"){
      MyCreation = {
        title:"",
        name:"",
        text:"",
        listTechno:[],
        link:null,
        git:null
      }
    }
    let links = () =>{return ""};
    if(MyCreation.link !== null || MyCreation.git !== null){
      links = () =>{return (<TitleAndOneOther
      classSection="creation linkCrea bgwhit"
      classContainer ="container"
      title="Voir le rendu du projet"
      link={MyCreation.link}
      git={MyCreation.git} / >) }
    };

    return (
      <main>
          <TitleMain title={ MyCreation.title }  page='creation' />
          <TitleAndOneOther
            classSection="creation presentationCrea bgwhit"
            classContainer ="container"
            title={`Présentation du projet ${MyCreation.name}`}
            text={MyCreation.text}
          />

          <TitleAndOneOther
            classSection="creation listeTechnoCrea"
            classContainer ="container"
            classCard="col-md-6 col-lg-4"
            title="Les technologies choisies"
            listTechno={MyCreation.listTechno}
          />
          {links()}

      </main>
    );
  }

}

const mapStateToProps = state => {
  return{
    listTechno: state.listTechno,
    listCreation: state.listCreation,
    listCreaToTech: state.listCreaToTech
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getListTechno:getListTechno,getListCreation:getListCreation,getListCreaToTech:getListCreaToTech},dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (Creation));
