import "./index.css";
import TodoCard from "../../components/TodoCard";
import React, { useState } from "react";
import { todoList } from "../../data/dummy_data";
import AddPage from "../../components/AddPage";
import DeletePopUp from "../../components/DeletePopUp";
import TextInput from "../../components/TextInput";
import Button from "../../components/Buttons";
import { Link, Navigate } from "react-router-dom";


function HomePage() {
    const [checked, setchecked] = useState(false);
    const [showModal, setShowModal] = useState(false);
    const [showDeleteModal, setShowDeleteModal] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>What do I need to do today ?</h1>
        </div>
        <Button  title="Add Todo" bgColor="#F0AD4E" textColor="#282C34"  onClick={()=>{
           setShowModal(true)
          
        }}/>
      <Link to={'/auth/login'} >
      <button id='logout-button'>Logout</button>
      </Link>
      </header>
      <main>
        <h3>Items I Need To Do</h3>
        <p>Check off items once you have completed them</p>

        <div style={{display:"flex",justifyContent:"center",alignContent:"center",marginTop:"20px"}}>
          <TextInput type="search"/>
          <Button  title="Search" bgColor="#282C34" textColor="#fff" />
        </div>
        <section>

          {/* <div>
              <h1>No Todos found</h1>
          </div> */}
         
          <AddPage
          trigger={showModal}
          onCancel={()=>{
            setShowModal(false)
          }}
          />
          <DeletePopUp
          trigger={showDeleteModal}
          onCancel={()=>{
            setShowDeleteModal(false)
          }}
          />
          {todoList.map((todo, index) => {

            return (
              <TodoCard
                text={todo.title}
                onEdit={() => setShowModal(true)}
                onDelete={() =>  setShowDeleteModal(true)}
                onChangeTextBox={e => {
                  
                  setchecked(e.nativeEvent.target.checked);
                }}
                checked={checked}
              />
            );
          })}
        </section>
      </main>
    </div>
  )
}

export default HomePage