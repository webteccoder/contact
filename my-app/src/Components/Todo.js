import React from 'react'

import style from "./Todo.module.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faTrash } from '@fortawesome/free-solid-svg-icons'




const Todo = (props) => {
    const {title, description} =props.todo;
    const {id} =props;
    const handleClick = (id)=>{
      alert(id);
    }
  return (
    
      <article className={style.todo}>
            <div>
                <h3>{title}</h3>
                <p className={style["todo p"]}>{description}</p>
            </div>
       
            <div>
                <button className={style.btn} onClick={()=> {handleClick(id)}}> <FontAwesomeIcon icon={faTrash} />
                </button>
            </div>
        
      </article>
   
  )
}

export default Todo
