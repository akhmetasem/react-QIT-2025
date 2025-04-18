import React, {  useReducer, useState } from 'react'
import './App.css';


const initinalState = {
    text: "",
    todos: [],
}

function reducer(state, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                todos: [
                    ...state.todos, {
                        id: Date.now(),
                        title: action.payload,
                        completed: false,
                    }
                ]
            }
        case "COMPLETED_TODO":
            return {
                todos: state.todos.map((t) => 
                
                    t.id === action.payload
                    ? {...t, completed: !t.completed}
                    : t
                )
            }
        case "EDIT_TODO":
            return {
                todos: state.todos.map((t) => 
                
                    t.id === action.payload.id
                    ? {...t, title: action.payload.title}
                    : t
                )
            }
    
        default:
            break;
    }
}

console.log(Date.now());




function Todo() {

    const [input, setInput] = useState()
    const [edit, setEdit] = useState()
    const [editTitle, setEditTitle] = useState()
    const [state, dispatch] = useReducer(reducer, initinalState);

    function handleSubmit(e) {
        e.preventDefault()
        dispatch({type: "ADD_TODO", payload: input})
        setInput('')
    }

function handleEdit(id, title) {
    setEdit(id)
    editTitle(title)
}

function handleSave() {
    if (editTitle.trim()) {
        dispatch({type: "EDIT_TODO", payload: {id: edit, title: editTitle}})
    }

    setEdit(null)
    setEditTitle("")
}

  return (
    <section>
    
    <form onSubmit={handleSubmit}>
        <input className='input' type="text" value={input} onInput={(e) => setInput(e.target.value)}/>
        <button>Add</button>
    </form>

    {state.todos.map((todo) => 
    <article key={todo.id}>
        { edit === todo.id 
            && (
                <>
                
                    <input className='input edit' type="text" value={editTitle} onChange={(e) => setEditTitle(e.target.value)}/>
                    <button  className='edit editBtn' onClick={handleSave}>Save</button>
                
                </>
            )
        }

        
            <input className='check' type="checkbox" onChange={() => dispatch({type: "COMPLETED_TODO", payload: todo.id})}/>
            <h1 onDoubleClick={() => handleEdit(todo.id, todo.title)} className={todo.completed ? "completed" : "unCompleted"}>{todo.title}</h1>
        </article>

    )}
    
    </section>
  )
}

export default Todo