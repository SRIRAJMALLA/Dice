// var randomNumber1 = Math.floor(Math.random()*6) + 1;
// var randomNumber2 = Math.floor(Math.random()*6) + 1;

const dice1 = document.querySelectorAll('img')[0];
const dice2 = document.querySelectorAll('img')[1];

// dice1.src  = `images/dice${randomNumber1}.png`;
// dice2.src  = `images/dice${randomNumber2}.png`;

dice1.addEventListener('click', function(){
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    dice1.src = `images/dice${randomNumber1}.png`
})

dice2.addEventListener('click', function(){
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    dice2.src = `images/dice${randomNumber2}.png`
})




  