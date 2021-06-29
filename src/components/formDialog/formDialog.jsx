import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Fab from '@material-ui/core/Fab'
import EditIcon from '@material-ui/icons/Edit'

export default function FormDialog({id, handleEdit}) {
  const [open, setOpen] = React.useState(false);
  const [input, setInput] =React.useState('')

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleOk=()=>{
    if(!input){

    }
    else{
      handleEdit(id,input)
      handleClose()
    }
  }

  const handleInput=(e)=>{
    setInput(e.target.value)
  }

  return (
    <div>
      <Fab size="small" style={{ boxShadow: '0px 0px 0px 0px' }} onClick={handleClickOpen}>
        <EditIcon fontSize="small"/>
      </Fab>
     <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title" fullWidth>
        <DialogTitle id="form-dialog-title">Enter New Name...</DialogTitle>
        <DialogContent >
          {/* <DialogContentText>
            Enter New Name...
          </DialogContentText> */}
          <TextField 
            autoFocus
            margin="dense"
            id="name"
            label="New Name"
            type="text"
            fullWidth
            required
            onChange={handleInput}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="secondary">
            Cancel
          </Button>
          <Button  onClick={handleOk} color="primary">
            Ok
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
