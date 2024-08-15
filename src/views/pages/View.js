import React, { useState, useEffect } from "react";
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import axios from "axios";

const View = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4001")
      .then((result) => setUsers(result.data))
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:4001/deleteUser/${id}`)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <div style={{ backgroundColor: "rgb(36, 187, 224)", height: "100vh" }}>
        <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 768,
          height: "auto",
          padding:"20px"
        },
      }}
    >
      <Paper style={{marginTop:"20%", marginLeft:"30%"}} >
      <Link to="/add-conference"><Button variant="contained" color="success">Add +</Button></Link>

        <table
          className="table"
         
        >
        
          <thead>
            <tr>
              <th>Conference Name</th>
              <th style={{paddingLeft:"35px"}}>Conference Time</th>
              <th style={{paddingLeft:"35px"}}>Conference Day</th>
              <th style={{paddingLeft:"35px"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td >{user.name}</td>
                <td style={{paddingLeft:"35px"}}>{user.time}</td>
                <td style={{paddingLeft:"35px"}}>{user.day}</td>
                <td style={{display:"flex",flexDirection:"row", paddingLeft:"35px"}}>
                {console.log(user._id)}
                <Link to={`/update-conference/${user._id}`}> <Button variant="contained" color="success">Update</Button></Link>
                  <Button variant="contained" color="error" onClick={() => handleDelete(user._id)}>Delete</Button>
                  <Link to={`/view-conference/${user._id}`}><Button variant="contained">View</Button></Link>
                  </td>
              </tr>
            ))}
          </tbody>
        </table>
        </Paper>
        </Box>
      </div>
    </>
  );
};

export default View;
