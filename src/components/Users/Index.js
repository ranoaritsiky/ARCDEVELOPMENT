import {connect} from 'react-redux';

function User(props){
    return (
        <div>
            <ul>
                {props.users.map((user,index)=>(
                    <li key={index}>
                        {user.firstName}- {user.lastName}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default connect((state)=>{
    return {
        users:state
    }

})(User)