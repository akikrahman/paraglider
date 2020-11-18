'use strict';


let imagefile = [];
let index = 0;
let max = 0;
let myTimer = {};
let started = false;

let filesnames = { "images": [ { "id": 1, "name": "G0017968.JPG" }, { "id": 2, "name": "G0017969.JPG" }, { "id": 3, "name": "G0017970.JPG" }, { "id": 4, "name": "G0017971.JPG" }, { "id": 5, "name": "G0017974.JPG" }, { "id": 6, "name": "G0017978.JPG" }, { "id": 7, "name": "G0017979.JPG" }, { "id": 8, "name": "G0027982.JPG" }, { "id": 9, "name": "G0027984.JPG" }, { "id": 10, "name": "G0027987.JPG" }, { "id": 11, "name": "G0027988.JPG" }, { "id": 12, "name": "G0027989.JPG" }, { "id": 13, "name": "G0027990.JPG" }, { "id": 14, "name": "G0027991.JPG" }, { "id": 15, "name": "G0027992.JPG" }, { "id": 16, "name": "G0027993.JPG" }, { "id": 17, "name": "G0027995.JPG" }, { "id": 18, "name": "G0027998.JPG" }, { "id": 19, "name": "G0028001.JPG" }, { "id": 20, "name": "G0028003.JPG" }, { "id": 21, "name": "G0028004.JPG" }, { "id": 22, "name": "G0028008.JPG" }, { "id": 23, "name": "G0028011.JPG" }, { "id": 24, "name": "G0028013.JPG" }, { "id": 25, "name": "G0038014.JPG" }, { "id": 26, "name": "G0038015.JPG" }, { "id": 27, "name": "G0038016.JPG" }, { "id": 28, "name": "G0038017.JPG" }, { "id": 29, "name": "G0038020.JPG" }, { "id": 30, "name": "G0038021.JPG" }, { "id": 31, "name": "G0038022.JPG" }, { "id": 32, "name": "G0038025.JPG" }, { "id": 33, "name": "G0038027.JPG" }, { "id": 34, "name": "G0038030.JPG" }, { "id": 35, "name": "G0038041.JPG" }, { "id": 36, "name": "G0038042.JPG" }, { "id": 37, "name": "G0038043.JPG" }, { "id": 38, "name": "G0038045.JPG" }, { "id": 39, "name": "G0038047.JPG" }, { "id": 40, "name": "G0038050.JPG" }, { "id": 41, "name": "G0038051.JPG" }, { "id": 42, "name": "G0038052.JPG" }, { "id": 43, "name": "G0038054.JPG" }, { "id": 44, "name": "G0038056.JPG" }, { "id": 45, "name": "G0038057.JPG" }, { "id": 46, "name": "G0038061.JPG" }, { "id": 47, "name": "G0038063.JPG" }, { "id": 48, "name": "G0038065.JPG" }, { "id": 49, "name": "G0038068.JPG" }, { "id": 50, "name": "G0048072.JPG" }, { "id": 51, "name": "G0048073.JPG" }, { "id": 52, "name": "G0048075.JPG" }, { "id": 53, "name": "G0048079.JPG" }, { "id": 54, "name": "G0048082.JPG" }, { "id": 55, "name": "G0048083.JPG" }, { "id": 56, "name": "G0048085.JPG" }, { "id": 57, "name": "G0048086.JPG" }, { "id": 58, "name": "G0048088.JPG" }, { "id": 59, "name": "G0048092.JPG" }, { "id": 60, "name": "G0048093.JPG" }, { "id": 61, "name": "G0048094.JPG" }, { "id": 62, "name": "G0048099.JPG" }, { "id": 63, "name": "G0058104.JPG" }, { "id": 64, "name": "G0058105.JPG" }, { "id": 65, "name": "G0058107.JPG" }, { "id": 66, "name": "G0058111.JPG" }, { "id": 67, "name": "G0058112.JPG" }, { "id": 68, "name": "G0058113.JPG" }, { "id": 69, "name": "G0058115.JPG" }, { "id": 70, "name": "G0058118.JPG" }, { "id": 71, "name": "G0058120.JPG" }, { "id": 72, "name": "G0058121.JPG" }, { "id": 73, "name": "G0058122.JPG" }, { "id": 74, "name": "G0058123.JPG" }, { "id": 75, "name": "G0058124.JPG" }, { "id": 76, "name": "G0058131.JPG" }, { "id": 77, "name": "G0058132.JPG" }, { "id": 78, "name": "G0058134.JPG" }, { "id": 79, "name": "G0058135.JPG" }, { "id": 80, "name": "G0058137.JPG" }, { "id": 81, "name": "G0058138.JPG" }, { "id": 82, "name": "G0058140.JPG" }, { "id": 83, "name": "G0058141.JPG" }, { "id": 84, "name": "G0058143.JPG" }, { "id": 85, "name": "G0058144.JPG" } ]}

function readPicsLocal(){
  const it = filesnames["images"][Symbol.iterator]();
  let position = it.next();
  let filename = "";
  while(!position.done){
      filename = `/images/${position.value.name}`
      imagefile.push(filename);
      position = it.next();
      console.log(filename);
  }
  max= imagefile.length;
}

async function readPicsFile(){
  //This function is used when we have a JSON server running
  const  {data} = await axios.get(`http://localhost:3004/images`);
  const it = data[Symbol.iterator]();
  let position = it.next();
  let filename = "";
  while(!position.done){
      const image = position.value.name;
      position = it.next();
      filename = `/images/${image}`;
      imagefile.push(filename);
  }
  max= imagefile.length;
}

function changePics(){
  
  if(!started){
  //readPicsFile();
  readPicsLocal();
  index=0;
  started=true;
  }
  else{
    stopPics();
  }
  
  myTimer = setInterval( () => {
    document.getElementById('glideImg').setAttribute('src', imagefile[index]);
    index++;
    if(index === max) index=0;
  }
  , 3000);
}

function restartPics(){
  index=0;
  stopPics();
  myTimer = setInterval( () => {
    document.getElementById('glideImg').setAttribute('src', imagefile[index]);
    index++;
    if(index === max) index=0;
  }
  , 3000);
}

function stopPics(){
  clearInterval(myTimer);
}