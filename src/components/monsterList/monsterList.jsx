import React, {useState, useEffect} from "react"

// styles
import useStyles from "./style.monsterList"

//material ui modules
import { Grid} from "@material-ui/core"
import { CircularProgress } from "@material-ui/core"
import WarningIcon from '@material-ui/icons/Warning';

//component
import MonsterCard from "../monsterCard/monsterCard"


function MonsterList(props) {
    const classes = useStyles()   //for getting all the style
    const [fetchStatus, setFetchState]=useState('')

    const { monsters, fetchState } = props

    useEffect(()=>{
        setFetchState(fetchState)
    },[monsters])

    return (
        <>
            {
                function (fetchStatus) {
                    if (fetchStatus === 'fetching...') {
                        return <CircularProgress style={{ color: 'blue' }} />
                    }
                    else if (fetchStatus === 'failed') {
                        return <WarningIcon fontSize="large" style={{ color: 'red' }} />
                    }
                    else {
                        return (
                            <Grid container spacing={3} className={classes.monsterList}>
                                { 
                                    monsters.map(monster => {
                                       return <MonsterCard key={monster.id} monster={monster}/>
                                    })
                                }
                            </Grid>
                        )
                    }
                }(fetchStatus)
            }
        </>
    )
}

export default MonsterList