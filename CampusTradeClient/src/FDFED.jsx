import React, { useEffect, useState } from 'react'
// import { Outlet,Link} from 'react-router-dom'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import AboutUs from './Pages/AboutUs/AboutUs'
import Layout from './Layout'
import axios from 'axios'
import { List, ListItem, ListItemButton } from '@mui/material'
const FDFED = () => {

  const [users,setusers] = useState([])
  const [count,setcount] = useState(1);

  useEffect(() =>  {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(res => {  
        console.log(count);
        console.log(res.data);
        setcount(() => count+1);
        setusers(res.data);
      })
      .catch(err => {
        console.log(err);
      })
  },[])
  
  return (
    <>
    <center>
      <h2>users</h2>
    </center>
    <List>
    {users.map(element => <ListItemButton key={element.id}>{element.email}</ListItemButton>)}
    </List>
    </>
  )
}

export default FDFED