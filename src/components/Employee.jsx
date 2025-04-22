import { Box, Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Employee = () => {
    var[input,setInput]=useState({})
        const inputHandler=(e)=>{
            setInput({...input,[e.target.value]:e.target.value})
            console.log(input)
        }
  return (
    <div>
       <Box sx={{padding:4,
            backgroundColor:"white",
            borderRadius:2,
            marginTop:5,
            boxShadow:3}}>
      <Typography variant='h4' gutterBottom>Signup Form</Typography>
      <TextField label="Fullname" variant="outlined" name='Fname'  onChange={inputHandler}/><br></br><br></br>
      <TextField label="Email" variant="outlined" name="Email" onChange={inputHandler} /><br></br><br></br>
      <TextField label="Password" variant="outlined" name="Password" onChange={inputHandler} /><br/><br/>
      <Button variant="contained">SignUp</Button>
      </Box>
    </div>
  )
}

export default Employee
