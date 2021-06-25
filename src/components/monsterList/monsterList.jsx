import React
    from "react"
// import { monstersContext } from "../../app"

// styles
import useStyles from "./style.monsterList"

//material ui modules
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"

import Grid from "@material-ui/core/Grid"
import { Paper } from "@material-ui/core"


function MonsterList(props) {
    // const monsters=useContext(monstersContext)

    const classes = useStyles()   //for getting all the styles

    const monsters = props.monsters
    return (
        <Grid container spacing={3} className={classes.monsterList}>
            {
                monsters.map(monster => {
                    return (
                        <Grid item xl={2} lg={3} md={4} sm={6} xs={12}>
                            <Paper key={monster.id} className={classes.monster}>
                                <img width="100%" height="100%" src={`https://robohash.org/${monster.id}?set=set2`} alt="monsterImage" />
                                <Typography
                                    variant="button"
                                    // color="primary" 
                                    // gutterBottom
                                    align="center"
                                    display="block"
                                >
                                    <Box paddingTop='10px' gutterBottom>
                                        {monster.name}
                                    </Box>
                                </Typography>
                            </Paper>
                        </Grid>
                    )
                })
            }
        </Grid>
    )
}

export default MonsterList