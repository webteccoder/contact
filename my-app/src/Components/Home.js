import React,{useState} from 'react'
import {v4 as uuidv4} from 'uuid'

import Todos from './Todos';
import style from './Home.module.css'
import NewTodo from './NewTodo';

const Home = () => {
    
    const [todos,setTodos]= useState([]);
    const handleAddTodo = (todo) =>{
      setTodos((previousTodos) =>{
        return [...previousTodos, {id : uuidv4() ,todo}]
      })
     
    }
  return (
    <div className={style.container}> 
    <h1>TO DO APP</h1> 
      <NewTodo onAddTodo={handleAddTodo} />
       <Todos todos={todos}/>
       
    </div>
  )
}

export default Home
