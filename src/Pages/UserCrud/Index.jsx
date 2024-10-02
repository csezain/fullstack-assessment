import React from "react";
import UserForm from "./Form";
import UserList from "./UserList";

const UserCrud = () => {
  return (
    <div className="max-w-4xl mx-auto p-10">
      <h1 className="text-2xl font-bold text-foreground/80 mb-5">User Crud</h1>
      <UserForm />
      <UserList />
    </div>
  );
};

export default UserCrud;
