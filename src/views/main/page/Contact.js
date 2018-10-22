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
  handleSubmit = (credentials) =>{
    this.props.submitEmailContact(credentials);
  }
  render() {
    return (
      <main>
          <TitleMain title="Contactez-moi"  page='contact' />
          <FromContact
            classSection="fromContact bgwhit"
            classContainer="container"
            title="Envoyez-moi un message !"
            handleSubmit={this.props.handleSubmit(this.handleSubmit)}
            fieldsContact ={FIELDS_CONTACT}
          />

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
