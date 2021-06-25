import React from "react"
import axios from "axios"
import { useState, useEffect } from "react"
// import { createContext } from "react"

import useStyles from "./styles.app"

import SearchBox from "./components/searchBox/searchBox"
import MonsterList from "./components/monsterList/monsterList"

// export const monstersContext=createContext(null)

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
        // setMonsters(response.data,(monsters)=>{
        //     console.log(monsters)
        // })
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
        // <monstersContext.Provider value={filterdMonsters} className="app">
        <div className={classes.app}>
            <SearchBox handleSearchString={handleSearchString} />
            <MonsterList monsters={filterdMonsters}/>
        </div>
        //  </monstersContext.Provider>
    )
}


export default App