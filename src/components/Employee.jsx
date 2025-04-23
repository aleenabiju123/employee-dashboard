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
      <form align="center">
       <Box sx={{padding:4,
            backgroundColor:"white",
            borderRadius:2,
            marginTop:5,
            boxShadow:3}}>
      <Typography variant='h4' gutterBottom>Signup Form</Typography>
      <TextField fullWidth label="Name" variant="outlined" name='Fname'  onChange={inputHandler}/><br></br><br></br>
      <TextField fullWidth label="Designation" variant="outlined" name="dname" onChange={inputHandler} /><br></br><br></br>
      <TextField fullWidth label="Location" variant="outlined" name="lname" onChange={inputHandler} /><br/><br/>
      <TextField fullWidth label="Salary" variant="outlined" name="salary" onChange={inputHandler} /><br/><br/>
      <Button variant="contained">Submit</Button>
      </Box>
      </form>
    </div>
  )
}

export default Employee
