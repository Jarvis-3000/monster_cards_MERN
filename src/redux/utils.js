export const editMonsters=({monsters,id,input})=>{
    console.log("editing...")
    return monsters.map(monster=>{
        if(monster.id===id){
            monster.name=input
        }
        return monster
    })
}