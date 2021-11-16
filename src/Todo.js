import React from 'react'

const articleStyle = {
backgroundColor: 'CadetBlue',
flex: 1,
margin:'1em',
padding:'1em'
}

const closeButton = {
width:'30px',
textAlign:'center',
color:'red'
}

export default function Todo({todo, toggleTodo, closeTodo, changeDescription}) {
  function handleTodoClick(){
    toggleTodo (todo.id)
  }

  function handleCloseTodoClick(){
    // call the func to close item with id
    closeTodo ( todo.id)
  }

  function handleChangeDescription(event){
    changeDescription(event, todo.id)
  }


function HelloWorldComponent() {
  return <div>Hello World!</div>;
}

  return (
    <article style={articleStyle}>
    <label>
    <input type="checkbox" checked={todo.complete} onChange={handleTodoClick}/>
      {todo.name}
    </label>
    <div>
    <label>Description
    <input type="text" value={todo.description} onChange={handleChangeDescription}></input>
    </label>
    </div>
    <div>
      <button style={closeButton} onClick={handleCloseTodoClick}>X</button>
    </div>
    </article>
  )
}
