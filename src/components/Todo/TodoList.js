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
                            <a href="#" className="card-link">Card link</a>
                            <a href="#" className="card-link">Another link</a>
                        </div>
                    </div>
                    
                ))
            }
        </div>
    )
}