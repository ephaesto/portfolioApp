import React, { Component } from 'react'
import { connect } from 'react-redux'

import LinkList from "./linkList/LinkList"

class Header extends Component {

  render() {
    return (
      <header>
        <LinkList navLinks={this.props.navLinks} />
      </header>
    );
  }

}

function mapStateToProps(state){
  return{
    navLinks : state.navLinks
  }
}
export default connect(mapStateToProps) (Header);
