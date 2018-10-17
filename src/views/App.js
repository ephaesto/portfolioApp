import React, { Component } from 'react'
import './css/style.css';
import { Route, Switch } from "react-router-dom"

import Header from "./app/header/header"
import Footer from "./app/footer/Footer"
import Accueil from "./app/main/page/Accueil"
import MentionsLegales from "./app/main/page/MentionsLegales"

import Competence from "./app/main/page/Competence"
import Creation from "./app/main/page/Creation"
import Contact from "./app/main/page/Contact"



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
