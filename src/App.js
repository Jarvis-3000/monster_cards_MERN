import React from "react"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"

import { createMuiTheme, ThemeProvider } from "@material-ui/core"
//styles
import useStyles from "./styles.app"

import SearchBox from "./components/searchBox/searchBox"
import MonsterList from "./components/monsterList/monsterList"

import * as actions from "./redux/dataFunctions/actions"
import * as userActions from "./redux/userFunctions/actions"


const Theme=createMuiTheme({
    palette:{
        primary:{
            main:'#6A287E'
        }
    },
    typography:{
        // fontFamily:'Indie Flower, cursive',
        // fontFamily: 'Amatic SC, cursive',
        fontFamily: 'Oswald,  cursive',
        // fontSize: 14,
        fontWeightLight: 300,
        fontWeightRegular: 400,
        fontWeightMedium: 500,
        fontWeightBold: 700,
    },
    shape:{
        borderRadius: 5
    }

})


function App(){

    const classes=useStyles() //styling
    const dispatch=useDispatch()           //useDispatch() for dispatching an action

    const monstersState=useSelector(state=>state.monsters)
    const userState=useSelector(state=>state.user)
    const { monsters, fetchState} = useSelector(state => state.monsters)    //useSelector() for getting the
    const [bool, setBool] =useState(false)

    const [filterdMonsters, setFilteredMonsters]=useState([])
    const [searchString, setSearchString]=useState('')

    const handleSearchString=(e)=>{
        // useState does not support second callback
        // but for being up to date with state , use prevState just like class lifecycle
        setSearchString(prevSearchString=>e.target.value)
        
    }

    // for frtching the data from api 

    const handleFilterdMonsters=()=>{
        let filtered=monsters.filter(monster=>
            (monster.name.toLowerCase().includes(searchString.toLowerCase())) 
        )
        // console.log(filtered)
        setFilteredMonsters(filtered)
    }

    const getCookies = (name) => {
        // Split cookie string and get all individual name=value pairs in an array
        var cookieArr = document.cookie.split(";");
    
        // Loop through the array elements
        for(var i = 0; i < cookieArr.length; i++) {
            var cookiePair = cookieArr[i].split("=");
            
            /* Removing whitespace at the beginning of the cookie name
            and compare it with the given string */
            if(name === cookiePair[0].trim()) {
                // Decode the cookie value and return
                return decodeURIComponent(cookiePair[1]);
            }
        }
        
        // Return null if not found
        return null;
    }

    //get persisted data
    const getPersistedData=async()=>{
        const monstersState =await JSON.parse(localStorage.getItem("monstersState"))
        if(monstersState){
            await dispatch(actions.getPersistedData(monstersState))  
        }
        else{
            console.log("error on konstersState")
        }
        
    }

    //getting problems one dispatch is making undefined of other reducers data

    // const getPersistedDataUser=async()=>{
    //     const userState = await JSON.parse(localStorage.getItem("userState"))
    //     console.log("userssss",userState)
    //     if(userState){
    //         await dispatch(userActions.getPersistedData(userState))
    //     }
    // }

    useEffect(()=>{

            if(!navigator.onLine){
                getPersistedData()
                // getPersistedDataUser()
            }
            else{
                dispatch(actions.addMonsters())            
            }

            const token=getCookies("token")
            if(token){
                dispatch(userActions.saveToken(token))
                dispatch(userActions.toggleLogin(true))
            }
            console.log("app token",token)

    },[])
    //never leave second argument emepty else it will cause endless loop
    // We passed in an empty array to useEffect as the 2nd argument 
    // so that the callback only runs on component's first load.


    useEffect( ()=>{
        console.log("part5")
        console.log("monsterststae",monstersState)
        console.log("userststae",userState)

        localStorage.setItem("monstersState", JSON.stringify(monstersState))
        localStorage.setItem("userState", JSON.stringify(userState))
    },[monstersState, userState])

 
    useEffect(()=>{
        // console.log("monsters",monsters)
        handleFilterdMonsters()
        // console.log("filteredMonsters",filterdMonsters)
    },[monsters, searchString])
    //second param/[] is callled dependencied
    //These dependencies specify on which cases useEffect should respond to a component being updated.


    return (
        <ThemeProvider theme={Theme}>
            <div className={classes.app}>
                <SearchBox handleSearchString={handleSearchString} />
                <MonsterList monsters={filterdMonsters} fetchState={fetchState}/>
            </div>
        </ThemeProvider>
    )
}


export default App