import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import {getListCreation} from '../../../store/actions/index'

import { withRouter } from 'react-router-dom'

import TitleMain from '../component/TitleMain'
import ImageAndTexte from '../component/ImageAndTexte'


class ListCreation extends Component {

  componentDidMount() {
    this.props.getListCreation();
 }

  render() {
    return (
      <main>
          <TitleMain title="Mes Créations"  page='listCreation' />
          {
            this.props.listCreation.map((Creation) => {
              return (
                <ImageAndTexte
                  key={Creation.id}
                  classSection ="ListCreation imgAndCreationTwoColumn "
                  classContainer="container"
                  classRow = "row "
                  classImg = "part1 col-md-6 col-lg-4 "
                  classText= "part2 col-md-6 col-lg-8 flexCenter "
                  classLink ="btn btn-raised btn-primary "
                  img={Creation.img}
                  altImg= {Creation.alt}
                  title= {Creation.title}
                  text={Creation.resumer}
                  link={`/creation/${Creation.id}`}
                  textLink="Voir le projet"
                />
            )

            })
          }
      </main>
    );
  }

}

const mapStateToProps = state => {
  return{
    listCreation: state.listCreation
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({getListCreation:getListCreation},dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (ListCreation));
