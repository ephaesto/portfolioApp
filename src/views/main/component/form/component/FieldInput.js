import React from 'react';

const FildInput = (field) => (
    <div className="form-group">
      <label htmlFor={field.name} className={field.classLabel}>{field.label}</label>
      <input {...field.input} type={field.type} className={field.classComponent}/>
      {field.meta.touched && field.meta.error &&
       <p className="error"><span class="badge badge-primary">erreur</span>{field.meta.error}</p>}
    </div>
  )

  export default FildInput;
