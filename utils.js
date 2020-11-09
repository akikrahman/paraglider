/*function showMessage(message){
   // document.getElementById("title").innerHTML =message;
   console.log(message);
}

showMessage("hello!");
*/

/*unction *timestampGenerator() {
   console.log(Date.now());
}
const it = timestampGenerator();
console.log(it.next());
*/

function* randomNum(){
   while (true){
      yield Math.floor(Math.random() * 100);
   }
}
const it = randomNum();
function getRandomNumber(){
   return it.next().value;
}
console.log(getRandomNumber());