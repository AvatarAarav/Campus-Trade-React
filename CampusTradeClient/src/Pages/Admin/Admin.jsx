import React from 'react'
import { useEffect } from 'react'
import FindUser from './FindUser'
import Dashboard from './Dashboard'
import Profile from './Profile'
import CardContainer from '../../Components/CardContainer'
import { Box } from '@mui/material'
import UserActivityChart from './ActivityChart'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Admin() {
  const adminLoggedIn=useSelector((state)=>state.admin.loggedIn);
  const navigate=useNavigate();
  useEffect(()=>{
    if(!adminLoggedIn){navigate('/')}
  },[])
  const {_id,name,email,soldOut,reportedAds,activity,prodCount,userCount,revenue}=useSelector(state=>state.admin.adminDetails)
  return (
    <>
      <Box sx={{backgroundColor:'whitesmoke',display: 'flex',width: '100%'}}>
        <FindUser flex={2} />
        <Dashboard flex={3} reportedAds={reportedAds} soldOut={soldOut} prodCount={prodCount} userCount={userCount} revenue={revenue} />
        <Profile flex={2} name={name} email={email}/>
      </Box>
      <Box>
        <UserActivityChart data={activity}/>
      </Box>
      
      <Box>
        <CardContainer />
      </Box>
    </>
    
  )
}

export default Admin