import {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList'
import MyFuncComponent from './MyFuncComponent'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

function App() {
  const [todos, setTodos] = useState ([])
  const todoNameRef = useRef()

  useEffect(()=>{
// load in todos from local storage
// this is only called on init as empty array [] won't change
    const storedTodos = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY))
    if (storedTodos) setTodos(storedTodos)
  },[])

useEffect (()=>{
// 1st param is the func, 2nd is the object in the State that is being 'watched' for changes
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))},
   [todos])

function toggleTodo (id) {
  const newTodos = [...todos]
// find the first todo that matches it's id
  const todo = newTodos.find(todo=>todo.id === id)
  todo.complete =!todo.complete
  setTodos(newTodos)
}

  function handleAddTodo(e){
    const name = todoNameRef.current.value // refrences an element
    if (name==='') return
    console.log(name)
    setTodos(prevTodos =>{
      return [...prevTodos,
        {id:uuidv4(),
         name: name,
         complete:false
       }]
    })
    todoNameRef.current.value = null


  }

  return (
    <main>
    <TodoList todos = {todos}/>
    <input ref={todoNameRef} type="text"/>
    <button onClick = {handleAddTodo}> Add Todo </button>
    <button> Clear Todos </button>
    <div> left to do</div>
    <MyFuncComponent/>
  </main>
  );
}

export default App;
