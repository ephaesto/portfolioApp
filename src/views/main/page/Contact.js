import React, { Component } from 'react'
import {reduxForm} from "redux-form"
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import * as FromContactValidation from '../../../validations/FormContactValidation'
import { submitEmailContact } from '../../../store/actions/index'

import TitleMain from '../component/TitleMain'
import FromContact from '../component/form/FromContact'


const FIELDS_CONTACT ={name:"name",email:"email",subject:"subject",message:"message"};

class Contact extends Component {

  handleSubmit = (emailValue) =>{
    this.props.submitEmailContact(emailValue, this.props.history);
  }

  flashMessage =()=>{
    let flash = localStorage.getItem("email")
    if(flash){
      if(flash === "valide"){
      flash={class:"alert-success",text:"L'email a bien été envoyé"}
    }else{
      flash={class:"alert-danger",text:"Une erreur est survenue, veuillez reverifier les valeurs et recommencer"}
      }
      localStorage.removeItem("email")
      return flash
    }else{
      return null
    }
  }

  render() {
    let flash = this.flashMessage()
    return (
      <main>
          <TitleMain title="Contactez-moi"  page='contact' />
          <section className="fromContact bgwhit">
            <div className="container">
                <h2>Envoyez-moi un message !</h2>
                {flash !== null ? <p className={`alert ${flash.class}`}>{flash.text}</p>: ""}
                <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                  <FromContact
                    fieldsContact ={FIELDS_CONTACT}
                  />
                  </form>
                </div>
            </section>
      </main>
    );
  }

}

const validate = formValues => {
  const errors = {}
  errors.name = FromContactValidation.validateNotEmpty(formValues.name)
  errors.email = FromContactValidation.validateEmail(formValues.email)
  errors.subject = FromContactValidation.validateNotEmpty(formValues.subject)
  errors.message = FromContactValidation.validateNotEmpty(formValues.message)
  return errors
}
const sendMailContactForm = reduxForm({
  form : "sendMailContact",
  fields:Object.keys(FIELDS_CONTACT),
  validate
})(Contact)

const mapDispatchToProps = dispatch => {
  return bindActionCreators({submitEmailContact:submitEmailContact},dispatch)
}

export default connect(null,mapDispatchToProps) (sendMailContactForm);
