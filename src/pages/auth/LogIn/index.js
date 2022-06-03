import React from 'react'
import './index.css'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Buttons'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
    <div className='login-container'>
      <div className='login-box'>
          <p id='title-text'>Login</p>
          <TextInput placeholder='Email' type='email'/>
          <TextInput placeholder='Password'type='password'/>
          <Button title='Login' bgColor='#282C34' textColor='#fff'/>
          <p id='footer-text'>Does'nt have an account ? <Link to={'/auth/signup'}><label id='link-text'>SignUp</label></Link></p>
      </div>
    </div>
  )
}

export default LogIn