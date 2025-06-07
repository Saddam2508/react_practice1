import React, { useState } from "react";
import useUsersContext from "../hooks/useUsersContext";

const NewUser = () => {
  const [newUser, setNewuser] = useState("");
  const { addUser } = useUsersContext();

  const handleSubmit = (e) => {
    e.preventDefault();
    const addUsers = { id: new Date().getTime().toString(), name: newUser };
    addUser(addUsers);
    setNewuser("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={newUser}
          onChange={(e) => {
            setNewuser(e.target.value);
          }}
        />
        <button type="submit">Add user</button>
      </form>
    </div>
  );
};

export default NewUser;
