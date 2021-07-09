'use strict';

var pictureFunctions = function(){

let imagefile = [];
let index = 0;
let max = 0;
let myTimer = {};
let started = false;

let filesnames = { "images": [ { "id": 1, "name": "G0017968_thumbnail.jpg" }, { "id": 2, "name": "G0017969_thumbnail.jpg" }, { "id": 3, "name": "G0017970_thumbnail.jpg" }, { "id": 4, "name": "G0017971_thumbnail.jpg" }, { "id": 5, "name": "G0017974_thumbnail.jpg" }, { "id": 6, "name": "G0017978_thumbnail.jpg" }, { "id": 7, "name": "G0017979_thumbnail.jpg" }, { "id": 8, "name": "G0027982_thumbnail.jpg" }, { "id": 9, "name": "G0027984_thumbnail.jpg" }, { "id": 10, "name": "G0027987_thumbnail.jpg" }, { "id": 11, "name": "G0027988_thumbnail.jpg" }, { "id": 12, "name": "G0027989_thumbnail.jpg" }, { "id": 13, "name": "G0027990_thumbnail.jpg" }, { "id": 14, "name": "G0027991_thumbnail.jpg" }, { "id": 15, "name": "G0027992_thumbnail.jpg" }, { "id": 16, "name": "G0027993_thumbnail.jpg" }, { "id": 17, "name": "G0027995_thumbnail.jpg" }, { "id": 18, "name": "G0027998_thumbnail.jpg" }, { "id": 19, "name": "G0028001_thumbnail.jpg" }, { "id": 20, "name": "G0028003_thumbnail.jpg" }, { "id": 21, "name": "G0028004_thumbnail.jpg" }, { "id": 22, "name": "G0028008_thumbnail.jpg" }, { "id": 23, "name": "G0028011_thumbnail.jpg" }, { "id": 24, "name": "G0028013_thumbnail.jpg" }, { "id": 25, "name": "G0038014_thumbnail.jpg" }, { "id": 26, "name": "G0038015_thumbnail.jpg" }, { "id": 27, "name": "G0038016_thumbnail.jpg" }, { "id": 28, "name": "G0038017_thumbnail.jpg" }, { "id": 29, "name": "G0038020_thumbnail.jpg" }, { "id": 30, "name": "G0038021_thumbnail.jpg" }, { "id": 31, "name": "G0038022_thumbnail.jpg" }, { "id": 32, "name": "G0038025_thumbnail.jpg" }, { "id": 33, "name": "G0038027_thumbnail.jpg" }, { "id": 34, "name": "G0038030_thumbnail.jpg" }, { "id": 35, "name": "G0038041_thumbnail.jpg" }, { "id": 36, "name": "G0038042_thumbnail.jpg" }, { "id": 37, "name": "G0038043_thumbnail.jpg" }, { "id": 38, "name": "G0038045_thumbnail.jpg" }, { "id": 39, "name": "G0038047_thumbnail.jpg" }, { "id": 40, "name": "G0038050_thumbnail.jpg" }, { "id": 41, "name": "G0038051_thumbnail.jpg" }, { "id": 42, "name": "G0038052_thumbnail.jpg" }, { "id": 43, "name": "G0038054_thumbnail.jpg" }, { "id": 44, "name": "G0038056_thumbnail.jpg" }, { "id": 45, "name": "G0038057_thumbnail.jpg" }, { "id": 46, "name": "G0038061_thumbnail.jpg" }, { "id": 47, "name": "G0038063_thumbnail.jpg" }, { "id": 48, "name": "G0038065_thumbnail.jpg" }, { "id": 49, "name": "G0038068_thumbnail.jpg" }, { "id": 50, "name": "G0048072_thumbnail.jpg" }, { "id": 51, "name": "G0048073_thumbnail.jpg" }, { "id": 52, "name": "G0048075_thumbnail.jpg" }, { "id": 53, "name": "G0048079_thumbnail.jpg" }, { "id": 54, "name": "G0048082_thumbnail.jpg" }, { "id": 55, "name": "G0048083_thumbnail.jpg" }, { "id": 56, "name": "G0048085_thumbnail.jpg" }, { "id": 57, "name": "G0048086_thumbnail.jpg" }, { "id": 58, "name": "G0048088_thumbnail.jpg" }, { "id": 59, "name": "G0048092_thumbnail.jpg" }, { "id": 60, "name": "G0048093_thumbnail.jpg" }, { "id": 61, "name": "G0048094_thumbnail.jpg" }, { "id": 62, "name": "G0048099_thumbnail.jpg" }, { "id": 63, "name": "G0058104_thumbnail.jpg" }, { "id": 64, "name": "G0058105_thumbnail.jpg" }, { "id": 65, "name": "G0058107_thumbnail.jpg" }, { "id": 66, "name": "G0058111_thumbnail.jpg" }, { "id": 67, "name": "G0058112_thumbnail.jpg" }, { "id": 68, "name": "G0058113_thumbnail.jpg" }, { "id": 69, "name": "G0058115_thumbnail.jpg" }, { "id": 70, "name": "G0058118_thumbnail.jpg" }, { "id": 71, "name": "G0058120_thumbnail.jpg" }, { "id": 72, "name": "G0058121_thumbnail.jpg" }, { "id": 73, "name": "G0058122_thumbnail.jpg" }, { "id": 74, "name": "G0058123_thumbnail.jpg" }, { "id": 75, "name": "G0058124_thumbnail.jpg" }, { "id": 76, "name": "G0058131_thumbnail.jpg" }, { "id": 77, "name": "G0058132_thumbnail.jpg" }, { "id": 78, "name": "G0058134_thumbnail.jpg" }, { "id": 79, "name": "G0058135_thumbnail.jpg" }, { "id": 80, "name": "G0058137_thumbnail.jpg" }, { "id": 81, "name": "G0058138_thumbnail.jpg" }, { "id": 82, "name": "G0058140_thumbnail.jpg" }, { "id": 83, "name": "G0058141_thumbnail.jpg" }, { "id": 84, "name": "G0058143_thumbnail.jpg" }, { "id": 85, "name": "G0058144_thumbnail.jpg" } ]}

function readPicsLocal(){
  const it = filesnames["images"][Symbol.iterator]();
  let position = it.next();
  let filename = "";
  while(!position.done){
      filename = `/thumbnails/${position.value.name}`
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
      filename = `/thumbnails/${image}`;
      imagefile.push(filename);
  }
  max= imagefile.length;
}

var changePics = function changePics(){
  
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

var restartPics = function restartPics(){
  index=0;
  stopPics();
  myTimer = setInterval( () => {
    document.getElementById('glideImg').setAttribute('src', imagefile[index]);
    index++;
    if(index === max) index=0;
  }
  , 3000);
}

var stopPics = function stopPics(){
  clearInterval(myTimer);
}

return {
  changePics: changePics,
  restartPics: restartPics,
  stopPics: stopPics
}
}();