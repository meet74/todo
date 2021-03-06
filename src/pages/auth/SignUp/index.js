import React,{useState} from 'react'
import {  useNavigate, Link } from 'react-router-dom'
import './index.css'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Buttons'

function SignUp() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loader, setloader] = useState(false);
  const nav = useNavigate();
  const submitHandler = () => {
    setloader(true);
    fetch(`https://todo-api-74.herokuapp.com/auth/signup?name=${name}&email=${email}&password=${password}`).then(async res=>{
      
     if (res.status === 200) {
      const response = await res.json();
      
      nav('/home',{state:response});
      setError('')
     }else if(res.status === 401){
       console.log('error');
       setError('Wrong Password')
     }else if(res.status === 400){
      console.log('error');
      setError('User already exist')
    }else{
      setError('Something went wrong')
     }
    }).catch(err=>{
      console.log(err);
    }).finally(()=>{
      setloader(false);
    })
  }
  return (
    <div className='signup-container'>
      <div className='signup-box'>
          <p id='title-text'>{'Signup'}</p>
          {error.length>0 && <h5>{error}</h5>}
          <TextInput placeholder='Name' type='email' onChange={(e)=>setName(e.target.value)}/>
          <TextInput placeholder='Email' type='email' onChange={(e)=>setEmail(e.target.value)}/>
          <TextInput placeholder='Password'type='password'onChange={(e)=>setPassword(e.target.value)}/>
          {/* <Link to={'/home'}> */}
          <Button title={loader ? 'signingup...':'Signup'} bgColor='#282C34' textColor='#fff' onClick={submitHandler}/>
          {/* </Link> */}
          <p id='footer-text'>Have an account ? <Link to='/auth/login'><label id='link-text'>Login</label></Link></p>
      </div>
    </div>
  )
}

export default SignUp