import { Button } from "@material-ui/core"
import { useHistory } from "react-router-dom"
import { Link } from "react-router-dom"
import { useSelector, useDispatch } from "react-redux"

//material Ui
import { Grid, Avatar } from "@material-ui/core"
import MonsterIcon from "../../assets/images/monster.png"


import AlertBox from "../alertBox/alertBox"
import * as actions from "../../redux/userFunctions/actions"

function Header() {

    const history = useHistory()
    const dispatch = useDispatch()

    const { loggedIn } = useSelector(state => state.user)

    const deleteCookies=(name)=>{
        document.cookie=`${name}=; max-age=0`
        console.log(document.cookie)
        
    }

    const handleSignOut = () => {
        
        //delete cookie
        deleteCookies("token")

        dispatch(actions.toggleLogin(false))
        //alert box
        dispatch(actions.toggleAlert({ msg: "Logout Successfully", severity: "success", show: true }))

        //for hiding the alertBox after 3 seconds
        setTimeout(() => {
            dispatch(actions.toggleAlert({ msg: "", severity: "", show: false }))
        }, 3000)
    }

    return (
        <>
            <Grid container spacing={3} justify="space-between" direction="row" alignItems="center" style={{ padding: '10px', marginBottom: '10px' }}>
                <Grid item >
                    <img width="50px" height="50px" src={MonsterIcon} alt="monsterIcon" />

                </Grid>
                <Grid item container xs spacing={3} justify="flex-end" direction="row" alignItems="center">
                    <Grid item>
                        <Button color="primary" variant="contained" onClick={() => history.replace("/")}>
                            Home
                        </Button>
                    </Grid>

                    <Grid item>
                        {
                            (!loggedIn) ?
                                <Link to="/signin" style={{ textDecoration: 'none' }}>
                                    <Button color="primary" variant="contained">
                                        SignIn
                                    </Button>
                                </Link>
                                :
                                <Button color="secondary" variant="contained"
                                    onClick={handleSignOut}
                                >
                                    SignOut
                                </Button>

                        }
                    </Grid>
                </Grid>
            </Grid>

            <AlertBox />
        </>
    )
}

export default Header

