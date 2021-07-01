export const editMonsters=({monsters,id,input})=>{
    // console.log("editing_utils...")
    console.log(monsters)
    return monsters.map(monster=>{
        if(monster.id===id){
            monster.name=input
        }
        return monster
    })
}