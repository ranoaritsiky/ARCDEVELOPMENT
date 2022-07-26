import {connect} from 'react-redux';
import UserForm from './UserForm';

function User(props){
    return (
        <div>
            <ul>
                {props.users.map((user,index)=>(
                    <li key={index}>
                        {user.firstName} - {user.lastName}
                    </li>
                ))}
            </ul>
            <hr/>
            <UserForm/>
        </div>
    )
}

export default connect((state)=>{
    return {
        users:state
    }

})(User)