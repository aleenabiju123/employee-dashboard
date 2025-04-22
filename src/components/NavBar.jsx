import { AppBar, Box, Button, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu';
import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
       <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Employee Dashboard
          </Typography>
          <Button><Link to={'/'} style={{textDecoration:'none',color:"white"}}>Home</Link></Button>
          <Button><Link to={'/e'} style={{textDecoration:'none',color:"white"}}>Employee Form</Link></Button>
        </Toolbar>
      </AppBar>
    </Box>
    </div>
  )
}

export default NavBar

