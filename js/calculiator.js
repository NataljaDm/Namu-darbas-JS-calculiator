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
