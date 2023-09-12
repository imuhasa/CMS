'use strict'

const getData = async() => {
    const data = await fetch(`https://goldenrod-scythe-heather.glitch.me/api/goods?}`);
    return data.json()
}





export { getData }
