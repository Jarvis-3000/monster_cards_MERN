import { makeStyles } from "@material-ui/core"

const useStyles=makeStyles({
    monsterList:{
        width:'100%',
        padding:'5px',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        alignItems: 'center',
    },
    
    monster:{
        width:'25%',
        height:'fitContent',
        // padding:10px,
        margin:'10px',
        backgroundColor: 'rgba(1510, 193, 196, 0.5)',
        border: '2px solid black',
        display: 'flex',
        flexDirection: 'column',
        wordWrap: 'breakWord',
    }
})

export default useStyles