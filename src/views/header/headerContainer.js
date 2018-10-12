import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { withRouter } from 'react-router-dom'


import{ selectNavEnvironment } from '../../store/actions/index'

import LinkList from "./linkList/LinkList"

class Header extends Component {


  render() {
    return (
      <header className="nav nav-tabs bg-dark">
        {console.log(this.props.navLinks)}
        <LinkList navLinks={this.props.navLinks} />
        <button className="nav-item nav-link" onClick={() => this.props.selectNavEnvironment("admin")} >test switch admin</button>
      </header>
    );
  }

}

function mapStateToProps(state){
  return{
    navLinks : state.navLinks,
    nameNav : state.nameNav
  }
}
function mapDispatchToProps(dispatch){
  return bindActionCreators({selectNavEnvironment:selectNavEnvironment},dispatch)
}

export default withRouter(connect(mapStateToProps,mapDispatchToProps) (Header))
