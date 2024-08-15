import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";

const ViewConf = () => {
  const [users, setUsers] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`http://localhost:4001/viewdata/${id}`)
      .then(response => {
        setUsers(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the users!', error);
      });
  }, [id]);

  return (
    <div>
      <h2>Registered Users</h2>
      {users.length > 0 ? (
        <ul>
          {users.map(user => (
            <li key={user._id}>
              <strong>Name:</strong> {user.name}<br />
              <strong>Mobile:</strong> {user.mobile}<br />
              <strong>Address:</strong> {user.address}<br />
              <strong>Feedback:</strong> {user.feedback}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users registered yet.</p>
      )}
    </div>
  );
}

export default ViewConf;
