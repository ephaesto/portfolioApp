import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getListTechno,getListCreation,getListCreaToTech } from '../../../store/actions/index'

import TitleMain from '../component/TitleMain'
import ListTechno from '../component/listTechno/ListTechno'
class Competence extends Component {
  constructor(props) {
    super(props);
    this.props.getListTechno();
    this.props.getListCreation();
    this.props.getListCreaToTech();

  }

  StateListTechno = (listTechno,listLink,ListCreaToTech,type) => {
    let listTechnos = listTechno.filter((techno)=> techno.type === type)

    listTechnos = listTechnos.map((techno)=>{
      let ListCreaToTechs = ListCreaToTech.filter((CreaToTech)=>CreaToTech.idTechno === techno.id)
      if(ListCreaToTechs.length !== 0){
        let finalListLink = ListCreaToTechs.map((CreaToTech)=> {
            let listLinks = listLink.filter((Link)=>CreaToTech.idCrea === Link.id)
            return listLinks[0]
          })
        if(finalListLink.length !== 0){
          techno.listLink = finalListLink;
          return techno
        }else{
          techno.listLink = null;
          return techno
        }

      }else{
        techno.listLink = null;
        return techno
      }

    })
    return listTechnos
  }
  render() {
    console.log(this.props.listTechno,this.props.listCreation,this.props.listCreaToTech)
    return (
      <main>
          <TitleMain title="Mes Compétence"  page='competence' />
          <ListTechno
            classSection =" listTechno backEnd"
            classContainer ="container"
            classTitle ="backEndTitle bgwhit titleTech"
            classCard ="col-md-6"
            title ="Mes technologie Back-End"
            listTechno ={this.StateListTechno(this.props.listTechno,this.props.listCreation,this.props.listCreaToTech,"Back-end")}
          />
          <ListTechno
            classSection =" listTechno frontEnd"
            classContainer ="container"
            classTitle ="frontEndTitle bgwhit titleTech"
            classCard ="col-md-6"
            title ="Mes technologie Front-End"
            listTechno ={this.StateListTechno(this.props.listTechno,this.props.listCreation,this.props.listCreaToTech,"Front-end")}
          />
          <ListTechno
            classSection =" listTechno Webdesign"
            classContainer ="container"
            classTitle ="webdesignTitle bgwhit titleTech"
            classCard ="col-md-6 col-lg-4 "
            title ="Mes technologie pour le Webdesign"
            listTechno ={this.StateListTechno(this.props.listTechno,this.props.listCreation,this.props.listCreaToTech,"Webdesign")}
          />
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

export default connect(mapStateToProps,mapDispatchToProps) (Competence);
