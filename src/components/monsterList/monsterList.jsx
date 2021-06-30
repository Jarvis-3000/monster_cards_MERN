import React, {useState, useEffect} from "react"
import { useSelector, useDispatch } from "react-redux"

// styles
import useStyles from "./style.monsterList"

//material ui modules
import {Grid, Fab, Paper, Box, Typography} from "@material-ui/core"
import EditIcon from "@material-ui/icons/Edit"

//component
import FormDialog from "../formDialog/formDialog"


function MonsterList(props) {
    const classes = useStyles()   //for getting all the style

    const {monsters, fetchState}=useSelector(state=>state)
    const [monsters2, setMonsters]=useState([])

    useEffect(()=>{
        setMonsters(monsters)
        console.log("ok")
    },[monsters])

    // function handleEdit(id,input){
    //     let newMonsters=monsters.map(monster=>{
    //         if(monster.id===id){
    //             monster.name=input
    //         }
    //         return monster
    //     })
    //     setMonsters(newMonsters)
    // }

    return (
        <Grid container spacing={3} className={classes.monsterList}>
            {
                monsters2.map(monster => {
                    return (
                        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={monster.id}>
                            <Paper className={classes.monster}>
                                <img width="100%" height="100%" src={`https://robohash.org/${monster.id}?set=set2`} alt="monsterImage" />

                                <Grid container direction="row" justify="space-between" alignItems="center" style={{ padding: '10px' }}>
                                    <Grid item xs>
                                        <Typography variant="h6" align="center" display="block">
                                            <Box  gutterBottom>
                                                {monster.name}
                                            </Box>
                                        </Typography>
                                    </Grid>

                                    <Grid item>
                                        <FormDialog id={monster.id} 
                                            // handleEdit={handleEdit}
                                        />
                                    </Grid>
                                </Grid>
                            </Paper>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default MonsterList