import "./index.css";
import TodoCard from "../../components/TodoCard";
import React, { useState, useEffect } from "react";
import { todoList } from "../../data/dummy_data";
import AddPage from "../../components/AddPage";
import DeletePopUp from "../../components/DeletePopUp";
import TextInput from "../../components/TextInput";
import Button from "../../components/Buttons";
import { Link, Navigate, useLocation } from "react-router-dom";

function HomePage() {
  const [checked, setchecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [todos, settodos] = useState([]);
  const submitHandler = () => {};
  const load = async () => {
    const response = await fetch(
      `http://192.168.1.7:5000/home/gettodos?userid=${state.data.userId}`
    );
    const res = await response.json();
    settodos(res.todo);
  };
  const {state} = useLocation();
  
  useEffect(() => {
    load();
  }, []);

 //  console.log(todos[0].todos);
  if (todos.length<=0) {
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
            onCancel={() => {
              setShowModal(false);
            }}
            onAdd={() => {
              setShowModal(false);
              load();
            }}
          />
          <DeletePopUp
            trigger={showDeleteModal}
            onDelete={submitHandler}
            onCancel={() => {
              setShowDeleteModal(false);
            }}
          />
          {todos[0].todos.map((todo, index) => {
            return todos[0].todos.length <= 0
              ? <div>
                  <h1>No Todos found</h1>
                </div>
              : <TodoCard
                  text={todo.title}
                  date={todo.date}
                  onEdit={() => setShowModal(true)}
                  onDelete={() => setShowDeleteModal(true)}
                  onChangeTextBox={e => {
                    setchecked(e.nativeEvent.target.checked);
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
