function rollDice() {
    const rollButton = document.querySelector('#rollButton');
    let randomNumber1 = Math.floor(Math.random() * 6) + 1;
    let randomNumber2 = Math.floor(Math.random() * 6) + 1;

    const img1 = document.querySelector('.img1');
    const imageName = `dice${randomNumber1}.png`;
    img1.setAttribute('src', `./images/${imageName}`);

    const img2 = document.querySelector('.img2');
    const imageName2 = `dice${randomNumber2}.png`;
    img2.setAttribute('src', `./images/${imageName2}`);

    let resultMessage;
    if (randomNumber1 > randomNumber2) {
    resultMessage = "Player 1 wins!";
    } else if (randomNumber2 > randomNumber1) {
    resultMessage = "Player 2 wins!";
    } else {
    resultMessage = "It's a draw!";
    }
    const h1Element = document.querySelector('h1');
    h1Element.innerHTML = resultMessage;
}
rollButton.addEventListener('click', rollDice);