import { useState,useContext } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { themeContext } from "../../contexts/themeContext";

export default function TodoMain() {
  const [todo, setTodo] = useState([]);

  const addTodo = (val) => {
    setTodo([...todo, val]);
  };

  const deleteTodo = (val) => {
    setTodo(todo.filter((todo) => todo.id !== val));
  };

  const changeStatus = (val) => {
    let value = todo.filter((todo) => todo.id === val);
  };
  const { state } = useContext(themeContext);
  const theme = state.isDarkTheme ? state.darkTheme : state.lightTheme;
  return (
    <div className="d-flex flex-row" >
      <TodoForm addTodo={addTodo} />
      {/* show list of todo in card */}
      {todo.map((todo, index) => (
        <TodoList
          key={index}
          count={index + 1}
          name={todo.todo}
          description={todo.description}
          id={todo.id}
          deleteTodo={deleteTodo}
          changeStatus={changeStatus}
          status={todo.status}
        />
      ))}
    </div>
  );
}
