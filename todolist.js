
import './App.css';
import {BrowserRouter as Router, Routes,Route} from 'react-router-dom'
import Home from './components/Home';
import Contact from './components/Contact';
import Navbar from './components/Navbar'
import { useState } from 'react';

function App() {
  const [todoList,setToDOList]=useState([]);
  const [newTask,setNewTask]=useState("");

  const handleInput =(event)=>{
    setNewTask(event.target.value);
  }
  const addNewTask=()=>{
    const task = {
      id: todoList.length ===0 ? 1 :[todoList.length-1].id+1,
      taskName: newTask,
    };
    const newToDoList=[...todoList,task];
    setToDOList(newToDoList);

  }
  const deleteTask =(id)=>{
    setToDOList(todoList.filter((task)=>task.id!==id))
  }
 
  return (
    <>
   <Router>
    <Navbar />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/contact' element={<Contact />}/>

    </Routes>
   </Router>
<div>
  <label>Enter todo</label>
  <input onChange={handleInput}/>
  <button onChange={addNewTask}>Press</button>
</div>

   <div className='list'>{todoList.map((task)=>{
    return(
      <div>
     <li>{task.taskName}</li>
      <button onClick={() =>deleteTask(task.id)}>Delete</button>
     </div>
  )})}
</div>
    </>
  );
}

export default App;
