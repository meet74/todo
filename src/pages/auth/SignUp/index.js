import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Buttons'

function SignUp() {
  return (
    <div className='signup-container'>
      <div className='signup-box'>
          <p id='title-text'>Signup</p>
          <TextInput placeholder='Email' type='email'/>
          <TextInput placeholder='Password'type='password'/>
          <Link to={'/home'}>
          <Button title='Signup' bgColor='#282C34' textColor='#fff'/>
          </Link>
          <p id='footer-text'>Have an account ? <Link to='/auth/login'><label id='link-text'>Login</label></Link></p>
      </div>
    </div>
  )
}

export default SignUp