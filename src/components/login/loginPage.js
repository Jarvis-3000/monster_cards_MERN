import React from "react"
import { Grid } from "@material-ui/core"

//hooks
import { useState } from "react"
// import { useHistory } from "react-router"

//components
import SignIN from "./signin/signin"
import SignUp from "./signup/signup"

function LoginPage() {
    // const history=useHistory()

    const [signChoise, setSignChoise] = useState(false)

    function handleSignChoise(value) {
        setSignChoise(value)
    }

    return (
        <Grid container justify="center" alignItems="center" style={{margin:'20px auto', width:'90%'}}>
            {
                (signChoise) ?
                    (
                        <Grid item>
                            <SignUp handleSignChoise={handleSignChoise} />
                        </Grid>
                    )
                    :
                    (
                        <Grid item>
                            <SignIN handleSignChoise={handleSignChoise} />
                        </Grid>
                    )
            }
        </Grid>
    )
}

export default LoginPage