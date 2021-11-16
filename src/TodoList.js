import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, toggleTodo, closeTodo}) {
  return (
     todos.map (todo =>{
       return <Todo key={todo.id} toggleTodo = {toggleTodo} closeTodo = {closeTodo} todo={todo}/>
     })
  )
}
