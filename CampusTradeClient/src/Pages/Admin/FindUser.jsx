import { BeachAccess, Image, Search, Work } from '@mui/icons-material'
import { Avatar, Box, Container, InputBase, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Paper, styled } from '@mui/material'
import React from 'react'

const StyledBox = styled(Paper) ({
    overflow:'auto',
    width:'50%',
    height: '500px',
    margin:'20px',
    padding:'10px',
})
const StyledDiv = styled('div') ({
    display:'flex',
    alignItems:'center',
    padding:'10px',
    gap:'10px',
})

const FindUser = () => {
  return (
    
    <StyledBox sx={{display: {xs: 'none', sm: 'block'}}}>
        <StyledDiv color='primary'>
            <Search />
            <InputBase placeholder='Find User'/>
        </StyledDiv>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItemButton >
                <ListItemAvatar>
                <Avatar src='' alt='Sharan'/>
                </ListItemAvatar>
                <ListItemText primary="Sharan" secondary="Jan 9, 2014" />
            </ListItemButton>
            <ListItemButton >
                <ListItemAvatar>
                <Avatar src='' alt='Kumar'/>
                </ListItemAvatar>
                <ListItemText primary="Kumar" secondary="Jan 7, 2014" />
            </ListItemButton>
            <ListItemButton >
                <ListItemAvatar>
                <Avatar src='' alt='Pratyush'/>
                </ListItemAvatar>
                <ListItemText primary="Pratyush" secondary="July 20, 2014" />
            </ListItemButton>
            <ListItemButton >
                <ListItemAvatar>
                <Avatar src='' alt='Harshan'/>
                </ListItemAvatar>
                <ListItemText primary="Harshan" secondary="July 20, 2014" />
            </ListItemButton>
            <ListItemButton >
                <ListItemAvatar>
                <Avatar src='' alt='Aarav'/>
                </ListItemAvatar>
                <ListItemText primary="Aarav" secondary="July 20, 2014" />
            </ListItemButton>
            <ListItemButton >
                <ListItemAvatar>
                <Avatar src='' alt='Parth'/>
                </ListItemAvatar>
                <ListItemText primary="Parth" secondary="July 20, 2014" />
            </ListItemButton>
            
        </List>
    </StyledBox>
    
  )
}

export default FindUser