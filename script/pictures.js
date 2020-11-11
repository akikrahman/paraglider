'use strict';


let imagefile = [];
let index = 0;
let max = 0;

async function readPicsFile(){

  const  {data} = await axios.get(`http://localhost:3004/images`);
  //const data = JSON.parse('db');
  const it = data[Symbol.iterator]();
  let position = it.next();
  let filename = "";

  while(!position.done){
      const image = position.value.name;
      position = it.next();
      filename = '/images/' + image + '.jpg';
      imagefile.push(filename);
  }

  max= imagefile.length;
}


function changePics(){

  readPicsFile();

  imagefile.length;
  index=0;
  setInterval( () => {
    document.getElementById('glideImg').setAttribute('src', imagefile[index]);
    index++;
    if(index === max) index=0;
  }
  , 3000);

}