import { createContext, useReducer } from "react";
import { reducer } from "../reducer/usersReducer";

export const UsersContext = createContext();

const initialState = {
  users: [
    { id: 1, name: "Saddam" },
    { id: 2, name: "Asgor" },
  ],
};

const UsersProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = {
    users: state.users,
    addUser: (newUser) => {
      dispatch({ type: "ADD_USER", payload: newUser });
    },
    deleteUser: (id) => {
      dispatch({ type: "DELETE_USER", payload: id });
    },
  };

  return (
    <UsersContext.Provider value={value}>{children}</UsersContext.Provider>
  );
};

export default UsersProvider;
