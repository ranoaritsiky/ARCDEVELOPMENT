export default function TodoList(props) {
    return (
        <div className="d-flex flex-row m-2 w-20">
            {
                props.todoList.map((todo, index) => (
                    <div key={index} className="card m-2" style={{"width": "18rem"}}>
                        <div className="card-body">
                            <h5 className="card-title">{index + 1}-{todo.todo}</h5>
                            <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                            <p className="card-text">
                                {todo.description}
                            </p>
                            <button className="btn btn-primary">Done</button>
                            <button className="btn btn-secondary m-2">Delete</button>
                            <button className="btn btn-danger">Cancel</button>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )
}