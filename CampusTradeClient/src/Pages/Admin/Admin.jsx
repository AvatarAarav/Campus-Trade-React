import React from 'react'
import FindUser from './FindUser'
import Dashboard from './Dashboard'
import Profile from './Profile'
import CardContainer from '../../Components/CardContainer'
import { Box } from '@mui/material'
import UserActivityChart from './ActivityChart'

function Admin() {
  const chartData = {
    labels: ['2024-01-01', '2024-01-02', '2024-01-03', '2024-01-04', '2024-01-05'],
    values: [5, 8, 12, 6, 10],
  };
  return (
    <>
      <Box sx={{backgroundColor:'whitesmoke',display: 'flex',width: '100%'}}>
        <FindUser flex={2} />
        <Dashboard flex={3} />
        <Profile flex={2} />
      </Box>
      <Box>
        <UserActivityChart data={chartData}/>
      </Box>
      
      <Box>
        <CardContainer />
      </Box>
    </>
    
  )
}

export default Admin