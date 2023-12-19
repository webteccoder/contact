import React,{useState} from 'react'

import style from "./NewTodo.module.css"
const NewTodo = (props) => {


      const [todo, setTodo] = useState({title : "",desc : ""});
      const {title, desc} =todo;

      const HandleSubmit =(event) =>{
            event.preventDefault();
            props.onAddTodo(todo)
            setTodo({title :"", desc: ""})
      }

      const HandleChange = (event) =>{
            const name = event.target.name;
            setTodo((oldTodo) =>{
                  return {...oldTodo, [name]:event.target.value};
            })
      }

  return (

    <form className={style.form} onSubmit={HandleSubmit}>
          <div className={style["form-field"]}>
                <label className={style['form-field label']} htmlFor='title'>Title :</label>
                <input className={style['form-field input']} type='text' id='title' name='title' value={title} onChange={HandleChange} />
          </div>
          
          <div className={style["form-field"]}>
                <label className={style['form-field label']} htmlFor='desc'>Desc :</label>
                <textarea className={style['form-field textarea']} type='text' id='desc' name='desc' value={desc} onChange={HandleChange}/>
          </div>
          <button type='submit'>ADD todo</button>
    </form>
  
  )
}

export default NewTodo
