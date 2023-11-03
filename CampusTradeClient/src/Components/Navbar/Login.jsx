import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, LinearProgress, Typography } from '@mui/material'
import { Backdrop, Button, Checkbox, Fade, FormControl, FormControlLabel, FormHelperText, InputAdornment, InputLabel, Modal, OutlinedInput, TextField } from '@mui/material';
import React, { useState, useTransition } from 'react'

const style = {
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '330px',
    bgcolor: 'background.paper',
    borderRadius: 2,
    boxShadow: 24,
    p: 4,
  };

const Login = ({openModalLogin, handleCloseLogin, toSignup}) => {


    const [showPassword, setShowPassword] = useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);
  
    const handleMouseDownPassword = (event) => {
      event.preventDefault();
    };

    const [email,setemail] = useState('');
    const [password,setpassword] = useState('');

    const handleLogin = () => {
      alert(`email : ${email}, password : ${password}`)
      console.log(`email : ${email} password : ${password}`);
    }

  return (
    <Box>
        <Modal
            aria-labelledby="transition-modal-title"
            aria-describedby="transition-modal-description"
            open={openModalLogin}
            onClose={handleCloseLogin}
            closeAfterTransition
            slots={{ backdrop: Backdrop }}
            slotProps={{
              backdrop: {
                timeout: 500,
              },
            }}
          >
            <Fade in={openModalLogin}>
            
              <Box sx={style}>
              
                <Typography color='primary' sx={{fontSize:'xx-large', marginBottom:'20px'}} variant='h5' component='h5'>Login</Typography>
                <LinearProgress />
                <TextField
                  onChange={(e) => setemail(e.target.value)}
                  sx={{width: '300px', margin:'10px'}}
                  // error
                  id="outlined-error"
                  label="email"
                  defaultValue=""
                />
                <FormControl sx={{ width: '300px', margin:'10px' }} variant="outlined">
                  <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
                  <OutlinedInput
                  onChange={(e) => setpassword(e.target.value)}
                    id="outlined-adornment-password"
                    type={showPassword ? 'text' : 'password'}
                    endAdornment={
                      <InputAdornment position="end">
                        <IconButton
                          aria-label="toggle password visibility"
                          onClick={handleClickShowPassword}
                          onMouseDown={handleMouseDownPassword}
                          edge="end"
                        >
                          {showPassword ? <VisibilityOff /> : <Visibility />}
                        </IconButton>
                      </InputAdornment>
                    }
                    label="Password"
                  />
                </FormControl>
                <FormControlLabel control={<Checkbox defaultChecked />} label="admin" />
                <Button sx={{width: '300px', margin:'10px'}} variant='contained' onClick={handleLogin}>Login</Button>
                <Button sx={{width: '300px', margin:'10px'}} variant='outlined' onClick={toSignup}>Register</Button>
              </Box>
            </Fade>
          </Modal>
    </Box>
  )
}

export default Login