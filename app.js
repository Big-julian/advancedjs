let paragraphElement = document.querySelector('p');
function changeParagraphText () {
    paragraphElement.textContent ='clicked !'
console.log('paragraph clicked'); 

}
paragraphElement.addEventListener( 'click' , changeParagraphText);
let inputElement = document.querySelector ('input')
inputElement. addEventListener('input');

function reteriveUserInput( ){
let enteredText = inputElement.value
console.log('entered text');
}
inputElement.addEventListener('input', reteriveUserInput);
{

}