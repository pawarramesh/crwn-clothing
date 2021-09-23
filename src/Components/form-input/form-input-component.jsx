import React from "react";
import './form-input-component.style.scss'
 const FormInput = ({handleChange, lable, ...otherprops}) => (
  <div className="group">
      <input className="form-input tiltle" onChange={handleChange} {...otherprops}/>
      {
          lable ?
          (<lable className={`${otherprops.value.lenght ? ' shrink' : ' '} form-input-label`}>
            {lable}
          </lable>)
          :null
      }
  </div>   
 )
 export default FormInput