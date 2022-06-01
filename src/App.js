import logo from "./logo.svg";
import "./App.css";
import TodoCard from "./components/TodoCard";
import React,{useState} from 'react'

function App() {
  const [checked, setchecked] = useState(false)
  console.log(checked);
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h1>What do I need to do today ?</h1>
        </div>
      </header>
      <main>
        <h3>Items I Need To Do</h3>
        <p>Check off items once you have completed them</p>
        <section>
          <TodoCard
            text="Go to Gym"
            onEdit={() => console.log("Edit clicked")}
            onDelete={() => console.log("Delete clicked")}
            onChangeTextBox={(e)=>{
              setchecked(e.nativeEvent.target.checked);
            }}
          />
          <TodoCard text="Eat an apple" />
        </section>
      </main>
    </div>
  );
}

export default App;
