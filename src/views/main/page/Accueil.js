import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {getAcceuil} from '../../../store/actions/index'

import TitleMain from '../component/TitleMain'
import ImageAndTexte from '../component/ImageAndTexte'

class Accueil extends Component {

  constructor(props) {
    super(props);
    this.props.getAcceuil();
  }

  render() {
    let AccueilValues = this.props.AccueilValue[0]
    if(typeof AccueilValues === "undefined"){
      AccueilValues = { id:"",
        titlePresentation : "",
        imgPresentation:"",
        altImgPresentation:"",
        titleMonPasse :"",
        imgMonPasse:"",
        altImgMonPasse:"",
        textMonPasse:"",
        titleMonAvenir :"",
        imgMonAvenir:"",
        altImgMonAvenir:"",
        textMonAvenir:""
      }}
    return (
      <main>
        <TitleMain title="Emeric Lebbrecht" subtitle="Bienvenu sur mon portfolio" page='accueil' />
        <ImageAndTexte
          classSection = "presentation accueil imgAndTextAvatar bgwhit"
          classContainer="container"
          classRow = "flexCenter"
          classImg = "part1"
          classText = "part2"
          img={AccueilValues.imgPresentation}
          altImg={AccueilValues.altImgPresentation}
          title={AccueilValues.titlePresentation }
        />
        <ImageAndTexte
          classSection ="monPasse accueil imgAndTextTwoColumn bggrey"
          classContainer="container"
          classRow = "row "
          classImg = "part1 col-md-6 col-lg-4"
          classText= "part2 col-md-6 col-lg-8"
          img= {AccueilValues.imgMonPasse}
          altImg= {AccueilValues.altImgMonPasse}
          title= {AccueilValues.titleMonPasse }
          text= {AccueilValues.textMonPasse}
        />
        <ImageAndTexte
          classSection = "monAvenir accueil imgAndTextTwoColumn bgwhit"
          classContainer="container"
          classRow = "row "
          classImg = "part1 col-md-6 col-lg-4"
          classText = "part2 col-md-6 col-lg-8"
          classLink = "btn btn-warning"
          img = {AccueilValues.imgMonAvenir}
          altImg = {AccueilValues.altImgMonAvenir}
          title = {AccueilValues.titleMonAvenir}
          text = {AccueilValues.textMonAvenir}

        />
      </main>
    );
  }

}

const mapStateToProps = state => {
  return{
    AccueilValue: state.AccueilValue
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getAcceuil:getAcceuil},dispatch)
}

export default connect(mapStateToProps,mapDispatchToProps) (Accueil);
