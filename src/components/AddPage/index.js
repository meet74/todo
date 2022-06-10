import './index.css';
import React, { useState, useEffect } from 'react'
import { animated, useSpring } from 'react-spring'
import TextInput from '../TextInput';
import Button from '../Buttons';
import moment from 'moment';

const AddPage = ({ trigger = true, onCancel, onAdd, userId, isUpdate = false, todo }) => {

    const [title, setTitle] = useState(todo.title);
    const [date, setDate] = useState(isUpdate ? todo.date : moment(Date.now()).format('YYYY-MM-DD'))
    const [loader, setloader] = useState(false)
    const animation = useSpring({
        config: {
            duration: 250
        },
        opacity: trigger ? 1 : 0,
        transform: trigger ? 'translateY(0%)' : 'translateY(100%)'
    })
    useEffect(() => {
        if (isUpdate) {
            setTitle(todo.title);
            setDate(todo.date);
    
        }else{
            setDate( moment(Date.now()).format('YYYY-MM-DD'));
        }
    }, [todo])


    const addSubmitHandler = () => {
        setloader(true);
       
        const data = {
            userId: userId,
            title: title,
            date: date,
            checked: false,
        }
        fetch('https://todo-api-74.herokuapp.com/home/addTodo', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(res => {
            onAdd();
            console.log(res);
        }).catch(err => {
            console.log(err);
        }).finally(()=>{
            setloader(false);
        })
    }

    const updateHandler = () => {
        const data = {
            userId: userId,
            title: title,
            date: date,
            checked: false,
            todoId: todo.todoId
        }
        setloader(true);
        fetch('https://todo-api-74.herokuapp.com/home/updatetodo', {
            method: "PUT",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        }).then(res => {
            console.log(res);
            onAdd();
        }).catch(err => {
            console.log(err);
        }).finally(()=>{
            setloader(false);
        })
    }

    return (trigger) && (

        <animated.div style={animation} className='addpage-container' >
            <div className='addpage-inner'>
                <h1> Add TODO</h1>
                <div className='input-container'>
                    <h3 className='header-text'>Title</h3>
                    <TextInput placeholder='Title' defaultValue={todo.title} onChange={(e) => setTitle(e.target.value)} />
                </div>
                <div className='input-container'>
                    <h3 className='header-text'>Select Date</h3>
                    <TextInput type='date' defaultValue={todo.date !== '' ? moment(todo.date).format('YYYY-MM-DD') : ''} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div>
                    {
                        isUpdate ? <Button title={loader?'Updating...':"Update Todo"} bgColor="#F0AD4E" textColor="#282C34" onClick={updateHandler} />
                            : <Button title={loader ?'Adding...':"Add Todo"} bgColor="#F0AD4E" textColor="#282C34" onClick={addSubmitHandler} />
                    }
                    <Button title="Cancel" bgColor="#D9534F" textColor="#fff" onClick={onCancel} />
                </div>
            </div>

        </animated.div>
    )
}


export default AddPage