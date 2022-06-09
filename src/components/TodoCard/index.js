import './index.css';
import React from 'react'


const TodoCard = ({text = '', onEdit, onDelete,onChangeTextBox,checked=false,date=''}) => {
    return(
        <div className='todo-container'> 
        <div className='todo-card'>
        <div className='checkbox-text'>
        <input type={"checkbox"} id="checkbox" onChange={onChangeTextBox}  checked={checked} />
         <div>
         <p className='todo-text' style={{textDecoration:checked?"line-through":"none"}}>{text}</p>
         <p className='date-text' style={{textDecoration:checked?"line-through":"none"}}>{date}</p>
         </div>
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