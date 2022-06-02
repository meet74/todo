import './index.css';
import React from 'react'
import {animated, useSpring} from 'react-spring'


const DeletePopUp = ({trigger = true, onCancel, onAdd}) => {

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
           <h1> Delete TODO</h1>
           <h3>Are you sure want to Delete ?</h3>
           <div>
           <button id='cancel-todo-button' onClick={onAdd}>Delete</button>
           <button id='add-todo-button' onClick={onCancel}>Cancel</button>
           </div>
           </div>
        
        </animated.div>
    )
}


export default DeletePopUp