import React from 'react';

const FildTextarea = (field) => (
    <div className="form-group">
      <label htmlFor={field.name} className={field.classLabel}>{field.label}</label>
      <textarea  {...field.input}  className={field.classComponent}/>
      {field.meta.touched && field.meta.error &&
       <p className="error">{field.meta.error}</p>}
    </div>
  )

  export default FildTextarea;
