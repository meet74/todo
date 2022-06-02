import './index.css';
import React from 'react'
import {animated, useSpring} from 'react-spring'


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
               <input placeholder='Title'/>
           </div>
           <div className='input-container'>
               <h3 className='header-text'>Select Date</h3>
               <input type={"date"}/>
           </div>
           <div>
           <button id='add-todo-button' onClick={onAdd}>Add Todo</button>
           <button id='cancel-todo-button' onClick={onCancel}>Cancel</button>
           </div>
           </div>
        
        </animated.div>
    )
}


export default AddPage