import React from 'react'
import FindUser from './FindUser'
import Dashboard from './Dashboard'
import Profile from './Profile'
import CardContainer from '../../Components/CardContainer'
import { Box } from '@mui/material'
import UserActivityChart from './ActivityChart'
import { useSelector } from 'react-redux'

function Admin() {
  const {_id,name,email,soldOut,reportedAds,activity}=useSelector(state=>state.admin.adminDetails)
  return (
    <>
      <Box sx={{backgroundColor:'whitesmoke',display: 'flex',width: '100%'}}>
        <FindUser flex={2} />
        <Dashboard flex={3} reportedAds={reportedAds} soldOut={soldOut} />
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