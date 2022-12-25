let myDiv = document.getElementById('first');
console.log(myDiv);

let myHeader = document.getElementById('myTitle');
console.log(myHeader);

myHeader.innerText = ' ';
myHeader.innerText = 'Its cool but is made in JS';

let paragraph = document.querySelector('.paragraph');
console.log(paragraph);

paragraph.innerText = 'Not so easy!';

let secondDiv = document.getElementsByClassName('anotherDiv');
console.log(secondDiv);
let paragraphs = document.querySelectorAll("p"); 
let secondParagraph = document.querySelector(".paragraphSecond");
console.log(secondParagraph);

secondParagraph.innerText = 'I change a class whitout space';

let nextSibling = secondParagraph.nextElementSibling;
console.log(nextSibling);

nextSibling.innerText = 'Yes it is!';

let nextSibling1 = document.getElementsByTagName('h1')[1];
console.log(nextSibling1);

nextSibling1.innerText = 'HO HO HO';

let xMas = nextSibling1.nextElementSibling;
console.log(xMas);

xMas.innerText = 'Happy New Year';










// let headingOne = document.getElementsByTagName('h3')
// console.log(headingOne);

// headingOne.innerText = 'ljldvnljn'







// let paragraphSecond = document.querySelector('.paragraph second');
// console.log(paragraphSecond);

// paragraphSecond.innerText = 'I dont think so!';
