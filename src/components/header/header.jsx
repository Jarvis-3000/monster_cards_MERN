import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import {Link} from "react-router-dom"

//material Ui
import {Grid, Avatar} from "@material-ui/core"
import MonsterIcon from "../../assets/images/monster.png"

function Header() {

    const history = useHistory()

    return (
        <Grid container spacing={3}   justify="space-between" direction="row" alignItems="center" style={{padding:'10px',marginBottom:'10px'}}>
            <Grid item >
                <img width="50px" height="50px" src={MonsterIcon} alt="monsterIcon"/>
                
            </Grid>
            <Grid item container xs spacing={3}   justify="flex-end" direction="row" alignItems="center">
                <Grid item>
                    <Button color="primary" variant="contained" onClick={() => history.replace("/")}>
                        Home
                    </Button>
                </Grid>

                <Grid item>
                    <Link to="/signin" style={{textDecoration:'none'}}>
                        <Button color="primary" variant="contained">
                            SignIn
                        </Button>
                    </Link>
                </Grid>
            </Grid>
        </Grid>
    )
}

export default Header

