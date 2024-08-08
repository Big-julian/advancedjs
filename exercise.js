let h1element = document.body.firstChild;
console.dir(h1element); 
h1element = document.body.children[0];
console.dir(h1element); 
console.dir(h1element.parentElement); 
console.dir(h1element.nextElementSibling); 
let firstTitle = document.getElementById('first-title');
anchorElement = document.querySelector('p a'); 
anchorElement.href = "https://google.com"; 