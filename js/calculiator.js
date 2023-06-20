const calcDom = document.querySelector('form');
const rezultDom = document.getElementById('rezultatas');

const oneDom = calcDom.querySelector(`.but1`);
const twoDom = calcDom.querySelector(`.but2`);
const threeDom = calcDom.querySelector(`.but3`);
const fourDom = calcDom.querySelector(`.but4`);
const fifeDom = calcDom.querySelector(`.but5`);
const sixDom = calcDom.querySelector(`.but6`);
const sevenDom = calcDom.querySelector(`.but7`);
const eightDom = calcDom.querySelector(`.but8`);
const nineDom = calcDom.querySelector(`.but9`);
/*const multiDom = document.getElementsByClassName(`.butx`);
const fourDom = document.getElementsByClassName(`.but4`);
const fifeDom = document.getElementsByClassName(`.but5`);
const sixDom = document.getElementsByClassName(`.but6`);
const minusDom = document.getElementsByClassName(`.but-`);*/

let counter = 0;

oneDom.addEventListener('click', (event) => {
    event.preventDefault();
    counter =1;
    rezultDom.textContent = counter;
});

twoDom.addEventListener('click', (event) => {
    event.preventDefault();
    counter =2;
    rezultDom.textContent = counter;
});

threeDom.addEventListener('click', (event) => {
     event.preventDefault();
     counter =3;
     rezultDom.textContent = counter;
});

fourDom.addEventListener('click', (event) => {
    event.preventDefault();
    counter =4;
    rezultDom.textContent = counter;
});

fifeDom.addEventListener('click', (event) => {
    event.preventDefault();
    counter =5;
    rezultDom.textContent = counter;
});

sixDom.addEventListener('click', (event) => {
     event.preventDefault();
     counter =6;
     rezultDom.textContent = counter;
 });
sevenDom.addEventListener('click', (event) => {
    event.preventDefault();
    counter =7;
    rezultDom.textContent = counter;
});

eightDom.addEventListener('click', (event) => {
    event.preventDefault();
    counter =8;
    rezultDom.textContent = counter;
});

nineDom.addEventListener('click', (event) => {
     event.preventDefault();
     counter =9;
     rezultDom.textContent = counter;
 });







/*console.log(calcDom);*/


/*console.log(symbolDom);
console.log(procentDom);
console.log(divDom);
console.log(sevenDom);
console.log(eightDom);*/
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