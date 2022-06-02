import "./App.css";
import TodoCard from "./components/TodoCard";
import React, { useState } from "react";
import { todoList } from "./data/dummy_data";
import AddPage from "./components/AddPage";
import DeletePopUp from "./components/DeletePopUp";

function App() {
  const [checked, setchecked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  console.log(checked);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>What do I need to do today ?</h1>
        </div>
        <button id='add-button' onClick={()=>{
           setShowModal(true)
          
        }}>Add Todo</button>
      </header>
      <main>
        <h3>Items I Need To Do</h3>
        <p>Check off items once you have completed them</p>

        <div>
          <input type={"search"} />
          <button id="search-button">Search</button>
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
  );
}

export default App;
