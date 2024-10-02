import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { deleteUser } from "../../redux/userReducer";
import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";

const UserList = () => {
  const users = useSelector((state) => state.users?.users);
  const dispatch = useDispatch();

  const handleDelete = (id) => {
    dispatch(deleteUser(id));
  };

  return (
    <div className="mt-5">
      <h2 className="text-xl">All Users</h2>
      <ul className="border p-2 flex flex-col gap-2 mt-2 bg-gray-50 rounded-md">
        {(users?.length &&
          users.map((user, ind) => (
            <li
              key={ind}
              className="w-full flex justify-between items-center bg-gray-100 p-2 rounded-md"
            >
              <div className="flex gap-2 items-center">
                {user.name} ({user.email})
              </div>
              <Button
                size="icon"
                variant="destructive"
                onClick={() => handleDelete(user.id)}
              >
                <Trash />
              </Button>
            </li>
          ))) || <p>No users found</p>}
      </ul>
    </div>
  );
};

export default UserList;
