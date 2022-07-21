export default function TodoList(props) {
    
    return (
        <div className="d-flex flex-row m-2 w-20">
            <div  className="card m-2" style={{"width": "18rem"}}>
                <div className="card-body">
                    <h5 className="card-title">{props.count} - {props.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">Description</h6>
                    <p className="card-text">
                        {props.description}
                    </p>
                    <button className="btn btn-primary" onClick={()=>props.changeStatus(props.id)}>Done</button>
                    <button className="btn btn-secondary m-2" onClick={()=>props.deleteTodo(props.id)}>Delete</button>
                </div>
            </div>
        </div>
    )
}