import * as actions from './actions'


export const users=(state=actions.usersInitialState,action)=>{
    switch (action.type){
        case actions.ADD_USER:
            // action.user=> user est le parametre envoyer dans action
            // export const add_user=(user)
            return [...state,action.user]

        case actions.DELETE_USER:
            return state.filter((user,index)=>index !== action.index)
        default:
            return state
    }
}