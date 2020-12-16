import { fetch_Users } from "../actions/Types";

const initialState = {
  usersData: [],
};

const UsersReducer = (state = initialState, action) => {
  switch (action.type) {
    case fetch_Users:
      return {
        ...state,
        usersData: [...state.usersData, action.payload],
      };
    default:
      return state;
  }
};

export default UsersReducer;
