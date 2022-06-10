import React from "react";
import  './index.css'

function TextInput({ type = "",placeholder='',onChange, value,defaultValue }) {
  return <input type={type} placeholder={placeholder} onChange={onChange} value={value} defaultValue={defaultValue}/>;
}

export default TextInput;
