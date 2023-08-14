import { useEffect, useReducer } from "react";
import { todoReducer } from "../08-UseResucer/todoReducer";






export const useTodos = (  )=>{

  

const initialState =[    
]

const init =() =>{
  return JSON.parse(localStorage.getItem('todos')) || [];
}
const [todos, dispatchTodo ] = useReducer(todoReducer, initialState ,init)


useEffect(() => {
  localStorage.setItem('todos' ,JSON.stringify(todos))       
  
  
}, [todos])

const handleNewTodo = ( todo) =>{
  const action =
  { type: 'AddTodo',
  payload : todo}

  

  dispatchTodo(action);
  

}

const handleDeltodo =(id) =>{
  dispatchTodo({
    type: 'DelTodo',
    payload : id
  });
  

}
const handleToggletodo =(id) =>{
 
   dispatchTodo({
    type: 'Toggletodo',
    payload : id
  }); 
  

}


return {

  todos,
  allcount :todos.length ,
  pendientes : todos.filter(todo=> !todo.done).length ,
  handleNewTodo,
  handleDeltodo,
  handleToggletodo,

}
}