import React from 'react'
import Todo from './Todo'

export default function TodoList({todos, toggleTodo, closeTodo, changeDescription}) {
  return (
     todos.map (todo =>{
       return <Todo key={todo.id} toggleTodo = {toggleTodo} closeTodo = {closeTodo} changeDescription = {changeDescription} todo={todo}/>
     })
  )
}
