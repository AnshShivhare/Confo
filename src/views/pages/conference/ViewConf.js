import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const ViewConf = () => {
    const [users, setUsers] = useState([]);

    useEffect(() => {
      axios.get('http://localhost:4001')
        .then(result => setUsers(result.data))
        .catch(err => console.log(err));
    }, []);
  
    
  return (
    <>
     
    <div >
      <div style={{backgroundColor: "rgb(36, 187, 224)", height: "100vh"}}>
      <Box
      sx={{
        display: 'flex',
        flexWrap: 'wrap',
        '& > :not(style)': {
          m: 1,
          width: 608,
          height: "auto",
          padding:"20px"
        },
      }}
    >
      <Paper style={{marginTop:"20%", marginLeft:"30%"}} >
        <table className='table'>
          <thead>
            <tr>
              <th>Conference Name</th>
              <th style={{paddingLeft:"30px"}}>Conference Time</th>
              <th style={{paddingLeft:"30px"}}> Conference Day</th>
              <th style={{paddingLeft:"30px"}}>Action</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id}>
                <td >{user.name}</td>
                <td style={{paddingLeft:"30px"}}>{user.time}</td>
                <td style={{paddingLeft:"30px"}}>{user.day}</td>
                <td style={{paddingLeft:"30px"}}>
                <Link to={`/register/${user._id}`} ><Button variant="contained" color="success">Register</Button></Link>
           
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        </Paper>
        </Box>
      </div>
    </div>
    
  </>
  )
}

export default ViewConf