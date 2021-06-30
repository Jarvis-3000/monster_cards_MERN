import React from "react"

//material ui modules
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
// import TextField from "@material-ui/core/TextField"
import Button from "@material-ui/core/Button"
import { IconButton } from "@material-ui/core"
import PhotoCamera from "@material-ui/icons/PhotoCamera"
import SaveIcon from '@material-ui/icons/Save'

// style
import useStyles from './style.searchBox'


function SearchBox({ handleSearchString }) {

    const classes = useStyles()

    return (
        <>
            <Typography
                style={{marginBottom:'10px' }}
                variant="h3"
                // color="error"
            >
                <Box 
                    style={{ padding:'5px', margin:'0px 0px 10px' , fontSize:"40px"}} 
                    bgcolor="primary.main"
                >
                    Search Monster
                </Box>

                <Box
                    style={{ padding:'5px', margin:'0px 50px 10px' , fontSize:"30px" }} 
                    bgcolor="secondary.main"
                >
                    Search Monster
                </Box>
                
                <Box 
                    style={{ padding:'5px', margin:'0px 100px 10px' , fontSize:"20px" }} 
                    bgcolor="error.main"
                >
                    Search Monster
                </Box>
                
                
            </Typography>

            <div className={classes.searchBox}>

                <input
                    className={classes.inputBox}
                    placeholder="Search Monster..."
                    // label="search monster" InputLabelProps={{shrink: true}}
                    type="text"
                    color='secondary' error autoComplete
                    autoFocus
                    // variant="outlined"
                    onChange={handleSearchString}
                />

                <Button
                    variant="contained"
                    // color="primary"
                    disableElevation
                    // disableRipple
                    size="large"
                    fullWidth="true"
                    className={classes.btn}
                // style={{ padding:'5px', margin: '10px' }}
                >Submit</Button>

                <div className={classes.upload}>
                    <>
                        <input
                            accept="image/*"
                            id="uploadButton"
                            multiple
                            type="file"
                            className={classes.input}
                        // style={{display:'none'}}
                        />
                        <label htmlFor="uploadButton"  >
                            <Button
                                variant="contained"
                                color="primary"
                                component="span"
                                endIcon={<PhotoCamera />}
                                startIcon={<SaveIcon />}
                            >
                                Image
                            </Button>
                        </label>
                    </>

                    <>
                        <input
                            accept="image/*"
                            id="uploadIcon"
                            type="file"
                            single
                            className={classes.input}
                        // style={{display:'none'}}
                        />
                        <label htmlFor="uploadIcon">
                            <IconButton color="primary" aria-label="upload picture" component="span">
                                <PhotoCamera color="error" fontSize="large" />
                            </IconButton>
                        </label>
                    </>

                </div>
            </div>
        </>
    )
}

export default SearchBox