import React from 'react'
import './index.css'

function Button({onClick,bgColor="red",textColor="white",title = ''}) {

    const styles = {backgroundColor:bgColor,color:textColor}
  return (
    <button id="btn-style" style={styles} onClick={onClick}>{title}</button>
  )
}

export default Button