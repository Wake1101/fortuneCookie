const btnChange = document.querySelector('#btnReveal');
const btnAgain = document.querySelector('#btnAgain');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');

btnChange.addEventListener('click', toggleScreen);
btnAgain.addEventListener('click', toggleScreen);

function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}