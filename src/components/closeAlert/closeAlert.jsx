import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Alert, AlertTitle } from '@material-ui/lab';
import IconButton from '@material-ui/core/IconButton';
import Collapse from '@material-ui/core/Collapse';
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '80%',
    margin:'10px auto',
    

    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CloseAlert() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  return (
    <div className={classes.root}>
      <Collapse in={open} >
        <Alert severity="error" style={{background:'#FFDB58',boxShadow:'0px 0px 5px 1px gray'}}
          action={
            <IconButton
              aria-label="close"
              color="secondary"
              size="large"
              onClick={() => {
                setOpen(false);
              }}
            >
              
              <CloseIcon fontSize="small" color="secondary"/>
            </IconButton>
          }
        >
          <AlertTitle>Baap Ko Bol Recharge Karaye !!!</AlertTitle>
        </Alert>
      </Collapse>
    </div>
  );
}
