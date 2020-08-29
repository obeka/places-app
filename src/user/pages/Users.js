import React from "react";
import UsersList from "../components/UsersList";

function User() {
  const USERS = [
    {
      id: "u1",
      name: "Ömer",
      image: "https://picsum.photos/200/300",
      places: 1,
     },
  ];
  return <UsersList items={USERS} />;
}

export default User;
