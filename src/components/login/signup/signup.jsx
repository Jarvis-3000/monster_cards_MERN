import React, {useState} from 'react';
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
    container: {
        border: '1px solid  gray',
        borderRadius: '10px',
        backgroundColor: 'rgba(32,54,611,.1)'
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
        marginTop: theme.spacing(3),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));


export default function SignUp({handleSignChoise}) {
    const classes = useStyles();

    const [firstName, setFirstName]=useState('')
    const [lastName, setLastName]=useState('')
    const [email, setEmail]=useState('')
    const [password, setPassword]=useState('')
    const [allowExtraEmails, setAllowExtraEmails]=useState(false)

    const handleFirstName=(e)=>{
        setFirstName(e.target.value)
    }

    const handleLastName=(e)=>{
        setLastName(e.target.value)
    }

    const handleEmail=(e)=>{
        setEmail(e.target.value)
    }

    const handlePassword=(e)=>{
        setPassword(e.target.value)
    }

    const handleAllowExtraEmails=()=>{
        setAllowExtraEmails(prevState=>{
            return !prevState
        })
    }

    const handleSubmit=async(e)=>{
        e.preventDefault()

        //signup...
        const credentials={
            firstname:firstName,
            lastname:lastName,
            email,
            password,
        }
        const url="http://localhost:5000/user/register"

        const res=await HandleLoginAxios(url, credentials)
        alert(res.msg)
    }

    return (
        <Container component="main" maxWidth="xs" className={classes.container}>
            {/* <CssBaseline /> */}
            <div className={classes.paper}>
                <Avatar className={classes.avatar}>
                    <LockOutlinedIcon />
                </Avatar>
                <Typography component="h1" variant="h5">
                    Sign up
                </Typography>
                <form className={classes.form} noValidate method="POST">
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                autoComplete="fname"
                                name="firstName"
                                variant="outlined"
                                required
                                fullWidth
                                id="firstName"
                                label="First Name"
                                autoFocus
                                value={firstName}
                                onChange={handleFirstName}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="lastName"
                                label="Last Name"
                                name="lastName"
                                autoComplete="lname"
                                value={lastName}
                                onChange={handleLastName}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                value={email}
                                onChange={handleEmail}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                variant="outlined"
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
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel
                                control={<Checkbox value={allowExtraEmails} color="primary" onChange={handleAllowExtraEmails}/>}
                                label="I want to receive inspiration, marketing promotions and updates via email."
                            />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={handleSubmit}
                    >
                        Sign Up
                    </Button>
                    <Grid container justify="center">
                        <Grid item>
                            <Typography variant="body2" onClick={()=>handleSignChoise(false)} style={{cursor:'pointer'}}>
                                Already have an account? Sign in
                            </Typography>
                        </Grid>
                    </Grid>
                </form>
                <Box mt={5}>
                    <Copyright />
                </Box>
            </div>
            
        </Container>
    );
}