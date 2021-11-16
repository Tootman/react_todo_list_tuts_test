import {useState, useRef, useEffect} from 'react';
import TodoList from './TodoList'
import MyFuncComponent from './MyFuncComponent'
import { v4 as uuidv4 } from 'uuid';

const LOCAL_STORAGE_KEY = 'todoApp.todos'

const todoListStyle = {
display: 'flex',
flexWrap: 'wrap'
}

function App() {
  // ?? useStatte returns an array of 2 items. 1st is oldState, 2nd is callback for to change
  //
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

function closeTodo (id) {
  const newTodos = [...todos]
// find the first todo that matches it's id
  const todo = newTodos.find(todo=>todo.id === id)
  // ar = ar.filter(item => !(item > 3));
  const filteredTodos = newTodos.filter(item =>(item.id!=id))
  console.log ("removing item with id= "+ id, filteredTodos)
  setTodos(filteredTodos)

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
    <section style={todoListStyle}>
      <TodoList todos = {todos} toggleTodo={toggleTodo} closeTodo = {closeTodo}/>
    </section>
    <input ref={todoNameRef} type="text"/>
    <button onClick = {handleAddTodo}> Add Todo </button>
    <button> Clear Todos </button>
    <div> left to do</div>
    <MyFuncComponent/>
  </main>
  );
}

export default App;
