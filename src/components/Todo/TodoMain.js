import {useState} from 'react' 
import TodoForm from './TodoForm'
import TodoList from './TodoList'

import {todoContext} from '../../contexts/TodoContext'

export default function TodoMain(){
    const [todo, setTodo] = useState([])
    
    const addTodo = (val) => {
        setTodo([...todo,val])
    }

    return (
        <div className="d-flex flex-row">
            <TodoForm addTodo={addTodo}/>
            <TodoList todoList={todo}/>
        </div>
    )
}