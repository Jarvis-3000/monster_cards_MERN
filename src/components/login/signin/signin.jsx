import React, {useState} from 'react';
import {useDispatch } from 'react-redux';
import { useHistory } from 'react-router';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';

import HandleLoginAxios from '../loginAxios';
import * as actions from "../../../redux/userFunctions/actions"

function Copyright() {
    return (
        <Typography variant="body2" color="textSecondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://material-ui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const useStyles = makeStyles((theme) => ({

    container:{
        border:'1px solid  gray', 
        borderRadius:'10px', 
        backgroundColor:'rgba(32,54,611,.1)' 
    },
    paper: {
        margin: '30px 10px 10px 10px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

export default function SignIn({handleSignChoise}) {
    const classes = useStyles();
    const dispatch = useDispatch()
    const history = useHistory()

    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [remember, setRemember]=useState(false)

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleRemember=()=>{
        setRemember(prevState=>{
            return !prevState
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()
        
        //signing...
        const url="http://localhost:5000/user/login"
        const crendentials={email,password}

        const res=await HandleLoginAxios(url, crendentials)
        if(res.status===200){
            dispatch(actions.toggleLogin(true))
            //alert box
            dispatch(actions.toggleAlert({msg:"Signin Successfull !!!",severity:"success",show:true}))
            
            //for hiding the alertBox after 3 seconds
            setTimeout(()=>{
                dispatch(actions.toggleAlert({msg:"",severity:"",show:false}))
            },3000)
            history.replace("/")
        }
        else{
            //alert box
            dispatch(actions.toggleAlert({msg:res.msg,severity:"error",show:true}))
            
            //for hiding the alertBox after 3 seconds
            setTimeout(()=>{
                dispatch(actions.toggleAlert({msg:"",severity:"",show:false}))
            },3000)
        }

        setEmail('')
        setPassword('')
        setRemember(false)
        
    }

    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
            {/* <CssBaseline /> */}
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />    
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign in
                </Typography>
                <form className={classes.form} noValidate method="POST">
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="Email Address"
                        name="email"
                        autoComplete="email"
                        autoFocus
                        value={email}
                        onChange={handleEmail}
                    />
                    <TextField
                        variant="outlined"
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={password}
                        onChange={handlePassword}
                    />
                    <FormControlLabel
                        control={<Checkbox value={remember} color="primary" onChange={handleRemember}/>}
                        label="Remember me"
                    />
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link href="#" variant="body2">
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Typography variant="body2" onClick={()=>handleSignChoise(true)} style={{cursor:'pointer'}}>
                                {"Don't have an account? Sign Up"}
                            </Typography>
                        </Grid>
                    </Grid>
                </form>

                <Box mt={8}>
                    <Copyright />
                </Box>
            </div>

        </Container>
    );
}
