import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
    var[data,setData]=useState([])
    useEffect(()=>{
       axios.get("https://jsonplaceholder.typicode.com/users")
        .then((res)=>{console.log(res.data)
        setData(res.data)
        })
        .catch((err)=>{console.log(err)})
    })
  return (
    <div>
      <TableContainer>
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Name</TableCell>
                    <TableCell>Email</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                {data.map((val,i)=>{
                    return(
                        <TableRow key={i}>
                            <TableCell>{val.id}</TableCell>
                            <TableCell>{val.name}</TableCell>
                            <TableCell>{val.email}</TableCell>
                        </TableRow>
                    )
                    
                })}
            </TableBody>
        </Table>
      </TableContainer>
    </div>
  )
}

export default Home

