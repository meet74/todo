import "./index.css";
import TodoCard from "../../components/TodoCard";
import React, { useState, useEffect } from "react";
import { todoList } from "../../data/dummy_data";
import AddPage from "../../components/AddPage";
import DeletePopUp from "../../components/DeletePopUp";
import TextInput from "../../components/TextInput";
import Button from "../../components/Buttons";
import { Link, Navigate, useLocation } from "react-router-dom";
import moment from 'moment';

function HomePage() {
  const [checked, setchecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [todos, settodos] = useState([]);
  const [todo, settodo] = useState({});
  const [isUpdate, setisUpdate] = useState(false)
  const deleteSubmitHandler = async() => {
    setShowDeleteModal(false);

    const response = await fetch(
      `http://192.168.1.58:5000/home/deletetodo?userid=${state.data.userId}&todoId=${todo.todoId}`,
      {
        method:"DELETE",
      }
    );
    const res = await response.json();
    settodos(res.todo);
    settodo({})
  };
  
  const updateCheckbox = async(check,todoId) => {
    const data = {
      userId:state.data.userId,
      todoId:todo.todoId,
      checked:check
    }

   fetch(
      `http://192.168.1.58:5000/home/updatecheckbox?userid=${state.data.userId}&todoId=${todoId}&checked=${check}`,
      {
        method:"PATCH",
        body:JSON.stringify(data)
      }
    ).then(res=>{
      load();
    }).catch(err=>{
      console.log(err);
    })
   
  }
  const load = async () => {
    settodo({})
    const response = await fetch(
      `http://192.168.1.58:5000/home/gettodos?userid=${state.data.userId}`,
      {
        method:"GET"
      }
    );
    const res = await response.json();

    if (response.status === 200) {
      settodos(res.todo[0].todos);
    }else{
      settodos([])
    }
    
  };
  const {state} = useLocation();
  
  useEffect(() => {
    load();
  }, []);

   if (todos.length<0) {
    return <h1>Loding....</h1>    
    }
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>What do I need to do today ?</h1>
        </div>
        <Button
          title="Add Todo"
          bgColor="#F0AD4E"
          textColor="#282C34"
          onClick={() => {
            settodo({});
            setisUpdate(false)
            setShowModal(true);
          }}
        />
        <Link to={"/auth/login"}>
          <button id="logout-button">Logout</button>
        </Link>
      </header>
      <main>
        <h3>Items I Need To Do</h3>
        <p>Check off items once you have completed them</p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignContent: "center",
            marginTop: "20px"
          }}
        >
          <TextInput type="search" />
          <Button title="Search" bgColor="#282C34" textColor="#fff" />
        </div>
        <section>
          <AddPage
            userId={state.data.userId}
            trigger={showModal}
            todo={todo ? todo:{}}
            isUpdate={isUpdate ? true:false}
            onCancel={() => {
              setShowModal(false);
            }}
            onAdd={() => {
              load();
              setShowModal(false);
              
            }}
          />
          <DeletePopUp
            trigger={showDeleteModal}
            onDelete={deleteSubmitHandler}
            onCancel={() => {
              setShowDeleteModal(false);
            }}
          />
          { todos.length<=0
              ? <div>
                  <h1>No Todos found</h1>
                </div>
              : todos.map((todo, index) => {
            const date = moment(todo.date).format("DD-MM-YYYY");
            
            return<TodoCard
                  text={todo.title}
                  date={date}
                  onEdit={() => {
                    setShowModal(true)
                    setisUpdate(true)
                    settodo(todo)
                  }}
                  onDelete={() => {
                    setShowDeleteModal(true);
                    settodo(todo)
                  
                  }}
                  onChangeTextBox={e => {
                 
                    settodo(todo)
                    updateCheckbox(e.nativeEvent.target.checked,todo.todoId);
                    
                    //setchecked(e.nativeEvent.target.checked);
                  }}
                  checked={todo.checked}
                />;
          })}
        </section>
      </main>
    </div>
  );
}

export default HomePage;
