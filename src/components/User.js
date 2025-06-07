import React from "react";
import useUsersContext from "../hooks/useUsersContext";

const User = ({ user }) => {
  const { id, name } = user;
  const { deleteUser } = useUsersContext();
  const handleDelete = (id) => {
    deleteUser(id);
  };
  return (
    <article>
      <h1>{id}</h1>
      <h4>{name}</h4>
      <button
        onClick={() => {
          handleDelete(id);
        }}
      >
        Delete
      </button>
    </article>
  );
};

export default User;
