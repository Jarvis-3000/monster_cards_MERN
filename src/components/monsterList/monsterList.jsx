import React
 from "react"
// import { monstersContext } from "../../app"

// styles
import useStyles from "./style.monsterList"

//material ui modules
import Typography from "@material-ui/core/Typography"


function MonsterList(props){
    // const monsters=useContext(monstersContext)

    const classes=useStyles()   //for getting all the styles

    const monsters=props.monsters
    return(
        <div className={classes.monsterList}>
            {
                monsters.map(monster=>{
                    return (
                    <div key={monster.id} className={classes.monster}>
                        <img width="100%" height="100%" src={`https://robohash.org/${monster.id}?set=set2`} alt="monsterImage"/>
                        <Typography 
                            variant="button" 
                            color="primary" 
                            gutterBottom
                            align="center"
                            display="block"
                        >{monster.name}</Typography>
                    </div>
                )
                })
            }
        </div>
    )
}

export default MonsterList