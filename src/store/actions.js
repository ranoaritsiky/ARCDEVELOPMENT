export const ADD_USER = "add users";
export const DELETE_USER = "delete users";

export const usersInitialState = [
  
];

export const add_user = (user) => {
  return {
    type: ADD_USER,
    user,
  };
};

export const delete_user = (index) => {
  return {
    type: DELETE_USER,
    index,
  };
};
