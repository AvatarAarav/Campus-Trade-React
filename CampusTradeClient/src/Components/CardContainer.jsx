import { CurrencyRupee, Favorite, FavoriteBorder } from '@mui/icons-material'
import { Autocomplete, Box, Button, Card, CardActionArea, CardActions, CardContent, CardMedia, Checkbox, TextField, Typography } from '@mui/material'
import React from 'react'

const CardContainer = () => {

    const products = [
        { label: 'laptop', year: 1994 },
        { label: 'backpack', year: 1972 },
        { label: 'earphones', year: 1974 },
        { label: 'bat', year: 2008 },
        { label: 'watch', year: 1957 },
        { label: 'neckband', year: 1993 },
        { label: 'books', year: 1994 },
    ]
  return (
    <Box sx={{ width:'100%', height:'900px', display:'flex', flexDirection:'column', alignItems:'center', marginTop:'30px'}}>
        <Box sx={{width:'100%',maxWidth:'1060px',display:'flex',padding:'20px 0px', justifyContent:'space-evenly',alignItems:'center',backgroundColor:'lightsalmon'}}>
            <Typography variant='h4' >All Products</Typography>
            <Autocomplete
                
                disablePortal
                id="combo-box-demo"
                options={products}
                sx={{ width: 300,}}
                renderInput={(params) => <TextField  {...params} label="Search" />}
            />
        </Box>
        <Box sx={{width:'100%',maxWidth:'980px',display:'flex',gap:'30px',flexWrap:'wrap',overflowY:'auto',height:'700px',padding:{xs:'0px',sm:'40px'},backgroundColor:'whitesmoke'}}>
            <Card sx={{ width: 300, height: 430 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="300"
                    src='https://picsum.photos/300/300'
                    alt="green iguana"
                    />
                    <CardContent sx={{padding:'10px 20px 0px 20px'}}>
                    <Typography gutterBottom variant="h6" color="text.secondary" component="div">
                        Product
                    </Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <Typography component='span' variant="h5" >
                            300
                        </Typography>
                        <span><CurrencyRupee /></span>
                    </Box>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Box sx={{width:'100%',display:'flex',marginTop:'-8px',padding:'0px 10px',justifyContent:'space-between',alignItems:'center'}}>
                    <Button size="small" variant='contained'>
                    Buy now
                    </Button>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </Box>
                </CardActions>
            </Card>

            <Card sx={{ width: 300, height: 430 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="300"
                    src='https://picsum.photos/300/300'
                    alt="green iguana"
                    />
                    <CardContent sx={{padding:'10px 20px 0px 20px'}}>
                    <Typography gutterBottom variant="h6" color="text.secondary" component="div">
                        Product
                    </Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <Typography component='span' variant="h5" >
                            300
                        </Typography>
                        <span><CurrencyRupee /></span>
                    </Box>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Box sx={{width:'100%',display:'flex',marginTop:'-8px',padding:'0px 10px',justifyContent:'space-between',alignItems:'center'}}>
                    <Button size="small" variant='contained'>
                    Buy now
                    </Button>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </Box>
                </CardActions>
            </Card>

            <Card sx={{ width: 300, height: 430 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="300"
                    src='https://picsum.photos/300/300'
                    alt="green iguana"
                    />
                    <CardContent sx={{padding:'10px 20px 0px 20px'}}>
                    <Typography gutterBottom variant="h6" color="text.secondary" component="div">
                        Product
                    </Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <Typography component='span' variant="h5" >
                            300
                        </Typography>
                        <span><CurrencyRupee /></span>
                    </Box>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Box sx={{width:'100%',display:'flex',marginTop:'-8px',padding:'0px 10px',justifyContent:'space-between',alignItems:'center'}}>
                    <Button size="small" variant='contained'>
                    Buy now
                    </Button>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </Box>
                </CardActions>
            </Card>

            <Card sx={{ width: 300, height: 430 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="300"
                    src='https://picsum.photos/300/300'
                    alt="green iguana"
                    />
                    <CardContent sx={{padding:'10px 20px 0px 20px'}}>
                    <Typography gutterBottom variant="h6" color="text.secondary" component="div">
                        Product
                    </Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <Typography component='span' variant="h5" >
                            300
                        </Typography>
                        <span><CurrencyRupee /></span>
                    </Box>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Box sx={{width:'100%',display:'flex',marginTop:'-8px',padding:'0px 10px',justifyContent:'space-between',alignItems:'center'}}>
                    <Button size="small" variant='contained'>
                    Buy now
                    </Button>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </Box>
                </CardActions>
            </Card>

            <Card sx={{ width: 300, height: 430 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="300"
                    src='https://picsum.photos/300/300'
                    alt="green iguana"
                    />
                    <CardContent sx={{padding:'10px 20px 0px 20px'}}>
                    <Typography gutterBottom variant="h6" color="text.secondary" component="div">
                        Product
                    </Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <Typography component='span' variant="h5" >
                            300
                        </Typography>
                        <span><CurrencyRupee /></span>
                    </Box>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Box sx={{width:'100%',display:'flex',marginTop:'-8px',padding:'0px 10px',justifyContent:'space-between',alignItems:'center'}}>
                    <Button size="small" variant='contained'>
                    Buy now
                    </Button>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </Box>
                </CardActions>
            </Card>

            <Card sx={{ width: 300, height: 430 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="300"
                    src='https://picsum.photos/300/300'
                    alt="green iguana"
                    />
                    <CardContent sx={{padding:'10px 20px 0px 20px'}}>
                    <Typography gutterBottom variant="h6" color="text.secondary" component="div">
                        Product
                    </Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <Typography component='span' variant="h5" >
                            300
                        </Typography>
                        <span><CurrencyRupee /></span>
                    </Box>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Box sx={{width:'100%',display:'flex',marginTop:'-8px',padding:'0px 10px',justifyContent:'space-between',alignItems:'center'}}>
                    <Button size="small" variant='contained'>
                    Buy now
                    </Button>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </Box>
                </CardActions>
            </Card>

            <Card sx={{ width: 300, height: 430 }}>
                <CardActionArea>
                    <CardMedia
                    component="img"
                    height="300"
                    src='https://picsum.photos/300/300'
                    alt="green iguana"
                    />
                    <CardContent sx={{padding:'10px 20px 0px 20px'}}>
                    <Typography gutterBottom variant="h6" color="text.secondary" component="div">
                        Product
                    </Typography>
                    <Box sx={{display:'flex',alignItems:'center'}}>
                        <Typography component='span' variant="h5" >
                            300
                        </Typography>
                        <span><CurrencyRupee /></span>
                    </Box>
                    
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Box sx={{width:'100%',display:'flex',marginTop:'-8px',padding:'0px 10px',justifyContent:'space-between',alignItems:'center'}}>
                    <Button size="small" variant='contained'>
                    Buy now
                    </Button>
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} />
                    </Box>
                </CardActions>
            </Card>




        </Box>

        
    </Box>
  )
}

export default CardContainer