import React, { Component } from 'react'
import './css/style.css';
import { Route, Switch } from "react-router-dom"

import Header from "./header/headerContainer"
import Accueil from "./main/accueil/Accueil"
import Competence from "./main/competence/Competence"


export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Accueil}/>
          <Route exact path="/competence" component={Competence}/>
        </Switch>
      </React.Fragment>
    )
  }
}
