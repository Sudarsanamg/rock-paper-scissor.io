let ran;
let key = '';
let score = JSON.parse(localStorage.getItem('score'));
if (score === null) {
    score = {
        win: 0,
        loose: 0,
        tie: 0
    };
}


function click1(userChoice) {
    ran = Math.random();
    console.log(ran);
    if (ran >= 0 && ran < (1 / 3)) {
        key = 'rock';
    } else if (ran >= (1 / 3) && ran < (2 / 3)) {
        key = 'paper';
    } else if (ran >= (2 / 3) && ran <= (1)) {
        key = 'scissors';
    }
    if (userChoice == key) {
        score.tie += 1;
        document.querySelector('.re').innerHTML = 'Tie';
        document.querySelector('.result').innerHTML = `win ${score.win} loose ${score.loose} tie ${score.tie}`;
    } else if (userChoice == 'rock' && key == 'paper') {
        score.loose += 1;
        document.querySelector('.re').innerHTML = 'Loose';
        document.querySelector('.result').innerHTML = `win ${score.win} loose ${score.loose} tie ${score.tie}`;
    } else if (userChoice == 'paper' && key == 'rock') {
        score.win += 1;
        document.querySelector('.re').innerHTML = 'Win';
        document.querySelector('.result').innerHTML = `win ${score.win} loose ${score.loose} tie ${score.tie}`;
    } else if (userChoice == 'paper' && key == 'scissors') {
        score.loose += 1;
        document.querySelector('.re').innerHTML = 'Loose';
        document.querySelector('.result').innerHTML = `win ${score.win} loose ${score.loose} tie ${score.tie}`;
    } else if (userChoice == 'scissors' && key == 'paper') {
        score.win += 1;
        document.querySelector('.re').innerHTML = 'Win';
        document.querySelector('.result').innerHTML = `win ${score.win} loose ${score.loose} tie ${score.tie}`;
    } else if (userChoice == 'scissors' && key == 'rock') {
        score.loose += 1;
        document.querySelector('.re').innerHTML = 'Loose';
        document.querySelector('.result').innerHTML = `win ${score.win} loose ${score.loose} tie ${score.tie}`;
    } else if (userChoice == 'rock' && key == 'scissors') {
        score.win += 1;
        document.querySelector('.re').innerHTML = 'Win';
        document.querySelector('.result').innerHTML = `win ${score.win} loose ${score.loose} tie ${score.tie}`;
    }
    document.querySelector('.qwerty').innerHTML=`you
    <img src="../images/${userChoice}-emoji.png" alt="" class="c">
    <img src="../images/${key}-emoji.png" alt="" class="c">
    computer`;
    localStorage.setItem('score', JSON.stringify(score));
}
