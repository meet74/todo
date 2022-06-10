import React,{useState} from 'react'
import './index.css'
import TextInput from '../../../components/TextInput'
import Button from '../../../components/Buttons'
import { Link,useNavigate } from 'react-router-dom'

function LogIn(props) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loader, setloader] = useState(false);
  const nav = useNavigate();
  const submitHandler = () => {
    setloader(true);
    fetch(`https://todo-api-74.herokuapp.com/auth/login?email=${email}&password=${password}`).then(async (res)=>{
   
      
     if (res.status === 200) {
      const response = await res.json();
      nav('/home',{state:response});
      setError('')
     }else if(res.status === 400){
      console.log('error');
      setError('User not Exist')
    }else if(res.status === 401){
       console.log('error');
       setError('Wrong Password')
     }else{
      setError('Something went wrong')
     }
    }).catch(err=>{
      console.log(err);
      setError('Something went wrong')
    }).finally(()=>{
      setloader(false);
    })
  }


  return (
    <div className='login-container'>
      <div className='login-box'>
          <p id='title-text'>{'Login'}</p>
          {error.length>0 && <h5>{error}</h5>}
          <TextInput placeholder='Email' type='email' onChange={(e)=>{
            setEmail(e.target.value)
            setError('')
          }
          }/>
          <TextInput placeholder='Password'type='password' onChange={(e)=>{
            setPassword(e.target.value)
            setError('')
            
            }}/>
          {/* <Link to={'/home'}> */}
          <Button title={loader ?'Login...':'Login'} bgColor='#282C34' textColor='#fff' onClick={submitHandler}/>
          {/* </Link> */}
         
          <p id='footer-text'>Does'nt have an account ? <Link to={'/auth/signup'}><label id='link-text'>SignUp</label></Link></p>
      </div>
    </div>
  )
}

export default LogIn