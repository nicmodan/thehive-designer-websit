

export const getAnyAmountItems = (state, action)=>{
    const newList = []
    for(let i = 0; i<action; i++){
        const random = Math.floor(Math.random()*state.length)
        newList.push(random)
    }
   const resulte = newList.map(val=>state[val])
   return resulte
}