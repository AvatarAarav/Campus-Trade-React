import styled from '@emotion/styled'
import { LinkedIn, LocationOn, Mail, School } from '@mui/icons-material'
import { Avatar, Box, Button, ButtonGroup, Card, Container, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material'
import React from 'react'

const Box2 = styled(Box) ({
    display:'flex',
    flexDirection:'column',
    padding:'20px',
    justifyContent:'center',
    alignItems:'center',
    gap:'10px',
})
const Profile = () => {
  return (
    <Box sx={{margin:'20px',display: {xs: 'none', sm: 'block'}}}>
        <Card>
            <Box2>
                <Avatar sx={{width:'100px',height:'100px'}} />
                <Typography variant='h6'>Admin</Typography>
                <ButtonGroup variant="contained" aria-label="outlined primary button group">
                    <Button><Mail /></Button>
                    <Button><School /></Button>
                    <Button><LinkedIn /></Button>
                </ButtonGroup>
            </Box2>
        </Card>
    </Box>
  )
}

export default Profile