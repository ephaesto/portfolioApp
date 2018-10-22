
  import React from 'react';
  import { Field } from 'redux-form';
  import FieldInput from "./component/FieldInput"
  import FieldTextarea from "./component/FieldTextarea"

  const FormContact = ({
    classSection="",
    classContainer="",
    title="",
    handleSubmit,
    fieldsContact
  }) => (
    <section className={classSection}>
      <div className={classContainer}>
          <h2>{title}</h2>
          <form onSubmit={(e)=>handleSubmit()}>
              <Field
                  name={fieldsContact.name}
                  component={FieldInput}
                  classComponent="form-control"
                  type="text"
                  label="Qui êtes-vous?"
                  classLabel={fieldsContact.name}
                />
                <Field
                  name={fieldsContact.email}
                  component={FieldInput}
                  classComponent="form-control"
                  type="text"
                  label="Votre adresse email :"
                  classLabel={fieldsContact.email}
                />
                <Field
                  name={fieldsContact.subject}
                  component={FieldInput}
                  classComponent="form-control"
                  type="text"
                  label="Le sujet de votre message :"
                  classLabel={fieldsContact.subject}
                />
                <Field
                  name={fieldsContact.message}
                  component={FieldTextarea}
                  classComponent="form-control"
                  type="text"
                  label="Votre message :"
                  classLabel={fieldsContact.message}
                />
            <button type="submit" className="btn btn-primary btn-raised">Envoyer</button>
          </form>
        </div>
    </section>
  );

  export default FormContact;
