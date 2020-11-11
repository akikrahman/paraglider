

async function changePics(){

  console.log('running a function');

  const  {data} = await axios.get(`http://localhost:3004/images`);
  //const data = JSON.parse('db');
  const it = data[Symbol.iterator]();
  let position = it.next();

  let imagefile = [];

  while(!position.done){
      const image = position.value.name;
      console.log(`image has name ${position.value.name} `);
      position = it.next();
      filename = './images/' + image + '.jpg';
      imagefile.push(filename);
  }

  console.log(imagefile);
  max = imagefile.length;
  var  i=0;
  setInterval( () => {
    document.getElementById('glideImg').setAttribute('src', imagefile[i]);
    console.log('wait for 2 seconds');
    console.log(i);
    i++;
    if(i === max) i=0;
  }
  , 3000);

}