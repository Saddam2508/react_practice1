import React from "react";
import useUsersContext from "../hooks/useUsersContext";
import User from "./User";

const Users = () => {
  const { users } = useUsersContext();
  return (
    <section>
      {users.map((user) => (
        <User user={user} />
      ))}
    </section>
  );
};

export default Users;
