import React from "react"
import {useDispatch } from "react-redux"
import { editName } from "../../redux/actions"

// styles
import useStyles from "./style.monsterCard"

//material ui modules
import { Grid, Paper, Box, Typography } from "@material-ui/core"

//component
import FormDialog from "../formDialog/formDialog"



export default  function MonsterCard({monster}){
    const classes = useStyles()   //for getting all the style
    const dispatch = useDispatch()

    function handleEdit(id, input) {
        console.log("dispatching editName...", id, input)
        dispatch(editName({ id, input }))
    }

    return (
        <Grid item xl={2} lg={3} md={4} sm={6} xs={12} key={monster.id}>
            <Paper className={classes.monster}>
                <img width="100%" height="100%" src={`https://robohash.org/${monster.id}?set=set2`} alt="monsterImage" />

                <Grid container direction="row" justify="space-between" alignItems="center" style={{ padding: '10px' }}>
                    <Grid item xs={10}>
                        <Typography variant="h6" align="center" display="block" noWrap>
                            <Box gutterBottom >
                                {monster.name}
                            </Box>
                        </Typography>
                    </Grid>

                    <Grid item xs={2} style={{ padding: '0px 0px 0px 10px' }}>
                        <FormDialog id={monster.id}
                            handleEdit={handleEdit}
                        />
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}