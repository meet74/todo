import './index.css';
import React,{useState} from 'react'
import {animated, useSpring} from 'react-spring'
import TextInput from '../TextInput';
import Button from '../Buttons';


const AddPage = ({trigger = true, onCancel, onAdd}) => {
    const [title, setTitle] = useState('');
    const [date, setDate] = useState('')
    const animation = useSpring({
        config:{
            duration:250    
        },
        opacity: trigger ?1 :0,
        transform: trigger ? 'translateY(0%)' : 'translateY(100%)'
    })

    const addSubmitHandler = () => {
        console.log('shreehari',date+title);
        const data = {
          userId:"25abe96d-03ea-4c6a-a907-a505347f3538",
          title:title,
          date:date,
          checked:false
        }
        fetch('http://192.168.1.7:5000/home/addTodo',{
         method:"POST",
         headers: {
          'Content-Type': 'application/json'
        },
         body:JSON.stringify(data),
        }).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
      }

    return(trigger)&&(
       
            <animated.div style={animation} className='addpage-container' >
           <div className='addpage-inner'>
           <h1> Add TODO</h1>
           <div className='input-container'>
               <h3 className='header-text'>Title</h3>
               <TextInput placeholder='Title' onChange={(e)=>setTitle(e.target.value)}/>
           </div>
           <div className='input-container'>
               <h3 className='header-text'>Select Date</h3>
               <TextInput type='date' onChange={(e)=>setDate(e.target.value)}/>
           </div>
           <div>
           <Button  title="Add Todo" bgColor="#F0AD4E" textColor="#282C34"  onClick={addSubmitHandler}/>
           <Button  title="Cancel" bgColor="#D9534F" textColor="#fff"  onClick={onCancel}/>
           </div>
           </div>
        
        </animated.div>
    )
}


export default AddPage