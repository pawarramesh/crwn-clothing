import React from "react";
import './custome-button-style.scss'
 const CustomeButton = ({children, ...otherprops}) => (
     <button className="custom-button" {...otherprops}>
         {children}
     </button>
 )
 export default CustomeButton