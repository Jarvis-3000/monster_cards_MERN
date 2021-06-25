import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    searchBox:{
        margin:'auto',
        width:'fit-content',
        padding:'20px 40px 10px 40px',
        border:'1px solid black',
        borderRadius:'5px',
        backgroundColor:'rgba(1510, 193, 196, 0.3)'
    },
    input: {
      display: 'none',
    },
    inputBox:{
        color:'white',
        margin: '10px 0px',
        padding:'10px 10px', 
        width: '100%',
        height:'40px',
        boxSizing:'border-box',
        borderColor:'white',
        borderRadius:'5px',
        outline:'none',
        backgroundColor:'rgba(0,0,0,0)'
    },
    btn:{
        backgroundColor:'orange',
        height:'40px',
        boxSizing:'border-box',
        color:'white',
        '&:hover':{
            backgroundColor:'red',
            color:'white'
        }
    },
    upload:{
        margin:'20px 0px 0px 0px'
    }

})

export default useStyles