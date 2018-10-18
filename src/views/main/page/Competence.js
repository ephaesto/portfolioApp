import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { getListTechno,getListCreation } from '../../../store/actions/index'

import TitleMain from '../component/TitleMain'
import ListTechno from '../component/listTechno/ListTechno'
class Competence extends Component {
  constructor(props) {
    super(props);
    this.props.getListTechno();
    this.props.getListCreation();
  }

  StateListTechno = (listTechno,listLink,type) => {
    listTechno = listTechno.filter((techno)=> techno.type === type)

    listTechno = listTechno.map((techno)=>{
      let listLinks = listLink.filter((link)=>link.idTechno === techno.id)
      if(listLinks){
        techno.listLink = listLinks
        return techno;
      }else{
        techno.listLink = null;
        return techno
      }
    })
    return listTechno
  }
  render() {
    return (
      <main>
          <TitleMain title="Mes Compétence"  page='competence' />
          <ListTechno
            classSection =" listTechno backEnd"
            classContainer ="container"
            classTitle ="backEndTitle"
            title ="Mes technologie Back-End"
            listTechno ={this.StateListTechno(this.props.listTechno,this.props.listCreation,"Back-end")}
          />
          <ListTechno
            classSection =" listTechno frontEnd"
            classContainer ="container"
            classTitle ="frontEndTitle"
            title ="Mes technologie Front-End"
            listTechno ={this.StateListTechno(this.props.listTechno,this.props.listCreation,"Front-end")}
          />
          <ListTechno
            classSection =" listTechno Webdesign"
            classContainer ="container"
            classTitle ="webdesignTitle"
            title ="Mes technologie pour le Webdesign"
            listTechno ={this.StateListTechno(this.props.listTechno,this.props.listCreation,"Webdesign")}
          />
      </main>
    );
  }

}

const mapStateToProps = state => {
  return{
    listTechno: state.listTechno,
    listCreation: state.listCreation
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getListTechno:getListTechno,getListCreation:getListCreation},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (Competence);
