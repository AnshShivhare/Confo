import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import { TextField, Button, Container, Typography, Box } from '@mui/material';

const RegisterConf = () => {
  const [formData, setFormData] = useState({
    name: '',
    mobile: '',
    address: '',
    feedback: ''
  });
  const { id } = useParams();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post(`http://localhost:4001/register/${id}`, formData)
      .then(response => {
        console.log('Form Data Submitted: ', response.data);
        navigate("/home");
      })
      .catch(error => {
        console.error('There was an error submitting the form!', error);
      });
  };

  return (
    <Container maxWidth="sm">
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Registration
        </Typography>
        <TextField
          fullWidth
          margin="normal"
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Mobile Number"
          name="mobile"
          value={formData.mobile}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Address"
          name="address"
          multiline
          rows={4}
          value={formData.address}
          onChange={handleChange}
          required
        />
        <TextField
          fullWidth
          margin="normal"
          label="Feedback"
          name="feedback"
          multiline
          rows={4}
          value={formData.feedback}
          onChange={handleChange}
          required
        />
        <Button variant="contained" color="primary" type="submit" sx={{ mt: 2 }}>
          Submit
        </Button>
      </Box>
    </Container>
  );
}

export default RegisterConf;
