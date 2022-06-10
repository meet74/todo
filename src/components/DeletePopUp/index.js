import './index.css';
import React from 'react'
import {animated, useSpring} from 'react-spring'
import Button from '../Buttons';


const DeletePopUp = ({trigger = true, onCancel, onDelete,loader = false}) => {

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
           <Button  title={loader?'Deleting...':"Delete"} bgColor="#D9534F" textColor="#fff"  onClick={onDelete}/>
           <Button  title="Cancel" bgColor="#F0AD4E" textColor="#282C34"  onClick={onCancel}/>
           </div>
           </div>
        
        </animated.div>
    )
}


export default DeletePopUp