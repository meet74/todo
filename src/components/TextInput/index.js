import React from "react";
import  './index.css'

function TextInput({ type = "",placeholder='',onChange }) {
  return <input type={type} placeholder={placeholder} onChange={onChange}/>;
}

export default TextInput;
