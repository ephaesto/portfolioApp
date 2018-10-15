import React, { Component } from 'react'
import { connect } from 'react-redux'

import { withRouter } from 'react-router-dom'


import LinkList from "./linkList/LinkList"

class Header extends Component {
constructor(props) {
  super(props);
  this.state = {
    heightNavbar : "",
    showCollapse:"",
  };
}

toggelHeightNavbar = () => {
  if(this.state.heightNavbar ===""){
    this.setState({heightNavbar : "heightNavbar", showCollapse:"show"});
  }
  if(this.state.heightNavbar ==="heightNavbar"){
    this.setState({heightNavbar : "" , showCollapse:""});
  }
}

  render() {
    return (
      <header >
        <nav className={`navbar navbar-expand-lg navbar-dark bg-light ${this.state.heightNavbar}`}>
          <button onClick ={(e)=>this.toggelHeightNavbar()} className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className={`collapse navbar-collapse ${this.state.showCollapse}`} id="navbarNav">
            <LinkList  HeightNavbar={(e)=>this.toggelHeightNavbar()} navLinks={this.props.navLinks} />
          </div>
        </nav>
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


export default withRouter(connect(mapStateToProps) (Header))
