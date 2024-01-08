import { BeachAccess, Delete, Image, Mail, Search, Work } from '@mui/icons-material'
import { Avatar, Box, Container, InputBase, List, ListItem, ListItemAvatar, ListItemButton, ListItemText, Paper, styled } from '@mui/material'
import React from 'react'
import { getalluserAPI } from '../../apis'
import { useEffect } from 'react'
const StyledBox = styled(Paper) ({
    overflow:'auto',
    width:'40%',
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

    useEffect(() => {
        async function fetchdata() {
          try {
            const data = await getalluserAPI();
           
            console.log(data);
            console.log(data.data)
            console.log(data.data.data[0])
          } catch (error) {
            // Handle errors here
            console.error("Error fetching data:", error);
          }
        }
        fetchdata();
      }, []);

  return (
    
    <StyledBox sx={{display: {xs: 'none', sm: 'block'}}}>
        <StyledDiv color='primary'>
            <Search />
            <InputBase placeholder='Find Seller'/>
        </StyledDiv>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
            <ListItemButton >
                <ListItemAvatar>
                <Avatar src='' alt='Sharan'/>
                </ListItemAvatar>
                <ListItemText primary="Sharan" secondary="Jan 9, 2014" />
                <ListItemAvatar>
                <Mail fontSize='large' sx={{color:'dodgerblue'}} />{" "}
                <Delete fontSize='large' sx={{color:'orange'}}/>
                </ListItemAvatar>
            </ListItemButton>
            <ListItemButton >
                <ListItemAvatar>
                <Avatar src='' alt='Sharan'/>
                </ListItemAvatar>
                <ListItemText primary="Sharan" secondary="Jan 9, 2014" />
                <ListItemAvatar>
                <Mail fontSize='large' sx={{color:'dodgerblue'}} />{" "}
                <Delete fontSize='large' sx={{color:'orange'}}/>
                </ListItemAvatar>
            </ListItemButton>
            <ListItemButton >
                <ListItemAvatar>
                <Avatar src='' alt='Sharan'/>
                </ListItemAvatar>
                <ListItemText primary="Sharan" secondary="Jan 9, 2014" />
                <ListItemAvatar>
                <Mail fontSize='large' sx={{color:'dodgerblue'}} />{" "}
                <Delete fontSize='large' sx={{color:'orange'}}/>
                </ListItemAvatar>
            </ListItemButton>
            <ListItemButton >
                <ListItemAvatar>
                <Avatar src='' alt='Sharan'/>
                </ListItemAvatar>
                <ListItemText primary="Sharan" secondary="Jan 9, 2014" />
                <ListItemAvatar>
                <Mail fontSize='large' sx={{color:'dodgerblue'}} />{" "}
                <Delete fontSize='large' sx={{color:'orange'}}/>
                </ListItemAvatar>
            </ListItemButton>
            <ListItemButton >
                <ListItemAvatar>
                <Avatar src='' alt='Sharan'/>
                </ListItemAvatar>
                <ListItemText primary="Sharan" secondary="Jan 9, 2014" />
                <ListItemAvatar>
                <Mail fontSize='large' sx={{color:'dodgerblue'}} />{" "}
                <Delete fontSize='large' sx={{color:'orange'}}/>
                </ListItemAvatar>
            </ListItemButton>
            <ListItemButton >
                <ListItemAvatar>
                <Avatar src='' alt='Sharan'/>
                </ListItemAvatar>
                <ListItemText primary="Sharan" secondary="Jan 9, 2014" />
                <ListItemAvatar>
                <Mail fontSize='large' sx={{color:'dodgerblue'}} />{" "}
                <Delete fontSize='large' sx={{color:'orange'}}/>
                </ListItemAvatar>
            </ListItemButton>
            <ListItemButton >
                <ListItemAvatar>
                <Avatar src='' alt='Sharan'/>
                </ListItemAvatar>
                <ListItemText primary="Sharan" secondary="Jan 9, 2014" />
                <ListItemAvatar>
                <Mail fontSize='large' sx={{color:'dodgerblue'}} />{" "}
                <Delete fontSize='large' sx={{color:'orange'}}/>
                </ListItemAvatar>
            </ListItemButton>
            
        </List>
    </StyledBox>
    
  )
}

export default FindUser