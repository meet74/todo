import './index.css';
import React from 'react'
import {animated, useSpring} from 'react-spring'
import TextInput from '../TextInput';
import Button from '../Buttons';


const AddPage = ({trigger = true, onCancel, onAdd}) => {

    const animation = useSpring({
        config:{
            duration:250    
        },
        opacity: trigger ?1 :0,
        transform: trigger ? 'translateY(0%)' : 'translateY(100%)'
    })

    return(trigger)&&(
       
            <animated.div style={animation} className='addpage-container' >
           <div className='addpage-inner'>
           <h1> Add TODO</h1>
           <div className='input-container'>
               <h3 className='header-text'>Title</h3>
               <TextInput placeholder='Title'/>
           </div>
           <div className='input-container'>
               <h3 className='header-text'>Select Date</h3>
               <TextInput type='date'/>
           </div>
           <div>
           <Button  title="Add Todo" bgColor="#F0AD4E" textColor="#282C34"  onClick={onAdd}/>
           <Button  title="Cancel" bgColor="#D9534F" textColor="#fff"  onClick={onCancel}/>
           </div>
           </div>
        
        </animated.div>
    )
}


export default AddPage