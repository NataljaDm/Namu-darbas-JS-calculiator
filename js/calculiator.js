const calcDom = document.querySelector('form');
const rezultDom = document.getElementById('rezultatas');

const cDom = calcDom.querySelector('button');
const symbolDom = calcDom.querySelector('button:nth-child(2)');
const procentDom = calcDom.querySelector('button:nth-child(3)');
const divDom = calcDom.querySelector('button:nth-child(4)');
const sevenDom = document.getElementsByClassName(`but7`);
const eightDom = document.getElementsByClassName(`but8`);
const nineDom = document.getElementsByClassName(`.but9`);
const multiDom = document.getElementsByClassName(`butx`);
const fourDom = document.getElementsByClassName(`but4`);
const fifeDom = document.getElementsByClassName(`but5`);
const sixDom = document.getElementsByClassName(`but6`);
const minusDom = document.getElementsByClassName(`but-`);

let counter = '';


nineDOM.addEventListener('click', (event) => {
     event.preventDefault();
     rezultDOM.textContent = ++counter;
 });
   
console.log(calcDom);
console.log(rezultDom);

console.log(symbolDom);
console.log(procentDom);
console.log(divDom);
console.log(sevenDom);
console.log(eightDom);
console.log(nineDom);
/*console.log(number6);
console.log(number7);
console.log(number8);
/*console.log(number9);*/

/*const number9 = calcDom.querySelector('button:nth-child(9)');
const number0 = calcDom.getElementsByClassName('button2');*/
/*const symbolC = calcDom.querySelector('button:nth-child(10)');
const symbol1 = calcDom.querySelector('button:nth-child(11)');
const symbol2 = calcDom.querySelector('button:nth-child(12)');
const symbol3 = calcDom.querySelector('button:nth-child(13)');
const symbol4 = calcDom.querySelector('button:nth-child(14)');
const symbol5 = calcDom.querySelector('button:nth-child(15)');
const symbol6 = calcDom.querySelector('button:nth-child(16)');
const symbol7 = calcDom.querySelector('button:nth-child(17)');
const symbol8 = calcDom.querySelector('button:nth-child(18)');*/