import React from 'react'
import { useEffect } from 'react'
import FindUser from './FindUser'
import Dashboard from './Dashboard'
import Profile from './Profile'
import Announcements from './Announcements'
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
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  
  const {_id,name,email,college,soldOut,reportedAds,activity,prodCount,userCount,revenue}=useSelector(state=>state.admin.adminDetails)
  return (
    <>
      <Box sx={{backgroundColor:'whitesmoke',display: 'flex',width: '100%', height:'100vh'}}>
        <FindUser flex={2} />
        <Dashboard flex={3} reportedAds={reportedAds} soldOut={soldOut} prodCount={prodCount} userCount={userCount} revenue={revenue} />
        <Profile flex={2} />
      </Box>
      <Box>
        <UserActivityChart data={activity}/>
      </Box>
      
      <Box>
        <CardContainer />
      </Box>

      <Box sx={{width:'90vw', backgroundColor:'lavender', margin:' 100px auto'}}>
       <Announcements />
      </Box>
      


    </>
    
  )
}

export default Admin