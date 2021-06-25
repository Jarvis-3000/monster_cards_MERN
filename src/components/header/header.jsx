import { Button } from "@material-ui/core"
import {useHistory} from "react-router-dom"


function Header() {

    const history=useHistory()

    return (
        <ul style={{ display: 'flex', flexDirection: 'row', margin: '0px 0px 10px 0px', padding: '10px' }}>
            <li style={{ listStyleType: 'none', margin: '0px 10px' }}>
                <Button color="primary" variant="contained" onClick={()=>history.replace("/")}>
                    Home
                </Button>
            </li>
            
            <li style={{ listStyleType: 'none', margin: '0px 10px' }}>
                <Button color="primary" variant="contained" onClick={()=>history.replace("/colorPicker")}>
                    Color Picker
                </Button>
            </li>
        </ul>
    )
}

export default Header