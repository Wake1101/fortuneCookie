const btnChange = document.querySelector('#btnReveal');
const btnAgain = document.querySelector('#btnAgain');
const screen1 = document.querySelector('.screen1');
const screen2 = document.querySelector('.screen2');
let randomNumber = Math.round(Math.random() * 10);
let phrases = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Apreciando cada passo, mas já sonhando com as próximas conquistas!",
    "Quem cultiva gratidão é capaz de realizar sonhos que parecem inalcançáveis!",
    "Desejar algo maior pra sua vida não significa que você está insatisfeito com o que tem.",
    "A vida reserva surpresas maravilhosas para todos aqueles que cultivam a gratidão!",
    "Lembre-se do seu passado com carinho. Afinal, é por causa dele que você está aqui hoje!",
    "Com o coração cheio de gratidão, sei que sou capaz de superar qualquer obstáculo que a vida apresentar!",
    "A gratidão é uma grande aliada do sucesso!",
    "Sucesso é um esporte coletivo. Demonstre gratidão a todos os que colaboram com suas vitórias.",
    "A melhor maneira de agradecer por um belo momento é desfrutá-lo plenamente.",
    "Feliz de quem recebeu do céu um pedaço de pão e não precisa de agradecer a ninguém além do próprio céu.",
    "A gratidão é o único tesouro dos humildes."
]

btnChange.addEventListener('click', handleRevealClick);
btnAgain.addEventListener('click', handleAgainClick);

function toggleScreen(){
    screen1.classList.toggle("hide");
    screen2.classList.toggle("hide");
}

function handleRevealClick(){
    toggleScreen();
    document.querySelector(".screen2 p").innerText = `${phrases[randomNumber]}`;
}

function handleAgainClick(){
    toggleScreen();
    randomNumber = Math.round(Math.random() * 10);
}





