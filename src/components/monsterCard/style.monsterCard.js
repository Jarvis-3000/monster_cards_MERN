import { makeStyles } from "@material-ui/core"

const useStyles=makeStyles({
    monster:{
        padding:'5px',
        // width:'300px',
        height:'fitContent',
        backgroundImage:'linear-gradient(to top, #fbc2eb 0%, #a6c1ee 100%);',
        border: '2px solid black',
        borderRadius:'5px',
        display: 'flex',
        flexDirection: 'column',
        wordWrap: 'breakWord',
    }
})

// background-image: linear-gradient( 109.6deg,  rgba(62,161,219,1) 11.2%, rgba(93,52,236,1) 100.2% );
export default useStyles