import {useState} from 'react' 
import TodoForm from './TodoForm'

import {todoContext} from '../../contexts/TodoContext'

export default function TodoMain(){
    const[todo,setTodo]=useState([])

    console.log(todo);
    return (
        <>
            <TodoForm setTodo={setTodo}/>
        </>
    )
}