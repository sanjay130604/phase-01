
import { useEffect, useState } from "react";
import api from "../services/api";

const UsersList = () => {
  const [users, setUsers] = useState([]); // State to store fetched users

  useEffect(() => {
    // Make API request to fetch users
    api.get("/users")
      .then((response) => setUsers(response.data)) // Set users in state
      .catch((error) => console.error(error)); // Log error if request fails
  }, []);

  return (
    <div>
      <h2>Users List</h2>
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li> // Render users dynamically
        ))}
      </ul>
    </div>
  );
};

export default UsersList;
