import './index.css';
import React,{useState} from 'react'


const TodoCard = ({text = '', onEdit, onDelete,onChangeTextBox}) => {
    return(
        <div className='todo-container'> 
        <div className='todo-card'>
        <div className='checkbox-text'>
        <input type={"checkbox"} id="checkbox" onChange={onChangeTextBox}/>
         <p className='todo-text'>{text}</p>
        </div>
        <div>
          <button id='edit-button' onClick={onEdit}>Edit</button>
          <button id='delete-button' onClick={onDelete}>Delete</button>
        </div>
        </div>
        <div className='line'/>
       </div>
    )

}


export default TodoCard