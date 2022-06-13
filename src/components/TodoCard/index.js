import './index.css';
import React,{useState, useEffect} from 'react'
import { Rings } from "react-loader-spinner";

const TodoCard = ({text = '', onEdit, onDelete,onChangeTextBox,checked=true,date='',loader = false,clickedTodoId,todoId}) => {
  const [check, setcheck] = useState(checked);
  
  useEffect(() => {
    setcheck(checked)
  }, [checked])
  
  return(
        <div className='todo-container'> 
        <div className='todo-card'>
        <div className='checkbox-text'>
       {
         clickedTodoId === todoId &&loader ? <Rings
         height="25"
         width="25"
         color='red'
         ariaLabel='loading'
       />
     
         : <input type={"checkbox"} id="checkbox" onChange={onChangeTextBox} checked={check}  defaultValue={checked} />
       }
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