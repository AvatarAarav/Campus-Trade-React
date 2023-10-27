import React from 'react'
import FindUser from './FindUser'
import Dashboard from './Dashboard'
import Profile from './Profile'
import CardContainer from '../../components/CardContainer'
import { Box } from '@mui/material'

function Admin() {
  return (
    <>
      <Box sx={{backgroundColor:'whitesmoke',display: 'flex',width: '100%'}}>
        <FindUser flex={2} />
        <Dashboard flex={3} />
        <Profile flex={2} />
      </Box>
      <Box>
        <CardContainer />
      </Box>
    </>
    
  )
}

export default Admin