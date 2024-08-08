document.body.children[1].children[0].href = 'https://google.com';


let newAnchorElement = document.createElement('a'); //to create a new element 
newAnchorElement.href = 'https://google.com'; 
newAnchorElement.textContent = 'This leads to Google!'; 

let firstParagraph = document.querySelector('p'); //to insert new element

firstParagraph.appendChild(newAnchorElement); 

let firstH1Element = document.querySelector('h1'); 
 {
  let parentElement = firstH1Element.parentElement; //to remove element
  parentElement.removeChild(firstH1Element);
}
firstParagraph.parentElement.append(firstParagraph);// to move element around 

console.log(firstparagraph.innerHTML);
firstparagraph.innerHTML = 'Hi, this is <strong>important!</strong>'; //using innerHTML
