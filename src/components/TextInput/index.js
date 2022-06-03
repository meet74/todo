import React from "react";
import  './index.css'

function TextInput({ type = "",placeholder='' }) {
  return <input type={type} placeholder={placeholder}/>;
}

export default TextInput;
