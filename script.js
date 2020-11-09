import axios from "./axios.min.js";

async function getImages  () {
    const  {data} = await axios.get(`http://localhost:3000/images`);
    const it = data[Symbol.iterator]();
    let position = it.next();

    while(!position.done){
        const image = position.value.name;
        console.log(`image has name ${position.value.name} `);
        position = it.next();
    }
    console.log(item);
    readline.close()
};

export { getImages };