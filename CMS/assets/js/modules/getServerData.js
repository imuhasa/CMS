'use strict'

const getData = async() => {
    const data = await fetch(`https://goldenrod-scythe-heather.glitch.me/api/goods?}`);
    return data.json()
}

// fetch('https://goldenrod-scythe-heather.glitch.me/api/goods',{
//     method:'POST',
//     headers: {
//     "Content-Type": "application/json", 
//     },
//     body: JSON.stringify(newItem),
//     mode:'cors'
// })



export { getData }
