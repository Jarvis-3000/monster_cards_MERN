import React from "react"
import {useSelector, useDispatch } from "react-redux"
import { addMonsters } from "../../redux/dataFunctions/actions"

// styles
import useStyles from "./style.monsterCard"

//material ui modules
import { Grid, Paper, Box, Typography } from "@material-ui/core"

//component
import FormDialog from "../formDialog/formDialog"
import * as actions from "../../redux/userFunctions/actions"
import axios from "axios"
import config from "../../config"


export default  function MonsterCard({monster}){
    const classes = useStyles()   //for getting all the style
    const dispatch = useDispatch()

    const {loggedIn,token} =  useSelector(state=>state.user)



    async function handleEdit(id, input) {

        if(!loggedIn){
            //alert box
            dispatch(actions.toggleAlert({msg:"Please First SignIn",severity:"warning",show:true}))
            
            //for hiding the alertBox after 3 seconds
            setTimeout(()=>{
                dispatch(actions.toggleAlert({msg:"",severity:"",show:false}))
            },2000)
            return 0
        }

        // console.log("dispatching editName...", id, input)
        try{
            const res= await axios.put(`${config.fetchUri}/monsters/editmonster`,{id,input,token})
            // console.log({...res})
            await dispatch(addMonsters())

            //alert box
            dispatch(actions.toggleAlert({msg:"Successfully Edited Name !!!",severity:"success",show:true}))
            
            //for hiding the alertBox after 3 seconds
            setTimeout(()=>{
                dispatch(actions.toggleAlert({msg:"",severity:"",show:false}))
            },2000)
        }
        catch(err){
            //alert box
            dispatch(actions.toggleAlert({msg:err.response.statusText,severity:"error",show:true}))
            
            // //for hiding the alertBox after 3 seconds
            setTimeout(()=>{
                dispatch(actions.toggleAlert({msg:"",severity:"",show:false}))
            },2000)
        }

    }

    const giveImgSrc=()=>{
        if(navigator.onLine){
            console.log("i am online")
            return `https://robohash.org/${monster.id}?set=set2`
        }
        else {
            console.log("i am offline")
            return `./monster.png`
        }
    }

    return (
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
            <Paper className={classes.monster}>
                <img width="100%" height="90%" src={giveImgSrc()} alt="monsterImage" />

                <Grid container direction="row" justify="space-between" alignItems="center" style={{ padding: '10px' }}>
                    <Grid item xs={10}>
                        <Typography variant="h6" align="center" display="block" noWrap>
                            <Box>
                                {monster.name}
                            </Box>
                        </Typography>
                    </Grid>

                    <Grid item xs={2} style={{ padding: '0px 0px 0px 10px' }}>
                        <FormDialog id={monster._id}
                            handleEdit={handleEdit}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}