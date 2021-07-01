import React from 'react';
import { useSelector } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';

const useStyles = makeStyles((theme) => ({

  container:{
    width: '100%',
    position:'fixed',
    top:'50px',
    zIndex:2,
  },

  root: {
    minWidth:'fit-content',
    maxWidth:'80%',
    margin:'20px auto',
    boxShadow:'1px 1px 5px 1px gray',
    borderRadius:'5px',
    

    "& .MuiPaper-root":{
        justifyContent:'center',
            alignItems:'center',
    },

    "& .MuiAlert-icon ":{
        justifyContent:'center',
        alignItems:'center',
        padding:'0px 10px',

        "& .MuiSvgIcon-root":{
            fontSize:'25px'
        }
    }
  },
  alert:{
    textAlign:'center',
    fontSize:'25px'
  }
}));

export default function AlertBox() {
  const classes = useStyles();
  const {alertInfo} = useSelector(state=>state.user)

  if(alertInfo.show){
    return(
      <div className={classes.container}>
        <div className={classes.root}>
          <Alert variant="filled" severity={alertInfo.severity} className={classes.alert}>
            {alertInfo.msg}
          </Alert>
        </div>
      </div>
    )
  }
  else{
    return <></>
  }
}
