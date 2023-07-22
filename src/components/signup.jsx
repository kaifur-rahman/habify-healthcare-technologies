import React from "react"
//mui components
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Grid from '@mui/material/Grid';
import Checkbox from '@mui/material/Checkbox';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormHelperText from '@mui/material/FormHelperText';
import FormControl from '@mui/material/FormControl';
//icons
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import YouTubeIcon from '@mui/icons-material/YouTube';
const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
const interested=[
"Select all","Mental Health","MH Tips","Support", "Enabler","Exchange","Art","Q&As","Social","Random","Music","Science",
"Pets","Education","Video",
]
function Signup(){
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
      };

    return (
        <>
        {/*sign up */}
         <Stack   direction="row" justifyContent="flex-end" alignItems="flex-start" spacing={0}>
            <Box>
            <Typography variant="caption" display="block" gutterBottom sx={{color:'grey'}}>
                  Already have an account?
                  <Button sm variant="contained" size="small" sx={{marginLeft:"1rem",backgroundColor:'#EBF1F0',color:'#000000',width:'2rem',height:'1.5rem',fontSize:'0.7rem'}}>Sign In</Button>
            </Typography>
           
            </Box>
         </Stack>
         {/*parent div*/}
        <Container  sx={{marginTop:'0.6rem',height:'auto'}}>
        <Box sx={{ bgcolor: '#f5f5f5', height: 'auto' }}>
            {/*center child div*/}
        <Container maxWidth="sm">
        <Box sx={{ bgcolor: '#f5f5f5', height: 'auto',marginTop:''}}>
            {/*Heading div*/}
            <Box sx={{backgroundColor:"#EBF1F0",height:'auto',borderTopLeftRadius:'16rem',borderTopRightRadius:'16rem',marginTop:'',position:'relative',top:'1rem'}}>
            <Box component="img" src="logo.png" alt=""  sx={{width:{xs:'8rem',sm:'8rem',md:'10rem',lg:'14rem',xl:'14rem'},textAlign:'center',position:'relative',left:{xs:'5.5rem',sm:'13rem',md:'13rem',lg:'11rem',xl:'11rem'},marginTop:'1rem'}}/>
            <hr style={{width:'10rem'}}></hr>
            <Typography variant="h6" gutterBottom sx={{textAlign:'center'}}>
                Create a Emotional First Aid - Enabler Account
            </Typography>
            <Typography variant="caption" display="block" gutterBottom sx={{color:'grey',textAlign:'center',marginBottom:'1rem',marginTop:'0.3rem',maxWidth:'25rem',display:'block',marginLeft:'auto',marginRight:'auto'}}>
                By sigin up you can start posting, replying to topics, earn badges, favourite, vote topics and many more.
            </Typography>
            </Box>
            {/*form*/}
            <Grid container spacing={0} sx={{marginLeft:'0.2rem',maxwidth:'20rem',marginTop:'0.1rem',textAlign:'left'}}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key="fname" sx={{marginTop:'1rem'}}>
            <TextField  id="fname" label="First name" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key="lname" sx={{marginTop:'1rem'}}>
            <TextField sx={{}}id="lname" label="Last name" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key="uname" sx={{marginTop:'1rem',width:'95%'}}>
            <TextField fullWidth sx={{width:'95%'}}id="uname" label="Username" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key="email" sx={{marginTop:'1rem'}}>
            <TextField fullWidth sx={{width:'95%'}}id="email" label="Email" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key="pass" sx={{marginTop:'1rem'}}>
            <TextField fullWidth type="password" sx={{width:'95%'}}id="pass" label="Password" variant="standard" />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12} xl={12} key="pass" sx={{marginTop:'1rem'}}>
            <hr style={{marginTop:'2rem'}}></hr>
            <Box sx={{backgroundColor:'#f5f5f5',width:'12rem',marginTop:'-1.5rem',marginLeft:'2rem'}}>
            <Typography variant="caption" sx={{}}>Privacy Setting (OPTIONAL) </Typography>
            </Box>
            <Typography variant="caption"  sx={{marginTop:'1rem',color:'#B2AFAA',textAlign:'left'}}>
                  Who can see my Profile?
            </Typography>
            <Grid container justifyContent="space-evenly">
            <Stack direction="row" spacing={1}>
            <Checkbox {...label} defaultChecked  sx={{width:'2rem'}}/>
                 <Typography sx={{marginTop:'0.6rem!important'}}>Everyone</Typography>
            </Stack>

            <Stack direction="row" spacing={1} sx={{marginLeft:{md:'0',lg:'3rem'}}}>
            <Checkbox {...label}   sx={{width:'2rem'}}/>
                 <Typography sx={{marginTop:'0.6rem!important'}}>Only Friends</Typography>
            </Stack>

            <Stack direction="row" spacing={2} sx={{marginLeft:{md:'0',lg:'3rem'}}}>
            <Checkbox {...label}  sx={{width:'2rem'}}/>
                 <Typography sx={{marginTop:'0.6rem!important'}}>Invite Only</Typography>
            </Stack>
            </Grid>

            <Typography variant="caption" display="block" gutterBottom sx={{marginTop:'1rem',color:'#B2AFAA'}}>
                 Automatically share my posts and replies on Social Networks
            </Typography>
            <Grid container justifyContent="space-evenly">
            <Stack direction="row" spacing={1} sx={{textAlign:'center'}}>
            <Checkbox {...label} defaultChecked  sx={{width:'2rem'}}/>
                 <Typography sx={{marginTop:'0.6rem!important'}}>Facebook</Typography>
            </Stack>

            <Stack direction="row" spacing={1} sx={{marginLeft:{md:'0',lg:'3rem'}}}>
            <Checkbox {...label}   sx={{width:'2rem'}}/>
                 <Typography sx={{marginTop:'0.6rem!important'}}>Twitter</Typography>
            </Stack>

            <Stack direction="row" spacing={2} sx={{marginLeft:{md:'0',lg:'3rem'}}}>
            <Checkbox {...label}  sx={{width:'2rem'}}/>
                 <Typography sx={{marginTop:'0.6rem!important'}}>Google</Typography>
            </Stack>
            </Grid>

            <hr style={{marginTop:'2rem'}}></hr>
            <Box sx={{backgroundColor:'#f5f5f5',width:'12rem',marginTop:'-1.5rem',marginLeft:'2rem'}}>
            <Typography variant="caption">Small Survey (OPTIONAL) </Typography>
            </Box>
            <Grid justifyContent="" container spacing={2} sx={{marginLeft:'-1.5rem',maxwidth:'20rem',marginTop:''}}>
            <Grid display="block" justifyContent="center" item xs={12} sm={12} md={12} lg={6} xl={6} key="fname" sx={{marginTop:'1rem'}}>
            <FormControl fullWidth  sx={{ m: 1, minWidth: 120 }} size="small" justifyContent="center">
                <InputLabel id="demo-simple-select-helper-label" size="small">How old are you?</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>10</MenuItem>
                    <MenuItem value={20}>20</MenuItem>
                    <MenuItem value={30}>30</MenuItem>
                    </Select>
        
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key="lname" sx={{marginTop:'1rem'}}>
            <FormControl fullWidth  sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-simple-select-helper-label" size="small">Who are you?</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Male</MenuItem>
                    <MenuItem value={20}>Female</MenuItem>
                    <MenuItem value={30}>Other</MenuItem>
                    </Select>
        
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key="lname" sx={{marginTop:'1rem'}}>
            <FormControl fullWidth  sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-simple-select-helper-label" size="small">Will you be friendly here?</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value={10}>Yes</MenuItem>
                    <MenuItem value={20}>No</MenuItem>
                    </Select>
        
            </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key="lname" sx={{marginTop:'1rem'}}>
            <FormControl fullWidth  sx={{ m: 1, minWidth: 120 }} size="small">
                <InputLabel id="demo-simple-select-helper-label" size="small">Where did you here about us?</InputLabel>
                    <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={age}
                    label="Age"
                    onChange={handleChange}
                    >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value={10}>Social Media</MenuItem>
                    <MenuItem value={20}>People</MenuItem>
                    <MenuItem value={30}>Other</MenuItem>
                    </Select>
        
            </FormControl>
            </Grid>

            </Grid>
            <hr style={{marginTop:'2rem'}}></hr>
            <Box sx={{backgroundColor:'#f5f5f5',width:'14rem',marginTop:'-1.2rem',marginLeft:'2rem'}}>
            <Typography variant="caption">Link Social Networks (OPTIONAL) </Typography>
            </Box>
            {/*social network*/}
            <Grid container spacing={0} sx={{marginLeft:'0.3rem',maxwidth:'20rem',marginTop:''}}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key="fname" sx={{marginTop:'1rem'}}>
            <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Facebook URL
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <FacebookIcon sx={{color:'#3b5998 '}}></FacebookIcon>
            </InputAdornment>
          }
        />
      </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key="lname" sx={{marginTop:'1rem'}}>
            <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Twitter Username
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <TwitterIcon sx={{color:'#00acee'}}/>
            </InputAdornment>
          }
        />
      </FormControl>
            </Grid>
            </Grid>
            <Grid container spacing={0} sx={{marginLeft:'0.3rem',maxwidth:'20rem',marginTop:''}}>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key="fname" sx={{marginTop:'1rem'}}>
            <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Google+ Account ID
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="start">
              <GoogleIcon sx={{color:'#db4a39'}}></GoogleIcon>
            </InputAdornment>
          }
        />
      </FormControl>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={6} xl={6} key="lname" sx={{marginTop:'1rem'}}>
            <FormControl variant="standard">
        <InputLabel htmlFor="input-with-icon-adornment">
          Youtube Channel URL
        </InputLabel>
        <Input
          id="input-with-icon-adornment"
          startAdornment={
            <InputAdornment position="top">
              <YouTubeIcon sx={{color:'red'}}></YouTubeIcon>
            </InputAdornment>
          }
        />
      </FormControl>
      
     
            </Grid>
            

            </Grid>
            <hr style={{marginTop:'4rem'}}></hr>
            <Box sx={{backgroundColor:'#f5f5f5',width:'14rem',marginTop:'-1.5rem',marginLeft:'2rem'}}>
            <Typography variant="caption" sx={{marginBottom:'1rem'}}>Interested Categories (OPTIONAL) </Typography>
            </Box>
            <Typography variant="caption" sx={{marginTop:'1.5rem!important',color:'#B2AFAA',marginBottom:'1rem'}}>Categories I'm interested in</Typography>

            <Stack justifyContent="space-evenly" direction={{ xs: 'column', sm: 'column',md:'column',lg:'row',xl:'row' }} spacing={{ xs: 1, sm: 1,md:1,lg:5,xl:5 }}>
            <Box>
              <Stack direction="row">
            <Checkbox {...label}   sx={{width:'1rem'}}/>
            <Typography sx={{marginTop:'0.7rem!important',fontSize:'0.8rem',marginLeft:"0.6rem"}}>Select all</Typography>
            </Stack>
            </Box>

            <Box>
              <Stack direction="row">
            <Checkbox {...label}   sx={{width:'1rem'}}/>
            <Typography sx={{marginTop:'0.7rem!important',fontSize:'0.8rem',marginLeft:"0.6rem"}}>Mental Health</Typography>
            </Stack>
            </Box>

            <Box>
              <Stack direction="row">
            <Checkbox defaultChecked {...label}   sx={{width:'1rem'}}/>
            <Typography sx={{marginTop:'0.7rem!important',fontSize:'0.8rem',marginLeft:"0.6rem"}}>MH Tips</Typography>
            </Stack>
            </Box>

            <Box>
              <Stack direction="row">
            <Checkbox defaultChecked {...label}   sx={{width:'1rem'}}/>
            <Typography sx={{marginTop:'0.7rem!important',fontSize:'0.8rem',marginLeft:"0.6rem"}}>Support</Typography>
            </Stack>
            </Box>
            
            
            </Stack>
            
            <Stack justifyContent="space-evenly" direction={{ xs: 'column', sm: 'column',md:'column',lg:'row',xl:'row' }} spacing={{ xs: 1, sm: 1,md:1,lg:8,xl:8 }}>
            <Box>
              <Stack direction="row">
            <Checkbox  {...label} defaultChecked  sx={{width:'1rem'}}/>
            <Typography sx={{marginTop:'0.7rem!important',fontSize:'0.8rem',marginLeft:"0.6rem"}}>Enabler</Typography>
            </Stack>
            </Box>

            <Box>
              <Stack direction="row">
            <Checkbox {...label}   sx={{width:'1rem'}}/>
            <Typography sx={{marginTop:'0.7rem!important',fontSize:'0.8rem',marginLeft:"0.6rem"}}>Exchange</Typography>
            </Stack>
            </Box>

            <Box>
              <Stack direction="row">
            <Checkbox defaultChecked {...label}   sx={{width:'1rem'}}/>
            <Typography sx={{marginTop:'0.7rem!important',fontSize:'0.8rem',marginLeft:"0.6rem"}}>Art</Typography>
            </Stack>
            </Box>

            <Box>
              <Stack direction="row">
            <Checkbox {...label}   sx={{width:'1rem'}}/>
            <Typography sx={{marginTop:'0.7rem!important',fontSize:'0.8rem',marginLeft:"0.6rem"}}>Q&As</Typography>
            </Stack>
            </Box>
            
            
            </Stack>
            
            <Stack justifyContent="space-evenly" direction={{ xs: 'column', sm: 'column',md:'column',lg:'row',xl:'row' }} spacing={{ xs: 1, sm: 1,md:1,lg:8,xl:8 }}>
            <Box>
              <Stack direction="row">
            <Checkbox {...label} defaultChecked  sx={{width:'1rem'}}/>
            <Typography sx={{marginTop:'0.7rem!important',fontSize:'0.8rem',marginLeft:"0.6rem"}}>Social</Typography>
            </Stack>
            </Box>

            <Box>
              <Stack direction="row">
            <Checkbox defaultChecked {...label}   sx={{width:'1rem'}}/>
            <Typography sx={{marginTop:'0.7rem!important',fontSize:'0.8rem',marginLeft:"0.6rem"}}>Random</Typography>
            </Stack>
            </Box>

            <Box>
              <Stack direction="row" >
            <Checkbox defaultChecked {...label} iconStyle={{color: 'white'}}  sx={{width:'1rem',}}/>
            <Typography sx={{marginTop:'0.7rem!important',fontSize:'0.8rem',marginLeft:"0.6rem"}}>Music</Typography>
            </Stack>
            </Box>

            <Box>
              <Stack direction="row" >
            <Checkbox {...label}   sx={{width:'1rem'}}/>
            <Typography sx={{marginTop:'0.7rem!important',fontSize:'0.8rem',marginLeft:"0.6rem"}}>Science</Typography>
            </Stack>
            </Box>
            
            
            </Stack>
            

            <Stack justifyContent="center" direction="row" spacing={1} sx={{marginTop:'1.5rem'}}>
            <Checkbox {...label} defaultChecked  sx={{width:'2rem'}}/>
                 <Typography sx={{marginTop:'0.6rem!important',color:'#B2AFAA',fontSize:'0.8rem'}}>I agree to the Terms & Conditions</Typography>
                 <Stack direction="row" spacing={1}>
            <Checkbox {...label}   sx={{width:'2rem'}}/>
                 <Typography sx={{marginTop:'0.6rem!important',color:'#B2AFAA',fontSize:'0.8rem'}}>Subscribe to newsletter</Typography>
            </Stack>
            </Stack>
            <Button sx={{backgroundColor:'#AD0922',marginTop:'1.5rem',width:'95%',marginBottom:'1rem',textAlign:'center',marginLeft:'auto',marginRight:'auto',display:'block',fontSize:'0.7rem!important'}}variant="contained">Create New Account </Button>
            </Grid>
            </Grid>
           
        </Box>
      </Container>
        </Box>
      </Container>
        </>
    )
}
export default Signup;