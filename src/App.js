import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
import { createMuiTheme, ThemeProvider } from "@material-ui/core"
//styles
import useStyles from "./styles.app"

import SearchBox from "./components/searchBox/searchBox"
import MonsterList from "./components/monsterList/monsterList"


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

    const [monsters, setMonsters]=useState([])
    const [filterdMonsters, setFilteredMonsters]=useState([])
    const [searchString, setSearchString]=useState('')

    const handleSearchString=(e)=>{
        // useState does not support second callback
        // but for being up to date with state , use prevState just like class lifecycle
        setSearchString(prevSearchString=>e.target.value)
        
    }

    // for frtching the data from api 
    const fetchData=async ()=>{
        const response=await axios.get("https://jsonplaceholder.typicode.com/users")
        setMonsters(response.data)
    }

    const handleFilterdMonsters=()=>{
        let filtered=monsters.filter(monster=>
            (monster.name.toLowerCase().includes(searchString.toLowerCase())) 
        )
        // console.log(filtered)
        setFilteredMonsters(filtered)
    }

    useEffect(()=>{
        fetchData()
    },[])
    //never leave second argument emepty else it will cause endless loop
    // We passed in an empty array to useEffect as the 2nd argument 
    // so that the callback only runs on component's first load.


    useEffect(()=>{
        console.log("monsters",monsters)
        handleFilterdMonsters()
        console.log("filteredMonsters",filterdMonsters)
    },[monsters, searchString])
    //second param/[] is callled dependencied
    //These dependencies specify on which cases useEffect should respond to a component being updated.

 
    return (
        <ThemeProvider theme={Theme}>
            <div className={classes.app}>
                <SearchBox handleSearchString={handleSearchString} />
                <MonsterList monsters={filterdMonsters}/>
            </div>
        </ThemeProvider>
    )
}


export default App