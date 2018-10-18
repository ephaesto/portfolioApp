import React, { Component } from 'react'
import { Route, Switch } from "react-router-dom"

import Header from "./header/header"
import Footer from "./footer/Footer"
import Accueil from "./main/page/Accueil"
import MentionsLegales from "./main/page/MentionsLegales"

import Competence from "./main/page/Competence"
import Creation from "./main/page/Creation"
import Contact from "./main/page/Contact"



export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Switch>
          <Route exact path="/" component={Accueil}/>
          <Route exact path="/mentions-legales" component={MentionsLegales}/>

          <Route exact path="/competence" component={Competence}/>
          <Route exact path="/creation" component={Creation}/>
          <Route exact path="/contact" component={Contact}/>

        </Switch>
        <Footer />
      </React.Fragment>
    )
  }
}
